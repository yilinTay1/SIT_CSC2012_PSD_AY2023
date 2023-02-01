const express    = require('express')
const session    = require('express-session')
const cors       = require('cors')
const store = new session.MemoryStore()
/*-------------------------------------------------------*/
const port       = 5000
const app        = express()
/*-------------------------------------------------------*/
app.use( session(
    {
        secret: 'mvijn3IOK3msvmh3 sbijs6Xwfg9fbYvbh',
        resave: false,
        saveUninitialized: false,
        cookie: {
                    httpOnly : true,
                    maxAge   : parseInt('3600000')
                },
        store
    }
))
app.use( express.json() )
app.use( cors() )
app.use( (req,res,next) => {
    console.log(store)
    next()
})
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
    if(req.session.authenticated)
    {
        console.log( 'User already authenticated' )
        res.status(200).json( req.session )
    }
    else
    {
        const { email , password , oAuth } = req.body
        if( email && password && oAuth )
        {
            console.log(  'New user logged in' )
            req.session.authenticated = true
            res.status(200).json( req.session )
        }
        else
        {
            console.log(  'Invalid user' )
            res.status(401).json( { 'err' : 'Invalid user' } )
        }
    }
})
/*-------------------------------------------------------*/
