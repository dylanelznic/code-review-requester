import { db } from 'db';
import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

/**
 * /requests:
 *   get:
 *     description: Return a list of all Requests from the DB
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfuly returned a list of all Requests
 *       500:
 *         description: Error fetching Requests from the DB
 */
router.get(
  '/',
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> => {
    try {
      const requests = await db.requests.all();
      return res.send(requests);
    } catch (e) {
      next(e);
    }
  },
);

export default router;
