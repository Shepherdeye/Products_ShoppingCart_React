import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Cart from '../../Pages/Cart/Cart';
const contextSHopingCart = createContext()

const ContextCartProvider = ({ children }) => {


    // get the  data by fetching 
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((respone) => {
            return setProducts(respone.data)

        }).catch((error) => {
            console.log(error);
        })
    }, [])
    // //////////////////////////////////////
    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");

    const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id == id)?.quantity || 0
    }

    const increseCartItem = (id) => {

        setCartItems((currentItems) => {

            const currentItem = currentItems.find((item) => item.id === id);

            if (currentItem) {
                return currentItems.map((item) => {

                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                    } else {
                        return item;
                    }

                })
            } else {
                return [...currentItems, { id, quantity: 1 }]
            }
        })
    }

    const decreseCartItem = (id) => {
        setCartItems((currentItems) => {
            const currentItem = currentItems.find((item) => item.id === id);
            if (currentItem) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                    } else {
                        return item;
                    }
                })
            } else {
                return false
            }
        })
    }
    const removeFromCart = (id) => {
        setCartItems((currentItems) => currentItems.filter((item) => item.id !== id))
    }
    const allItemQuantity = cartItems.reduce((quantity, item) => {
        return quantity + item.quantity
    }, 0)

    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    // const handleSearch = (value) => {
    //     if (value === "") {
    //         axios.get("https://fakestoreapi.com/products").then((respone) => {
    //             return setProducts(respone.data)

    //         }).catch((error) => {
    //             console.log(error);
    //         })
    //     } else {
    //         setProducts((currentItems) => {
    //             return currentItems.filter((item) =>
    //                 item.title.toLowerCase().includes(value.toLowerCase())
    //             );
    //         });
    //     }
    // }
    return (
        <contextSHopingCart.Provider value={{
            products,
            setProducts,
            cartItems,
            getItemsQuantity,
            increseCartItem,
            decreseCartItem,
            removeFromCart,
            allItemQuantity,
            handleOpen,
            isOpen,
            handleClose,
            value,setValue
       
        }}>
            {children}
            <Cart />
        </contextSHopingCart.Provider>
    )
}

export default ContextCartProvider
export const useShoppingCart = () => {
    return useContext(contextSHopingCart)
}