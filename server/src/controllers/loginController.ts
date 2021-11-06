import { Request, Response, NextFunction } from 'express';
import login from '../services/loginService';

const loginUser = async (request: Request, response: Response, next: NextFunction) => {
  const { email, password } = request.body;

  try {
    const validyUser = await login(email, password);
    return response.status(validyUser.status).json(validyUser.message);
  } catch (err) {
    return next(err);
  }
};

export default loginUser;
