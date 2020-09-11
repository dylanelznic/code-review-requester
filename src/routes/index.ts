import { Router } from 'express';
import RequestsRoutes from './requests';
import UsersRoutes from './users';

const router = Router();

/** Register API routes */
router.use('/requests', RequestsRoutes);
router.use('/users', UsersRoutes);

export default router;
