import express, { Router } from 'express';
import serverless from 'serverless-http';
import parseWb from './parseWb';

import cors from 'cors';

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const api = express();
api.use(cors(corsOptions));

const router = Router();
router.get('/hello', async (req, res) => {
    let html = await parseWb('Frosch', 'min')
    res.send(html);
});

api.use('/api/', router);

export const handler = serverless(api);