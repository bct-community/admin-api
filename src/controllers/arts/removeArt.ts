import { type Request, type Response } from 'express';

import * as s from '@/services/arts/removeArt.js';
import {
  endResponseWithCode,
  internalServerError,
  notFound,
} from '@/utils/http.js';
import logError from '@/utils/logError.js';
import { artsCache } from '@/controllers/arts/getArts.js';

const removeArt = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || typeof id !== 'string') {
    logError({
      type: 'bad-request',
      controller: 'removeArt',
      error: 'ID is required and must be a string',
    });

    return endResponseWithCode(res, 400);
  }

  try {
    const removed = await s.remove({ id });

    if (!removed) {
      logError({
        type: 'not-found',
        controller: 'removeArt',
        error: `Art with ID ${id} not found`,
      });

      return notFound(res);
    }

    artsCache.del('artsData');

    return endResponseWithCode(res, 200);
  } catch (error) {
    logError({
      type: 'internal-server-error',
      controller: 'removeArt',
      error,
    });

    return internalServerError(res);
  }
};

export default removeArt;
