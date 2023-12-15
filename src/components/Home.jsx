import React, { useState } from 'react';
import { LOADER, REGISTER } from './exporPage';
import { NAVBAR } from './pages/homeExp';



function Home(props) {

    const [modalVisible, setModalVisible] = useState(true)


    return (
        <div>
            <NAVBAR setModalVisible={setModalVisible} modalVisible={modalVisible} />
            <REGISTER setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </div>
    );
}

export default Home;