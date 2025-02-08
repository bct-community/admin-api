import { Router } from 'express';
import { getArts, updateArt, removeArt } from '@/controllers/arts/index.js';

const router = Router();

router.get('/', getArts);
router.put('/:id', updateArt);
router.delete('/:id', removeArt);

export { router as artsRoutes };
