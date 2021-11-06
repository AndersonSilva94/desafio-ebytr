import jwt from 'jsonwebtoken';

require('dotenv').config();

interface User {
  _id: string,
  name: string,
  email: string,
  password: string
}

const generateToken = (user: User) => {
  const { password: _, ...userWithoutPassword } = user;

  const token = jwt.sign(userWithoutPassword, process.env.SECRET, {
    expiresIn: '30m',
    algorithm: 'HS256',
  });

  return token;
};

export default generateToken;
