const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');



app.post('/',(req,res,err)=>{
    console.log(err)
    console.log(req.body)
    res.send('received')    
})


app.use(express.urlencoded({extended: false }))



app.use(express.static(path.join(__dirname, 'public')))



app.listen(3000,()=>{
    console.log('server')
})