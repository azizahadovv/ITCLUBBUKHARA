import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Lock({ lock, setLock }) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [usernameDB, setUsernameDB] = useState()
    const [passwordDB, setPasswordDB] = useState()

    useEffect(() => {
        getAdminData()
    }, [])

    function getAdminData() {
        const col = collection(db, 'admin')
        getDocs(col).then((res) => {
            let arr = res.docs.map((res) => {
                return { ...res.data(), id: res.id }
            })
            arr.map((res => (setUsernameDB(res.username), setPasswordDB(res.password))))
        }).catch((err) => {
            console.log(err);
        })
    }

    function handleAdmin() {
        if (username === usernameDB && password === passwordDB) {
            setLock(false)
        }
        else {
            toast.error('Please Press The Home Button')
        }
    }


    return (
        <div className='flex items-center justify-center w-full min-h-screen bg-[rgba(0,0,181,0.3)]'>
            <div className='w-[350px] min-h-max bg-[rgba(0,0,0,.6)] rounded-md p-3'>
                <p className='text-center text-white text-[22px]'>ADMIN</p>
                <div className="mb-3 form-floating">
                    <input value={username} onChange={(e) => (setUsername(e.target.value))} required type="text" min={7} className="form-control" id="floatingPassword" placeholder='username' />
                    <label htmlFor="floatingNumber">username</label>
                </div>
                <div className="mb-3 form-floating">
                    <input value={password} onChange={(e) => (setPassword(e.target.value))} required type="password" className="form-control" id="floatingInput" placeholder='password' />
                    <label htmlFor="floatingInput">password</label>
                </div>
                <div className='flex gap-3'>
                    <Link className='btn w-50 btn-danger' to={'/'}>Home</Link>
                    <button onClick={handleAdmin} className='btn w-50 btn-success'>Submit</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Lock;