import React from 'react'
import { Button, Col } from 'react-bootstrap'
import FormatCurrency from '../../Data/CurrencyFormater'
import { useShoppingCart } from '../../Data/Context/Context'
import { Link } from 'react-router-dom'
import Reviews from './Reviews'

const ProductsCard = ({ id, title, price, image, rating }) => {
    const {
        getItemsQuantity,
        increseCartItem,
        decreseCartItem,
        removeFromCart,
    } = useShoppingCart()
    const itemQuantity = getItemsQuantity(id);
    return (
        <Col style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "35px"
        }}>
            <div className="card" >
                <div className="card-img">
                    <Link style={{ color: "white", textDecoration: "none" }} to={`/products/${id}`}>
                        <img draggable={false} style={{ width: "200px", height: "109px", objectFit: "contain" }} src={image} alt={title} />
                    </Link>
                </div>

                <div className="card-title" style={{ fontSize: "10px" }}>{title}</div>


                <div className="card-footer d-flex  w-100 justify-content-between align-items-center">
                    <div style={{ height: "50px" }} className="card-price">{price && FormatCurrency(price)}</div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Reviews color={"#333"} rating={rating ? rating.rate : 3.9} />
                    </div>
                </div>

                <div>
                    {
                        itemQuantity === 0 ?
                            <button className="card-btn" onClick={() => increseCartItem(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                            </button> :
                            <div className="card-control d-flex column-gap-0 justify-content-around">
                                <div className='d-flex gap-1 align-items-center fw-bold'>
                                    <button style={{ width: "20px", height: "25px" }}
                                        className='btn btn-outline-dark d-flex align-items-center justify-content-center'
                                        onClick={() => increseCartItem(id)} >+</button>
                                    {itemQuantity}
                                    <button style={{ width: "20px", height: "25px" }}
                                        className='btn btn-outline-dark d-flex align-items-center justify-content-center'
                                        onClick={() => decreseCartItem(id)}>-</button>
                                </div>
                                <Button variant='out-line-danger' onClick={() => removeFromCart(id)}>
                                    <i className="bi bi-trash3-fill"></i>
                                </Button>

                            </div>
                    }
                </div>
            </div>
        </Col>
    )
}

export default ProductsCard
