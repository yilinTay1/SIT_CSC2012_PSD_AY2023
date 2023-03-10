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
                                    let counter = 0
                                    const rows = response.docs.map( row => {
                                            let _data = row.data()
                                                _data["key"] = ++counter
                                            return _data
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
                    <thead>
                        <tr key='0'>
                            <th style={{background:'yellow'}}>Product</th>
                            <th style={{background:'cyan'}}>Seller</th>
                            <th style={{background:'pink'}}>Buyer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        records.map( record => {
                                                    return(
                                                            <tr key={record.key} >
                                                                <td style={{background:'yellow', paddingLeft:'10px', paddingRight:'10px'}}><div>{record.product}</div></td>
                                                                <td style={{background:'cyan'  , paddingLeft:'10px', paddingRight:'10px'}}><div>{record.seller}</div></td>
                                                                <td style={{background:'pink'  , paddingLeft:'10px', paddingRight:'10px'}}><div>{record.buyer}</div></td>
                                                            </tr>
                                                          )
                                               })
                    }
                    </tbody>
                    </table>
                </div>
            </>
          )
}