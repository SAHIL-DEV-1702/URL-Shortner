import express from 'express';
const app = express();
import { nanoid } from 'nanoid';

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/api/create', (req, res) => {
    const {url} = req.body;
    console.log(url,nanoid(7));
})

app.listen(8000, () => {
    console.log('app is listning on port 8000')
})