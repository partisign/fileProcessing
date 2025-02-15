import { Router } from 'express';
import authRoutes from './auth.routes';
import fileRoutes from './file.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/file', fileRoutes);

export default router;