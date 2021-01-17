import React from "react";
import Header from './Header';
import Main from './Main';
import stylesheet from '../styles.scss';
import AboutUs from './Us';

var state = {visible: true}

function App(){
    return (
        <div>
            <nav>
                <button>Home</button>
                <button>Menu</button>
                <button>Order</button>
                <button>About Us</button>
            </nav>
            <Main />
        </div>
    );
}

export default App;