import { NextFunction, Response, Request } from 'express';
import { create, getAll, update } from '../services/tasksService';

export const createTask = async (request: Request, response: Response, next: NextFunction) => {
  const { user } = request;

  try {
    const insertTask = await create(request.body, user);

    return response.status(insertTask.status).json(insertTask.message);
  } catch (err) {
    return next(err);
  }
};

export const getAllTasks = async (request: Request, response: Response, next: NextFunction) => {
  const { user: { _id } } = request;

  try {
    const getTasks = await getAll(_id);

    return response.status(getTasks.status).json(getTasks.message);
  } catch (err) {
    return next(err);
  }
};

export const updateTask = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params;

  try {
    const setTask = await update(id, request.body);

    return response.status(setTask.status).json(setTask.message);
  } catch (err) {
    return next(err);
  }
};
