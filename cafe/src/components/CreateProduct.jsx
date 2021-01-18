import React, {useState}from 'react';
function CreateProduct(props){

    const[product, setProduct] = useState({
        title:"",
        price:""
    });

    function handleChange(event){
        const {title, value} = event.target;

        setProduct(prevProduct => {
            return {
                ...prevProduct,
                [title]: value
            };
        });
    }

    function submitProduct(event){
        props.onAdd(product);
        setProduct({
            title:"",
            price: 0.00
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} placeholder="Title"/>
                <input name="price" onChange={handleChange} placeholder="Price"/>
                <button onClick={submitProduct}>Add</button>
            </form>
        </div>
    );
}

export default CreateProduct;