import { firebase_app                                 }  from './firebase-config';
import { getStorage                                   }  from 'firebase/storage';
import { v4 as uuid                                   }  from 'uuid';

module.exports = 
{
    FirebaseStorage:
    {        
        upload: async function( filebinary )
        {
            const uid = sessionStorage.getItem('uid');
            if(uid && firebase_app)
            {
                try
                {
                    const FStorage = getStorage(firebase_app)

                    // const __filepath   = String( uid + ".png") ;
                    // console.log("filepath : " , __filepath)

                    // const storageRef = FirebaseStorageReference( FStorage , __filepath )
                    // console.log("storageRef : " , storageRef )
                }
                catch(err)
                {
                    console.log( err )
                }
            }
        }
    }
}