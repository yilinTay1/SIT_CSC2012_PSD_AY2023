const express = require('express')
const cors    = require('cors')
/*-------------------------------------------------------*/
const port    = 5000
const app     = express()
/*-------------------------------------------------------*/
app.use( cors() )
app.use( express.json() )
app.listen(port, () => 
{
    console.log(`Server listening on the port:${port}`);
});
/*-------------------------------------------------------*/
app.get('/' , async(req,res)=>{
    const { id , password } = req.body;
    res.status(200).json({ 'message': `Server listening on the port:${port}`})
})
/*-------------------------------------------------------*/
app.post('/login' , async(req,res)=>{
    const { id , password } = req.body;
    res.status(200).json({ 'id': id , 'password': password})
})
/*-------------------------------------------------------*/
