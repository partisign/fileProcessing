import { Request, Response, Router } from 'express';

const router = Router();

router.post('/signin', (req: Request, res: Response)=>{res.send(req.body)});
router.post('/signin/new_token', (req: Request, res: Response) => { res.send(req.body) });
router.post('/signup', (req: Request, res: Response) => { res.send(req.body) });
router.get('/info', (req: Request, res: Response) => { res.send('info') });
router.get('/logout', (req: Request, res: Response) => { res.send('logout') });

export default router;