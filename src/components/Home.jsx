// import { LOADER } from './exporPage';
import { ABOUT, FOOTER, HERO, NAVBAR } from './pages/homeExp';
import { useEffect, useState } from 'react';
import { LOADER, REGISTER } from './exporPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(props) {
    const [modalVisible, setModalVisible] = useState(false)

    function Toaster(a) {
        if (a === 1) {
            toast.success("So'rov Yuborildi Tez Orada Siz Bilan Bog'lanamiz!")
        } else {
            toast.error("Bazada Xatolik Qayta urinib ko'ring !!")
        }
    }



    return (
        <div>
            <HERO/>
            <ABOUT/>
            <FOOTER/>
            {/* <LOADER /> */}
            <NAVBAR setModalVisible={setModalVisible} modalVisible={modalVisible} />
            <REGISTER setModalVisible={setModalVisible} modalVisible={modalVisible} Toaster={Toaster} />
            <ToastContainer />
        </div>
    );
}

export default Home;