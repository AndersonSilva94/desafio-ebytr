import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import userRoute from '../routes/userRoute';
import loginRoute from '../routes/loginRoute';
import tasksRoute from '../routes/tasksRoute';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoute);
app.use('/login', loginRoute);
app.use('/tasks', tasksRoute);

// eslint-disable-next-line no-unused-vars
app.use((err: any, _request: Request, response: Response, _next: NextFunction) => {
  if (err.status) return response.status(err.status).json({ message: err.message });
  return response.status(500).json({ message: err.message });
});

export default app;
