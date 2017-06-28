import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as config from 'config';

import { Logger } from './Logger';

const TAG: string = 'server';

const STATE: string = <string>config.get('state');


const PORT = process.env.PORT || 3000;

const app: express.Application = express();


app.use(cors())
    .use(bodyParser.json())
    .use((req, res, next) => {
        console.log(req.path);
        next();
    })


    .get('/api', (req, res) => {
        res.send('state : ' + STATE);
    })



    .use((req, res, next) => {
        res.send('page not found');
    })



    .listen(PORT)
    .on('listening', () => Logger.d(TAG, 'listening on port : ' + PORT))
    .on('error', (err) => Logger.e(TAG, 'err on listening : ' + err));