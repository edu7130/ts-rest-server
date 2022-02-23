import express, { Application } from 'express';
import cors from 'cors';
import 'colors';
import testRouter from '../routers/test';

export class Server {
    private app: Application;
    private port: string;

    private routesPaths = {
        test: '/api/test'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.db();
        this.middlewares();
        this.routes();
    }

    db() {
        //your DB Connection here.
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.routesPaths.test, testRouter);
    }

    listen() {
        console.clear();
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`, `http://localhost:${this.port}`.cyan);

        })
    }

}