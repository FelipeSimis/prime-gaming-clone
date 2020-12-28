import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import InGameLootController from './controllers/InGameLootController';
import GameLootController from './controllers/GameLootController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/loot', upload.single('image'), InGameLootController.create);
routes.get('/loot', InGameLootController.index);
routes.get('/loot/:id', InGameLootController.show);
routes.delete('/loot/:id', InGameLootController.delete);

routes.post('/games', upload.single('image'), GameLootController.create);
routes.get('/games', GameLootController.index);
routes.get('/games/:id', GameLootController.show);
routes.patch('/games/:id', GameLootController.claim);
routes.delete('/games/:id', GameLootController.delete);

export default routes;
