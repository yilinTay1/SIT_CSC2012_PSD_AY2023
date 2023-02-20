import { firebase_app , firebase_db }          from './firebase-config';
import { collection , getDocs }                from 'firebase/firestore'
import React, { useRef , useState ,useEffect } from 'react'

export const Transactions = ()=>
{
    const [records , updateRecords] = useState([]);
    const runOnce = useRef(true)
    useEffect( () =>
    {
        if( runOnce.current )
        {
            runOnce.current = false
            const txnsCollection = collection( firebase_db , 'txns' )
            getDocs( txnsCollection )
                .then( response =>{
                    const rows = response.docs.map( row => ({
                                                                id: row.id,
                                                                data: row.data()
                                                           }))
                    updateRecords(rows)
                    console.log("There are records : ", rows)
                })
                .catch( err => {
                    console.log( "Error" , err )
                })
        }
    },[runOnce])  

    return(
            <>
                <div>
                    <h4>Transactions</h4>
                    {
                        records.map( record =>{
                                                <div>
                                                    something
                                                </div>
                                              })
                    }
                </div>
            </>
          )
}