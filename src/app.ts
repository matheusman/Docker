import express, { Response, Request } from 'express';

const app = express()

app.get('/', (req : Request, res : Response) => {
    res.send('teste')
})

export default app