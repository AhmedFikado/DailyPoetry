import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import poemActions from "./modules/poem/poemActions";
import userActions from "./modules/user/userActions";
import auth from "./utils/auth";
import file from "./utils/file";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
/* ************************************************************************* */
router.post("/api/login", auth.login);
router.get("/api/refresh-token", auth.refreshToken);

/* ************************************************************************* */
router.get("/api/users", userActions.browse);
/* ************************************************************************* */
router.get("/api/poems", poemActions.browsePoemsWithUser);
router.get("/api/poem/:id", poemActions.readByIdWithAuthor);
router.post("/api/poem", file.imageUpload, file.poemImage, poemActions.add);
router.put("/api/poem/:id", file.imageUpload, file.poemImage, poemActions.edit);
router.delete("/api/poem/:id", poemActions.destroy);
export default router;
