import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

// todas las tareas
router.get("/tasks", getTasks);
// una tarea
router.get("/tasks/:id", getTask);
// crear nueva tarea
router.post("/tasks", createTask);
// actualizar tarea
router.put("/tasks/:id", updateTask);
// eliminar tarea
router.delete("/tasks/:id", deleteTask);

export default router;
