// import { LOADER } from './exporPage';
import { ABOUT, APPROACH, COURSES, FOOTER, HERO, INTRODUCTION, LOCATION, NAVBAR } from './pages/homeExp';
import React, { useEffect, useState } from 'react';
import { LOADER, REGISTER } from './exporPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [modalVisible, setModalVisible] = useState(false)

    function Toaster(a) {
        if (a === 1) {
            toast.success("So'rov Yuborildi Tez Orada Siz Bilan Bog'lanamiz!")
        } else {
            toast.error("Bazada Xatolik Qayta urinib ko'ring !!")
        }
    }

    function Toaster1(b) {
        if (b === 1) {
            toast.info("Call Me tugmasini bosib bizga ma'lumot qoldiring va biz siz bilan tez orada bog'lanamiz!")
        } else {
            toast.error("Bazada Xatolik Qayta urinib ko'ring !!")
        }
    }



    return (
        <div>
            <NAVBAR setModalVisible={setModalVisible} modalVisible={modalVisible} />
            <HERO setModalVisible={setModalVisible} modalVisible={modalVisible} />
            <INTRODUCTION />
            <ABOUT />
            <COURSES />
            <APPROACH />
            <LOCATION />
            <FOOTER Toaster1={Toaster1} />
            {/* <LOADER /> */}
            <REGISTER setModalVisible={setModalVisible} modalVisible={modalVisible} Toaster={Toaster} />
            <ToastContainer />
        </div>
    );
}

export default Home;