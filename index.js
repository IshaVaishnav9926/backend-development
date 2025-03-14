require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/user",(req,res)=>{
  res.send("user:isha vaishnav")
})
app.get("/login",(req,res)=>{
   res.send('<h1>Login user:isha</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT}`);
})