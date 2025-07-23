import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import userRepository from "../modules/user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userRepository.readByEmail(email);
    if (!user) {
      res.status(401).json({ error: "This user doesn't exist" });
      return;
    }
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    const secretKey = process.env.APP_SECRET;
    if (!secretKey) {
      res.status(500).json({ error: "A secret key is needed" });
      return;
    }

    const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
    });
    res.status(200).json(payload);
  } catch (err) {
    next(err);
  }
};

export default { login };
