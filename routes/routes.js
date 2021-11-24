import express from "express";
import { createTodo, deleteTodo, getTodos } from "../controller/controller.js";

const TodoRouter = express.Router();

TodoRouter.get("/", getTodos);
TodoRouter.post("/", createTodo);
TodoRouter.post("/del", deleteTodo);

export default TodoRouter;
