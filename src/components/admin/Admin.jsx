import { collection, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';


function Admin(props) {
    useEffect(() => {
        getUserDb()
    }, [])
    const [dbMap, setDbMap] = useState([])
    console.log(dbMap);
    function getUserDb() {
        const col = collection(db, 'users')
        getDocs(col).then((res) => {
            let arr = res.docs.map((res) => {
                return { ...res.data(), id: res.id }
            })
            setDbMap(arr)
        }).catch((err) => {
            console.log(err);
        })
    }



    return (
        <div className='w-full min-h-[100vh] bg-[rgba(0,0,0,.3)] p-3 flex gap-3 justify-start items-start'>
            {
                dbMap.map((res) => {
                    return <div className="mb-3 card text-bg-secondary w-[250px]" >
                        <div class="card-header"><span className='text-green-500'>Name:</span> {res?.fullName}</div>
                        <div class="card-body">
                            <h5 class="card-title"><span className='text-yellow-400'>Tell:</span> {res?.Phone}</h5>
                            <p class="card-text flex flex-wrap"><span className='text-red-400'>Email:</span> {res?.email}</p>
                        </div>
                    </div>
                })
            }

        </div>
    );
}
export default Admin;