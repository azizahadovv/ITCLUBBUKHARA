import React from 'react';
// import { LOADER } from './exporPage';
import { ABOUT, FOOTER, HERO, NAVBAR } from './pages/homeExp';

function Home(props) {
    return (
        <div>
            <NAVBAR/>
            <HERO/>
            <ABOUT/>
            <FOOTER/>

            {/* <LOADER /> */}
        </div>
    );
}

export default Home;