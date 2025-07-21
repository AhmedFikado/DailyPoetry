import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import poemActions from "./modules/poem/poemActions";
import userActions from "./modules/user/userActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
router.get("/api/users", userActions.browse);
/* ************************************************************************* */
router.get("/api/poems", poemActions.browse);
router.get("/api/poem/:id", poemActions.readByIdWithAuthor);
router.post("/api/poem", poemActions.add);
router.put("/api/poem/:id", poemActions.edit);
router.delete("/api/poem/:id", poemActions.destroy);
export default router;
