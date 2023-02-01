const express    = require('express')
const cors       = require('cors')
/*-------------------------------------------------------*/
const port       = 5000
const app        = express()
/*-------------------------------------------------------*/
app.use( express.json() )
app.use( cors() )
/*-------------------------------------------------------*/
app.listen(port, () => 
{
    console.log(`Server listening on the port:${port}`);
});
/*-------------------------------------------------------*/
app.get('/' , async(req,res)=>{
    res.status(200).json({ 'message': `Server listening on the port:${port}`})
})
/*-------------------------------------------------------*/
app.post('/api/authenticate' , async(req,res)=>{
    const { id , password } = req.body
    if(id != null && password != null)
    {
        console.log( id, password )
        res.status(200).json( {'id' : id , 'password' : password } )
    }
})
/*-------------------------------------------------------*/
