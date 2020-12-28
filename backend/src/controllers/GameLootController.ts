import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';

import GameLoot, { GameLootDocument } from '../models/GameLoot';

export default {
  async create(
    req: Request,
    res: Response
  ): Promise<Response<GameLootDocument>> {
    try {
      const { title, company, offerEndTime } = req.body;

      const { filename } = req.file as Express.Multer.File;

      if (await GameLoot.findOne({ title }))
        return res.status(400).json({ error: 'Loot already exists' });

      const gameLoot = await GameLoot.create({
        title,
        company,
        offerEndTime,
        image: filename,
      });

      return res.status(201).json(gameLoot);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async index(
    req: Request,
    res: Response
  ): Promise<Response<GameLootDocument>> {
    const gameLoot = await GameLoot.find().sort({ _id: -1 });

    return res.status(200).json(gameLoot);
  },

  async show(req: Request, res: Response): Promise<Response<GameLootDocument>> {
    const { id } = req.params;

    const gameLoot = await GameLoot.findById(id);

    if (!gameLoot) return res.status(400).json({ error: 'Loot not found' });

    return res.status(200).json(gameLoot);
  },

  async claim(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.params;

    const game = await GameLoot.findByIdAndUpdate(id, {
      $set: {
        isClaimed: true,
      },
    });

    if (!game) return res.status(400).json({ message: 'Game not found' });

    return res.status(200).json({ message: 'Game has been claimed ' });
  },

  async delete(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.params;

    const game = await GameLoot.findByIdAndDelete(id);

    if (!game) return res.status(400).json({ message: 'Game not found' });

    const gameImagePath = path.join(uploadConfig.directory, game.image);
    await fs.promises.unlink(gameImagePath);

    return res.status(200).json({ message: 'Game has been deleted' });
  },
};
