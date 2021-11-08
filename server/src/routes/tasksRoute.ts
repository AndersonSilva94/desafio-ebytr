import express from 'express';
import verifyToken from '../middlewares/verifyToken';
import createTask from '../controllers/tasksController';

const router = express.Router();

router.post('/', verifyToken, createTask);

export default router;
