import express, { NextFunction, Request, Response } from 'express';
import mongoose, { Error } from 'mongoose';
import cors from 'cors';
import asyncHandler from 'express-async-handler';
// eslint-disable-next-line import/extensions
import memoryController from './controllers/memory';

const app = express();

// Database
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@cluster0.eibh1.mongodb.net/${process.env.DB_TABLE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      autoIndex: true,
    }
  )
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected to database'))
  // eslint-disable-next-line no-console
  .catch((err: Error) => console.log(err.message));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/api/memories', asyncHandler(memoryController.read));
app.post('/api/memories', asyncHandler(memoryController.create));
//  404
app.get('*', (req, res) => {
  res.status(404);
  res.send({ success: false, message: 'Wrong adress' });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: `${error.name} | MSG : ${error.message}`,
    });
  }
});

// Start Server
// eslint-disable-next-line no-console
app.listen(5000, () => console.log('Server started on 5000'));
