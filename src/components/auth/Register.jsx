import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function Register({ setModalVisible, modalVisible, Toaster }) {
    const [fullName, setFullName] = useState()
    const [Phone, setPhone] = useState()
    const [email, setEmail] = useState()
    function NullData() {
        setEmail('')
        setFullName('')
        setPhone('')
    }

    function AddUserModal() {
        if (fullName && Phone && email) {
            setModalVisible(false)
            const userCollection = collection(db, 'users')
            addDoc(userCollection, {
                fullName,
                Phone,
                email
            }).then((res) => {
                Toaster(1)
                NullData()

            }).catch((err) => {
                Toaster(2)
                setModalVisible(false)
                NullData()
            })
        } else {
            Toaster(2)
        }
    }
    function ExitModal() {
        setModalVisible(false)
        NullData()
    }



    return (
        <div className='flex items-center justify-center'>
            <Rodal height={400} visible={modalVisible} onClose={() => setModalVisible(false)}>
                <form className='flex flex-col justify-center gap-2 py-4'>
                    <p className='text-center text-black text-[18px] leading-1'>Biz bilan bog'laning!!</p>
                    <div className="mb-3 form-floating">
                        <input value={fullName} onChange={(e) => (setFullName(e.target.value))} required type="text" min={5} className="form-control" id="floatingPassword" placeholder='Full Name ' />
                        <label htmlFor="floatingNumber">Full Name</label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input value={Phone} onChange={(e) => (setPhone(e.target.value))} required type="number" min={7} className="form-control" id="floatingPassword" placeholder='97 123 45 67' />
                        <label htmlFor="floatingNumber">Phone Number: 97 123 45 67 </label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input value={email} onChange={(e) => (setEmail(e.target.value))} required type="email" className="form-control" id="floatingInput" placeholder='example@exp.ex' />
                        <label htmlFor="floatingInput">Email: example@exp.ex</label>
                    </div>
                    <div className='flex items-center justify-center gap-3 center'>
                        <button type='button' onClick={ExitModal} className='btn btn-danger w-50'>Cancel</button>
                        <button type='button' onClick={AddUserModal} className='btn btn-success w-50'>Add</button>
                    </div>
                </form>
            </Rodal>
        </div>
    );
}

export default Register;