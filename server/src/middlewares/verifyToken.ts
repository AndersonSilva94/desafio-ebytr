import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../models/userModel';
import { Token } from '../utils/interfaces';
import { invalidUser } from '../utils/messages';
import { UNAUTHORIZED } from '../utils/errorStatus';
import { INVALID_JWT } from '../utils/errorMessages';

require('dotenv').config();

const verifyToken = async (request: Request, _response: Response, next: NextFunction) => {
  const token = request.headers.authorization;

  try {
    const { email } = jwt.verify(token, process.env.SECRET) as Token;

    const user = await findUserByEmail(email);

    if (!user) throw invalidUser;

    const { password: _, ...userWithoutPassword } = user;

    request.user = userWithoutPassword;
    return next();
  } catch (err) {
    return next({ status: UNAUTHORIZED, message: INVALID_JWT });
  }
};

export default verifyToken;
