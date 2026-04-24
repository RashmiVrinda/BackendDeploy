
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const myDetails = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "age": 28,
    "isActive": true
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob@example.com",
    "age": 34,
    "isActive": false
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie@example.com",
    "age": 22,
    "isActive": true
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res) =>{ res.send('https://github.com/RashmiVrinda')})

app.get ('/login',(req,res) => {res.send('<h1>Welcome to my page</h1>')})

app.get ('/Youtube',(req,res)=>{res.send('<h2>Level up Danish</h2>')})

app.get('/myDetails',(req,res)=>{res.json(myDetails)})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

