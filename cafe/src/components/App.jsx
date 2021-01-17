import React, {useState} from "react";
import Main from './Main';
import stylesheet from '../styles.scss';
import AboutUs from './Us';

var state = {visible: true}

function App(){
    const [active, setActive] = useState("Home")
    return (
        <div>
            <nav>
                <button onClick={() => setActive("Home")}>Home</button>
                <button onClick={() => setActive("Menu")}>Menu</button>
                <button onClick={() => setActive("Order")}>Order</button>
                <button onClick={() => setActive("About Us")}>About Us</button>
            </nav>
            {active === "Home" && 
            <Main />
            }
            {active === "About Us" && 
            <h1>Whut?</h1>
            }
            
        </div>
    );
}

export default App;