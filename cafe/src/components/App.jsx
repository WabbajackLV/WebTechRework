import React, {useState} from "react";
import Main from './Main';
import stylesheet from '../styles.scss';
import AboutUs from './AboutUs';
import Footer from './Footer';
import axios from 'axios';

// const api = axios.create({
//     baseURL: `http://localhost:3000/.....`
// })

function App(){

    // state = {
    //     products: []
    // }

    // constructor(){
    //     super();
    //     api.get('/').then(res =>{
    //         console.log(res.data)
    //         this.setState({products: res.data})
    //     });
    // }

    // createCourse async () =>{
    //     let res = await api.post('/', {title: "Test", id: 4, price: 1.20})
    // }

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
            <Main/>
            }
            {active === "About Us" && 
            <AboutUs/>
            }
            {active === "Order" && 
            <a href="../order.html">Order</a>
            }
            {/* {active === "Menu" && 
             {this.state.products.map(product => <h2 key={product.id}>{product.title}</h2>)}
            } */}

            
        </div>
    );
}

export default App;