import { NextFunction, Response, Request } from 'express';
import create from 'services/tasksService';

const createTask = async (request: Request, response: Response, next: NextFunction) => {
  const { user } = request;

  try {
    const insertTask = await create(request.body, user);

    return response.status(insertTask.status).json(insertTask.message);
  } catch (err) {
    return next(err);
  }
};

export default createTask;
