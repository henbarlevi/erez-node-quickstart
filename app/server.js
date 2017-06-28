"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("config");
const Logger_1 = require("./Logger");
const TAG = 'server';
const STATE = config.get('state');
const PORT = process.env.PORT || 3000;
const app = express();
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
    .on('listening', () => Logger_1.Logger.d(TAG, 'listening on port : ' + PORT))
    .on('error', (err) => Logger_1.Logger.e(TAG, 'err on listening : ' + err));
//# sourceMappingURL=server.js.map