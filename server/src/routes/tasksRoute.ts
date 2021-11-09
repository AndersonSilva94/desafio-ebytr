import express from 'express';
import verifyToken from '../middlewares/verifyToken';
import {
  createTask, deleteTask, getAllTasks, updateTask,
} from '../controllers/tasksController';

const router = express.Router();

router.post('/', verifyToken, createTask);
router.get('/', verifyToken, getAllTasks);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);

export default router;
