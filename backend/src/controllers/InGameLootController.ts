import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';

import InGameLoot, { InGameLootDocument } from '../models/InGameLoot';

export default {
  async create(
    req: Request,
    res: Response
  ): Promise<Response<InGameLootDocument>> {
    try {
      const { title, company, offerEndTime, hasCode } = req.body;
      const { code } = req.body;

      const { filename } = req.file as Express.Multer.File;

      if (await InGameLoot.findOne({ title }))
        return res.status(400).json({ error: 'Loot already exists' });

      if (hasCode) {
        if (!code)
          return res
            .status(400)
            .json({ error: 'You must provide a code to claim the loot' });
      }

      const inGameLoot = await InGameLoot.create({
        title,
        company,
        offerEndTime,
        hasCode,
        code,
        image: filename,
      });

      return res.status(201).json(inGameLoot);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async index(
    req: Request,
    res: Response
  ): Promise<Response<InGameLootDocument>> {
    const inGameLoot = await InGameLoot.find().sort({ _id: -1 });

    return res.status(200).json(inGameLoot);
  },

  async show(
    req: Request,
    res: Response
  ): Promise<Response<InGameLootDocument>> {
    const { id } = req.params;

    const inGameLoot = await InGameLoot.findById(id);

    if (!inGameLoot) return res.status(400).json({ error: 'Loot not found' });

    return res.status(200).json(inGameLoot);
  },

  async delete(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.params;

    const game = await InGameLoot.findByIdAndDelete(id);

    if (!game) return res.status(400).json({ message: 'Loot not found' });

    const gameImagePath = path.join(uploadConfig.directory, game.image);
    await fs.promises.unlink(gameImagePath);

    return res.status(200).json({ message: 'Loot has been deleted' });
  },
};
