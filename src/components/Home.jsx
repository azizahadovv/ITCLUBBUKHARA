import React from 'react';
import { LOADER } from './exporPage';
import { ABOUT, FOOTER, NAVBAR } from './pages/homeExp';

function Home(props) {
    return (
        <div>
            <NAVBAR/>
            <ABOUT/>
            <FOOTER/>
            {/* <LOADER /> */}
        </div>
    );
}

export default Home;