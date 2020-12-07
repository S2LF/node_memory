import { Request, Response } from 'express';
// eslint-disable-next-line import/extensions
import MemoryModel from '../models/Memory';

export default {
  create: async (req: Request, res: Response): Promise<void> => {
    await MemoryModel.init();
    const memory = new MemoryModel(req.body);
    const result = await memory.save();
    res.json({ success: true, result });
  },
  read: async (req: Request, res: Response): Promise<void> => {
    const result = await MemoryModel.find().sort({ guesses: 'asc' });
    res.json({ success: true, result });
  },
};
