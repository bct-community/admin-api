import { Router } from 'express';

import {
  getLinks,
  createLink,
  updateLink,
  removeLink,
} from '@/controllers/links/index.js';

const router = Router();

router.get('/', getLinks);
router.post('/', createLink);
router.put('/:id', updateLink);
router.delete('/:id', removeLink);

export { router as linksRoutes };
