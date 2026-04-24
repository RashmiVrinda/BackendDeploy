
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res) =>{ res.send('https://github.com/RashmiVrinda')})

app.get ('/login',(req,res) => {res.send('<h1>Welcome to my page</h1>')})

app.get ('/Youtube',(req,res)=>{res.send('<h2>Level up Danish</h2>')})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})