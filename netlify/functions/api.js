import express, { Router } from 'express';
import serverless from 'serverless-http';

import cors from 'cors';

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const api = express();
api.use(cors(corsOptions));

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', router);

export const handler = serverless(api);