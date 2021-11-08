import express from 'express';
import verifyToken from '../middlewares/verifyToken';
import { createTask, getAllTasks } from '../controllers/tasksController';

const router = express.Router();

router.post('/', verifyToken, createTask);
router.get('/:id', getAllTasks);

export default router;
