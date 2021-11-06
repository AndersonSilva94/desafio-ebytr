import express from 'express';
import cors from 'cors';
import userRoute from '../routes/userRoute';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoute);

// eslint-disable-next-line no-unused-vars
app.use((err, _request, response, _next) => {
  if (err.status) return response.status(err.status).json({ message: err.message });
  return response.status(500).json({ message: err.message });
});

export default app;
