import { Request, Response, Router } from 'express';
import uploadMiddleware from '../middlewares/upload.middleware';

const router = Router();

router.post('/upload', uploadMiddleware, (req: Request, res: Response)=>{res.send(req.file)});
router.get('/list', (req: Request, res: Response) => { res.send('list') });
router.delete('/delete/:id', (req: Request, res: Response) => { res.send(req.params.id) });
router.get('/:id', (req: Request, res: Response) => { res.send(req.params.id) });
router.get('/download/:id', (req: Request, res: Response) => { res.send(req.params.id) });
router.put('/update/:id', (req: Request, res: Response) => { res.send(req.params.id) });

export default router;