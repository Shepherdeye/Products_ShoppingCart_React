import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import FormatCurrency from '../../Data/CurrencyFormater'
import { useShoppingCart } from '../../Data/Context/Context'
import Reviews from './Reviews'

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setProduct(response.data)
            setLoading(false)
        })
    }, [id])

    const {
        getItemsQuantity,
        increseCartItem,
        decreseCartItem,
        removeFromCart,
    } = useShoppingCart()

    const itemQuantity = getItemsQuantity(product.id)

    if (!loading) {
        return (
            <Row
                style={{ margin: "20px auto" }}
                lg={2} md={2} sm={2} xs={1}
                className='bg-light rounded-1 parent-Product d-flex align-items-center justify-content-around p-3'
            >
                <Col>
                    <div
                        style={{ height: "100%", marginBottom: "20px" }}
                        className="product-image bg-white d-flex align-items-center justify-content-center"
                    >
                        <img
                            style={{ width: "70%", height: "350px" }}
                            className='object-fit-contain'
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                </Col>
                <Col>
                    <div style={{ alignItems: "flex-start" }} className="product-info w-75 d-flex flex-column">
                        <div>
                            <h2 style={{ wordBreak: "break-word" }}>{product.title}</h2>
                        </div>
                        <div>
                            <h4>{product.category}</h4>
                        </div>
                        <div>
                            <h6>{FormatCurrency(product.price)}</h6>
                        </div>
                        <div className='control'></div>
                        <div>
                            {product.rating && <Reviews color={"gold"} rating={product.rating.rate} />}
                        </div>
                        <div>
                            <h6 style={{ fontSize: "11px" }}>{product.description}</h6>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            {itemQuantity === 0 ? (
                                <button className="card-btn" onClick={() => increseCartItem(product.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                        <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                        <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                        <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                                    </svg>
                                </button>
                            ) : (
                                <div className="card-control d-flex column-gap-0 justify-content-around">
                                    <div className='d-flex gap-1 align-items-center fw-bold'>
                                        <button
                                            style={{ width: "20px", height: "25px" }}
                                            className='btn btn-outline-dark d-flex align-items-center justify-content-center'
                                            onClick={() => increseCartItem(product.id)}
                                        >
                                            +
                                        </button>
                                        {itemQuantity}
                                        <button
                                            style={{ width: "20px", height: "25px" }}
                                            className='btn btn-outline-dark d-flex align-items-center justify-content-center'
                                            onClick={() => decreseCartItem(product.id)}
                                        >
                                            -
                                        </button>
                                    </div>
                                    <Button variant='out-line-danger' onClick={() => removeFromCart(product.id)}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
    else {
        return <>
            <Row
                style={{ margin: "20px auto", height: "70vh" }}
                lg={2} md={2} sm={2} xs={1}
                className='bg-light  rounded-1 parent-Product d-flex align-items-center justify-content-around p-3'
            >
                <Col>

                    <div style={{ margin: "50px auto" }} className="loader">
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__ball"></div>
                    </div>

                </Col>
            </Row>
        </>

    }
}

export default Product
