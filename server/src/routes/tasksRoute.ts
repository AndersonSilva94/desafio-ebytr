import express from 'express';
import verifyToken from '../middlewares/verifyToken';
import { createTask, getAllTasks, updateTask } from '../controllers/tasksController';

const router = express.Router();

router.post('/', verifyToken, createTask);
router.get('/', verifyToken, getAllTasks);
router.put('/:id', verifyToken, updateTask);

export default router;
