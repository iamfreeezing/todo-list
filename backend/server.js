import express from 'express'
import cors from 'cors'
import { getData, addData } from './database.js'

const app = express()
const PORT = 4002

app.use(cors());

app.use(express.json());

app.get('/api', async (req, res) => {

    const data = await getData();
    res.status(200).json(data);

})

app.post('/api', async (req, res) => {

    const content = req.body.content
    const adding = await addData(content);
    res.status(200).send('Added succesfully.');

})

app.listen(PORT, () => {console.log(`Server running, port: ${PORT}`)})