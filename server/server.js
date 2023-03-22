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
    //console.log(store)
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

var foodRec = require("./ML/FoodRecommend.js");

app.get('/api/getRecommend/:userID', (req,res)=>{
    if (req.params['userID'] == "8Lk2vxgcOLguZwUFIsfJfeqj8XE3"){
        var userID = '1';
    }
    else if (req.params['userID'] == "qO2n3jNj78NMcl0g6eZmr5haBU93"){
        var userID = '2';
    }
    else{
        var userID = '3';
    }
    res.json( { recommendations: foodRec.gfr(userID) } )
})