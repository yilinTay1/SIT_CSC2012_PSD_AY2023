import { firebase_app , firebase_fs }          from './firebase-config';
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

            const txnsCollection = collection( firebase_fs , 'txns' )
            getDocs( txnsCollection )
                .then( response =>{
                                    const rows = response.docs.map( row => {
                                            return row.data()
                                        })
                                        updateRecords( rows )
                                        console.log("There are records" , rows )
                                  })
        }
    },[runOnce])  

    return(
            <>
                <div>
                    <h4>Transactions</h4>
                    <table style={{ borderColor: '#04AA6D' , borderStyle:'solid' , borderRadius:'10px' , padding:'10px' , margin:'10px' }}>
                    <tr>
                        <th style={{background:'yellow'}}>Product</th>
                        <th style={{background:'cyan'}}>Seller</th>
                        <th style={{background:'pink'}}>Buyer</th>
                    </tr>
                    {
                        records.map( record => {
                                                    return(
                                                            <tr>
                                                            <td style={{background:'yellow', paddingLeft:'10px', paddingRight:'10px'}}><div>{record.product}</div></td>
                                                            <td style={{background:'cyan'  , paddingLeft:'10px', paddingRight:'10px'}}><div>{record.seller}</div></td>
                                                            <td style={{background:'pink'  , paddingLeft:'10px', paddingRight:'10px'}}><div>{record.buyer}</div></td>
                                                            </tr>
                                                          )
                                               })
                    }
                    </table>
                </div>
            </>
          )
}