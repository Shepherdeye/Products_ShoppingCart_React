import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useShoppingCart } from '../../Data/Context/Context';
import './Control.css';

const Control = () => {
    const { products, setProducts } = useShoppingCart();

    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, [setProducts]);

    const handleNewProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            title: titleRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value,
            image: imageRef.current.value,
            category: categoryRef.current.value
        };

        axios.post('https://fakestoreapi.com/products', newProduct)
            .then(response => {
                setProducts(prevProducts => [...prevProducts, response.data]);
                console.log(products);

                // Clear the input fields after adding the product
                titleRef.current.value = '';
                priceRef.current.value = '';
                descriptionRef.current.value = '';
                imageRef.current.value = '';
                categoryRef.current.value = '';
            })
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <form className="formX">
                <div className="title">Welcome,<br /><span>Add New Product</span></div>
                <input ref={titleRef} type="text" placeholder="title" className="inputX" />
                <input ref={priceRef} type="number" placeholder="price" className="inputX" />
                <input ref={descriptionRef} type="text" placeholder="description" className="inputX" />
                <input ref={imageRef} type="text" placeholder="image-src" className="inputX" />
                <input ref={categoryRef} type="text" placeholder="category" className="inputX" />
                <button className="button-confirm" onClick={handleNewProduct}>Add →</button>
            </form>
        </div>
    );
};

export default Control;
