import multer from 'multer';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';

const uploadDirFunc = () => {
    if (!fs.existsSync('./uploads')) fs.mkdirSync('./uploads');
    return './uploads';
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDirFunc()),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const randomName = crypto.randomBytes(10).toString('hex') + ext;
        cb(null, randomName);
    },
});
const upload = multer({storage}).single('file');
const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, (err: unknown) => {
        if (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ error: 'Ошибка сохранения файла', message: err.message });
            }
            return res.status(500).json({ error: 'Ошибка сервера'});
        }
        if (!req.file){
            return res.status(400).json({error: 'Файл не передан'});
        }
        next();
    });
};
export default uploadMiddleware;