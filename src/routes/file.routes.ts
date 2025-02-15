import { Request, Response, Router } from 'express';

const router = Router();

router.post('/upload', (req: Request, res: Response)=>{res.send(req.body)});
router.get('/list', (req: Request, res: Response) => { res.send('list') });
router.delete('/delete/:id', (req: Request, res: Response) => { res.send(req.params.id) });
router.get('/:id', (req: Request, res: Response) => { res.send(req.params.id) });
router.get('/download/:id', (req: Request, res: Response) => { res.send(req.params.id) });
router.put('/update/:id', (req: Request, res: Response) => { res.send(req.params.id) });

export default router;