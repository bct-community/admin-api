import { Router } from 'express';

import {
  getRaids,
  createRaid,
  updateRaid,
  removeRaid,
} from '@/controllers/raids/index.js';

const router = Router();

router.get('/', getRaids);
router.post('/', createRaid);
router.put('/:id', updateRaid);
router.delete('/:id', removeRaid);

export { router as raidsRoutes };
