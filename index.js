import express from 'express'

const app = express()

app.get('/api',(req,res)=>{
    res.send("server is runing ")
})
app.listen(3000,()=>{
    console.log("server is runinng");
})