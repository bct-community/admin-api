import { Router } from 'express';

import { authRoutes } from './auth.js';
import { artsRoutes } from './arts.js';
import { linksRoutes } from './links.js';
import { raidsRoutes } from './raids.js';

export const router = Router();

router.use('/auth', authRoutes);
router.use('/raids', raidsRoutes);
router.use('/links', linksRoutes);
router.use('/arts', artsRoutes);
