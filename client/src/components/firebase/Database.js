import { firebase_db }         from './firebase-config'
import { ref , get , onValue } from 'firebase/database'


class Database
{
    static ref_txns = null
    static isInit   = false
    static txns     = null

    static handleTxns(snapshot)
    {
        Database.txns = snapshot.val()
    }

    static init()
    {
        // if( !Database.isInit )
        // {
            Database.isInit = true
            Database.ref_txns = ref( firebase_db , "txns/" )
            onValue( Database.ref_txns, (snapshot) => 
            { 
                console.log("Somthing has changed!")
                Database.handleTxns(snapshot) 
            })
        // }
    }

    static async get()
    {
        if( Database.txns != null)
        {
            const results = await Database.txns
            for( result in results)
            {
                console.log("result : ", result)
            }
            console.log( "results : " , results )
            return results
        }
        else
        {
            console.log("There is nothing")
            return null
        }
    }
}



module.exports = Database