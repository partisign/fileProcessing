import { Request, Response } from 'express';

class FileController {
    async uploadFile(req: Request, res: Response) {
       res.send('upload')
    }

    async listFiles(req: Request, res: Response) {
        res.send('list')
    }

    async deleteFile(req: Request, res: Response) {
        res.send('delete')
    }

    async getFileInfo(req: Request, res: Response) {
        res.send('info')
    }

    async downloadFile(req: Request, res: Response) {
        res.send('download')
    }

    async updateFile(req: Request, res: Response) {
        res.send('update')
    }
}

export default new FileController();