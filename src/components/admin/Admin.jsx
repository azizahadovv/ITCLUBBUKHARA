import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { LOADER } from '../exporPage';
import { MdDelete } from "react-icons/md";

function Admin(props) {
    const [dbMap, setDbMap] = useState([])
    const [load, setLoad] = useState(false)


    useEffect(() => {
        getUserDb()
    }, [])

    function getUserDb() {
        const col = collection(db, 'users')
        setLoad(true)
        getDocs(col).then((res) => {
            let arr = res.docs.map((res) => {
                return { ...res.data(), id: res.id }
            })
            setLoad(false)
            setDbMap(arr)
        }).catch((err) => {

        })
    }

    function deleteUser(user) {

    }



    return (
        <div className='w-full min-h-[100vh] bg-[rgba(0,0,0,.3)] p-3 flex gap-3 justify-start items-start flex-wrap'>
            {
                load ? <LOADER /> : dbMap.map((res) => {
                    return <div className="mb-3 card text-bg-secondary w-[250px] relative" >
                        <div class="card-header"><span className='text-green-500'>Name:</span> {res?.fullName} <button onClick={() => (deleteUser(res))} className='absolute -top-2 -right-3 btn btn-danger'><MdDelete /></button></div>
                        <div class="card-body">
                            <h5 class="card-title"><span className='text-yellow-400'>Tell:</span> {res?.Phone}</h5>
                            <p class="card-text flex flex-wrap gap-1"><span className='text-red-400'>Email: </span> {res?.email}</p>
                        </div>
                    </div>
                })
            }

        </div>
    );
}
export default Admin;