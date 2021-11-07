import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import userRoute from '../routes/userRoute';
import loginRoute from '../routes/loginRoute';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoute);
app.use('/login', loginRoute);

// eslint-disable-next-line no-unused-vars
app.use((err, _request: Request, response: Response, _next: NextFunction) => {
  if (err.status) return response.status(err.status).json({ message: err.message });
  return response.status(500).json({ message: err.message });
});

export default app;
