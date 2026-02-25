import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
const app = express();
import { nanoid } from 'nanoid';
import connectDb from './src/config/mongodb.config.js';
import urlModel from './src/models/shorturl.model.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/create', (req, res) => {
    const { url } = req.body;
    const shortUrl = nanoid(7)
    const newUrl = new urlSchema(
        {
            orignalUrl: url,
            shortUrl: shortUrl,
        }
    )
    newUrl.save()
    res.send(nanoid(7))
    console.log(url, nanoid(7));
})

app.listen(8000, () => {
    connectDb()
    console.log('app is listning on port 8000')
})