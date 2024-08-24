import React, { useEffect, useState } from 'react';
import './Products.css';
import { Container, Row } from 'react-bootstrap';
import ProductsCard from './ProductsCard';
import PLaceHolder from './PLaceHolder';
import { useShoppingCart } from '../../Data/Context/Context';

const Products = () => {
    const { products ,value} = useShoppingCart();
    

    return (
        <>
            {products.length > 1 ? (
                <Container>
                        <h1 className='m-5 fw-bold'>Discover all Products ..</h1>
                   
                 

                    <Row lg={4} md={3} sm={1}>
                        {value === "" ? (
                            products.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        ) : (
                            products
                                .filter((item) =>
                                    item.title.toLowerCase().includes(value.toLowerCase())
                                ).map((item) => (
                                    <ProductsCard key={item.id} {...item} />
                                ))
                        )}
                    </Row>
                </Container>
            ) : (
                <div className='w-100 '>
                    <h1 className='m-5 fw-bold'>Loading ...</h1>
                    <PLaceHolder />
                </div>
            )}
        </>
    );
};

export default Products;
