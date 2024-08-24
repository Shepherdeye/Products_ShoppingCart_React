import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../../Data/Context/Context'
import CartCard from './CartCard'
import FormatCurrency from '../../Data/CurrencyFormater'

const Cart = () => {
    const { handleClose, isOpen, cartItems, products, allItemQuantity } = useShoppingCart()


    return (
        <Offcanvas style={{backgroundColor:"#e8e8e8"}} show={isOpen} onHide={handleClose} placement='end' >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            {
                allItemQuantity > 0 ? <Offcanvas.Body style={{paddingLeft:"7px",paddingRight:"5px"}}>
                    <div className='CartElements mb-5'>
                        {cartItems.map((item) => {

                            return <CartCard key={item.id} {...item} handleClose={handleClose} />
                        })}
                    </div>

                    < div className='CartTotal d-flex align-items-center justify-content-around fw-bold'>
                        <div  > Total </div>
                        <div>
                            {
                                FormatCurrency(cartItems.reduce((total, item) => {
                                    const itemData = products.find((itemd) => itemd.id == item.id);
                                    return total + (itemData.price * item.quantity)

                                }, 0))
                            }
                        </div>
                    </ div>

                </Offcanvas.Body> : <Offcanvas.Body className='text-center'>
                    <div className='text-secondaray'>
                        <h3> The Shopping Cart Is Empty !</h3>
                        <i style={{fontSize:"150px"}} className="bi bi-cart4 "></i>
                    </div>
                </Offcanvas.Body>

            }

        </Offcanvas>
    )
}

export default Cart