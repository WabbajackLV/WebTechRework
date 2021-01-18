import React, {useState} from "react";
import Main from './Main';
import stylesheet from '../styles.scss';
import AboutUs from './AboutUs';
import Footer from './Footer';
import CreateProduct from "./CreateProduct";
function App(){
    const[products, setProduct] = useState([]);

    // function addProduct(product){
    //     setProduct(prevProduct => {
    //         return [...prevProduct, newProduct];
    //     });
    // }

    function deleteProduct(id){
        setProduct(prevProduct => {
            prevProduct.filter((productItem, index) => {
                return index !== id;
            });
        });
    }

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
                // <CreateProduct onAdd={addProduct}/>
                // {products.map(productItem => {
                //     return <Product title={productItem.title} content={productItem.price} onDelete={deleteProduct} />;
                // })}

            }

            
        </div>
    );
}

export default App;