import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

function Admin(props) {
    const [modalVisible, setModalVisible] = useState(true)
    return (
        <div className='w-full min-h-[70px] bg-[rgba(0,0,0,.6)]'>
            <nav className='container w-full min-h-[70px]  m-auto flex items-center justify-end py-2 px-5'>
                <button onClick={() => setModalVisible(true)} className='px-4 py-3 bg-[#222] text-white rounded-xl w-max'>Add user</button>
            </nav>
            <Rodal width={500} height={450} visible={modalVisible} onClose={() => setModalVisible(false)}>
                <form className='flex flex-col items-center gap-3 bg-red-400 justify-startl justify-star p-7'>
                    <input className='w-[80%] ' type="text" name="" id="" />
                    <input className='w-[80%] ' type="text" name="" id="" />
                    <input className='w-[80%] ' type="text" name="" id="" />
                    <input className='w-[80%] ' type="text" name="" id="" />
                    <div className='flex items-center justify-around w-full '>
                        <button>CANCEL</button>
                        <button>SAVE</button>
                    </div>
                </form>
            </Rodal>
        </div>
    );
}
export default Admin;