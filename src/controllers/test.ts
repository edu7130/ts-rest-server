import { Request, Response } from "express"

export const getTest = (req: Request, res: Response) => {
    const body = req.body;
    const params = req.params;

    res.json({
        params,
        body
    })
}

