import { Router } from "express";
import todoControllers from "./todo.controllers";

const router = Router();

router.get(`/get-all`, todoControllers.getAllTodo);

export default router;
