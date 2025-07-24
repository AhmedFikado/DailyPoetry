import type { RequestHandler } from "express";
import poemRepository from "./poemRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const poems = await poemRepository.readAll();

    res.json(poems);
  } catch (err) {
    next(err);
  }
};
const browsePoemsWithUser: RequestHandler = async (req, res, next) => {
  try {
    const poemsWithAuthor = await poemRepository.readAllWithAuthor();
    res.json(poemsWithAuthor);
  } catch (err) {
    next(err);
  }
};
const readById: RequestHandler = async (req, res, next) => {
  try {
    const poemId = Number(req.params.id);
    if (Number.isNaN(poemId)) {
      res.status(400).json("Problem with the id");
      return;
    }
    const poem = await poemRepository.readById(poemId);
    if (!poem) {
      res.status(404).json("There is a problem with this poem");
    } else {
      res.json(poem);
    }
  } catch (err) {
    next(err);
  }
};

const readByIdWithAuthor: RequestHandler = async (req, res, next) => {
  try {
    const poemId = Number(req.params.id);
    if (Number.isNaN(poemId)) {
      res.status(400).json("Problem with the id");
      return;
    }
    const poemWithAuthor = await poemRepository.readByIdWithAuthor(poemId);
    if (!poemWithAuthor) {
      res.status(404).json("There is a problem with this poem");
    } else {
      res.json(poemWithAuthor);
    }
  } catch (err) {
    next(err);
  }
};

const readPoetPoems: RequestHandler = async (req, res, next) => {
  try {
    const poetId = Number(req.params.id);
    if (Number.isNaN(poetId)) {
      res.status(400).json("Problem with the id");
      return;
    }
    const poetPoems = await poemRepository.readPoetPoems(poetId);
    if (!poetPoems) {
      res.status(404).json("There is a problem with those poems");
    } else {
      res.status(200).json(poetPoems);
    }
  } catch (err) {
    next(err);
  }
};
const add: RequestHandler = async (req, res, next) => {
  try {
    const { title, description, image, date, user_id } = req.body;
    if (!title || !description || !image || !date || !user_id) {
      res.status(400).json("Missing required fields");
      return;
    }
    const poem = await poemRepository.create(req.body);
    if (poem) {
      res.status(200).json("Poem created");
    } else {
      res.status(400).json("Poem not created");
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const poemId = Number(req.params.id);
    if (Number.isNaN(poemId)) {
      res.status(400).json("Problem with the id");
      return;
    }
    let image = req.body.image;
    if (!image || typeof image !== "string" || image === "{}") {
      const existingPoem = await poemRepository.readById(poemId);
      image = existingPoem?.image;
    }
    const { title, description, date } = req.body;
    if (!title || !description || !date) {
      res.status(400).json("Missing required fields");
      return;
    }
    const newPoem = {
      id: poemId,
      title: title,
      description: description,
      image: image,
      date: date,
    };
    const result = await poemRepository.update(newPoem);
    if (result === 0) {
      res.status(404).json("Edit failed");
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    next(err);
  }
};
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const poemId = Number(req.params.id);
    if (Number.isNaN(poemId)) {
      res.status(400).json("Problem with the id");
      return;
    }
    const deletedPoem = await poemRepository.delete(poemId);
    if (deletedPoem === 0) {
      res.status(404).json("Poem not found");
    } else {
      res.status(200).json("Poem deleted");
    }
  } catch (err) {
    next(err);
  }
};
export default {
  browse,
  browsePoemsWithUser,
  readById,
  readByIdWithAuthor,
  readPoetPoems,
  add,
  edit,
  destroy,
};
