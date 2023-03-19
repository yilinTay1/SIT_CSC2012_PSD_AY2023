import { firebase_app , firebase_store } from './firebase-config';
import { getStorage }                    from 'firebase/storage'
import { v4 as uuid }                    from 'uuid';

module.exports = 
{
    Storage:
    {        
        upload: async function( filebinary )
        {
            const uid          = sessionStorage.getItem('uid');
            const val filepath = uid + "/" + uuid()

            console.log( filepath )
        }
    }
}