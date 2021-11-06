import { Request, Response, NextFunction } from 'express';
import create from '../services/userService';

const createUser = async (request: Request, response: Response, next: NextFunction) => {
  const { name, email, password } = request.body;

  try {
    const validyUser = await create(name, email, password);
    return response.status(validyUser.status).json(validyUser.message);
  } catch (err) {
    return next(err);
  }
};

export default createUser;
