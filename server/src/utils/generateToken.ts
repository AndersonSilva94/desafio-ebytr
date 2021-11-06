import jwt from 'jsonwebtoken';

require('dotenv').config();

const tokenConfig = {
  expiresIn: '30m',
  algorithms: 'HS256',
};

const secret = process.env.SECRET;

interface User {
  _id: string,
  name: string,
  email: string,
  password: string
}

const generateToken = (user: User) => {
  const { password: _, ...userWithoutPassword } = user;

  const token = jwt.sign(userWithoutPassword, secret, tokenConfig);

  return token;
};

export default generateToken;
