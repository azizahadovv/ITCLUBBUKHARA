import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { LOADER } from '../exporPage';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lock from './Lock';
function Admin(props) {
    
    const [dbMap, setDbMap] = useState([])
    const [load, setLoad] = useState(false)
    const [lock, setLock] = useState(true)


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

    function deleteUser(id) {
        setLoad(true)
        const delConfig = doc(db, 'users', id)
        deleteDoc(delConfig).then((res) => {
            toast.success('SUCCESSFULL')
            getUserDb()
            setLoad(false)
        }).catch((err) => { toast.error(err) })

    }


    return (

        <div>
            {
                lock ? <Lock lock={lock} setLock={setLock} /> : <div className='w-full min-h-[100vh] bg-[rgba(0,0,0,.3)]  flex gap-3 justify-start items-start flex-wrap p-6'>
                    {
                        load ? <LOADER /> : dbMap.length === 0 ? <h1 className='text-white '>Hozircha hech qanaqa ma'lumot topilmadi!?</h1> : dbMap.map((res) => {
                            return <div key={res.id} className="mb-3 card text-bg-secondary w-[250px] relative" >
                                <div className="card-header"><span className='text-green-500'>Name:</span> {res?.fullName} <button onClick={() => (deleteUser(res.id))} className='absolute -top-2 -right-3 btn btn-danger'><MdDelete /></button></div>
                                <div className="card-body">
                                    <h5 className="card-title"><span className='text-yellow-400'>Tell:</span> {res?.Phone}</h5>
                                    <p className="flex flex-wrap gap-1 card-text"><span className='text-red-400'>Email: </span> {res?.email}</p>
                                </div>
                            </div>
                        })
                    }

                </div>
            }


        </div>



    );
}
export default Admin;