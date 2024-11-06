const express = require('express')
const bP = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./db')

dotenv.config()

const app = express()
app.use(cors())
app.use(bP.json())

const PORT = process.env.PORT || 5000


app.get('/', (req, res) =>{
    res.send('API is running')
})

app.post('/api/users', async (req, res)=>{
    const { name, email } = req.body
    try{
        const result = await db.saveUser(name, email)
        res.json({id: result.insertId})
    }catch(err){
        res.status(500).send(err)
    }
})


app.listen(PORT, ()=>{
    console.log('server is running')
})