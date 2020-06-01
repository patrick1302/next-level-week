import express from 'express'

const app = express();

app.get('/users', (req,res)=> {
    res.json([{ "name": "Patrick", "lastName": "Batista"}])
})

app.listen(3333);