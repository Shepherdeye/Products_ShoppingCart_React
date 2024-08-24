import React from 'react'
import { useShoppingCart } from '../../Data/Context/Context'
import FormatCurrency from '../../Data/CurrencyFormater';
import './CartCard.css'
import { Link } from 'react-router-dom';

const CartCard = ({ id, quantity ,handleClose}) => {
    const { products,

        increseCartItem,
        decreseCartItem,
        removeFromCart,
    } = useShoppingCart();

    const cartIt = products.find((item) => item.id === id)
    if (quantity > 0) {

        return (
            <>
             <>
                   {/* <div style={{ height: "70px", paddingTop: "10px", paddingBottom: "5px" }}
                       className='bg-transparent d-flex justify-content-between align-items-center mb-2'>
                       <div className='item-info w-50 d-flex gap-2 pt-1 pb-3 ' >
                           <img style={{height:"70px"}} src={cartIt.image} alt={cartIt.title} className='w-25  object-fit-contain' />
                           <div style={{height:"20px"}} className='d-flex flex-column '>
                               <p style={{ fontSize: "12px", wordBreak: "break-word", fontWeight: "bold" }}>{cartIt.category}</p>
                               <p style={{ color: "crimson", fontWeight: "600" }}>{FormatCurrency(cartIt.price * quantity)}</p>
                           </div>
                
                
                       </ div>
                       <div className='item-control d-flex justify-content-between align-items-center fw-bold gap-1'>
                           <button style={{ width: "25px", height: "25px" }}
                               className='btn btn-dark d-flex align-items-center justify-content-center' onClick={() => increseCartItem(id)}
                           >+</button>
                           <div > {quantity}</div>
                           <button
                               style={{ width: "25px", height: "25px" }}
                               className='btn btn-dark d-flex align-items-center justify-content-center' onClick={() => decreseCartItem(id)}
                           >-</button>
                           <button
                
                               style={{ width: "25px", height: "25px" }}
                               className='btn  text-danger d-flex align-items-center justify-content-center' onClick={() => removeFromCart(id)}>
                               <i className="bi bi-trash3-fill"></i>
                
                           </button>
                       </div>
                
                   </div>
                   <hr /> */}
                
             </>
                <div className="cardC mb-2">
                    <div className="cardC-wrapper">
                        <div className="cardC-icon w-25 bg-white ">
                            <img  src={cartIt.image} alt={cartIt.title} className='w-100 object-fit-contain' />

                        </div>

                        <div style={{marginLeft:"10px"}} className="cardC-content ">
                            <div className="cardC-title-wrapper">
                                <span className="cardC-title">{cartIt.category}</span>
                                <span className="cardC-action" onClick={() => removeFromCart(id)}>
                                    <svg
                                        viewBox="0 0 384 512"
                                        width="15"
                                        height="15"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                            <Link onClick={handleClose} style={{textDecoration:"none"}} to={`/products/${id}`}>
                                <div  style={{textDecoration:"none"}} className="product-name">{cartIt.title}</div>

                            </Link>                            <div className="product-price">{FormatCurrency(cartIt.price * quantity)}</div>
                            <button className="btn-view-cart" type="button" onClick={() => increseCartItem(id)}>+</button>
                            {quantity}
                            <button className="btn-view-cart" type="button" onClick={() => decreseCartItem(id)}>-</button>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default CartCard