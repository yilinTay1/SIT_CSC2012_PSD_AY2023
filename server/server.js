const express    = require('express')
const session    = require('express-session')
const cors       = require('cors')
const store = new session.MemoryStore()
/*-------------------------------------------------------*/
const port       = 5000
const app        = express()
/*-------------------------------------------------------*/

app.use( express.json() )
app.use( cors() )
app.use( session(
    {
        secret: 'mvijn3IOK3msvmh3 sbijs6Xwfg9fbYvbh',
        saveUninitialized: true,
        resave: false,
        cookie: {
                    httpOnly : true,
                    maxAge   : parseInt('3600000')
                },
        store
    }
))
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
app.get('/' , (req,res)=>{
    res.status(200).json({ 'message': `Server listening on the port:${port}`})
})
/*-------------------------------------------------------*/
app.post('/api/test' , (req,res)=>{

    console.log(req.sessionID)
    console.log(req.params)
    console.log(req.params.data)
    console.log(req.params.id)
    console.log(req.params.password)
    res.json( { msg: "/api/test" } )
})

var a = require("./ML/FoodRecommend.js");

app.get('/api/getRecommend/:userID', (req,res)=>{
    var test = a.gfr(req.params['userID']);
    res.json( { recommendations: test } )
})