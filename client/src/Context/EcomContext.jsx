import React, { createContext, useEffect } from 'react'
import { useState } from 'react';


export const EcomContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const EcomContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_Product(data))

            if(localStorage.getItem('auth.token')){
                fetch('http://localhost:5000/getcart',{
                    method: 'POST',
                    headers:{
                        Accept: 'application/form-data',
                        'auth.token': `${localStorage.getItem('auth.token')}`,
                        'Content-Type': 'application/json',
                    },
                    body:"",
                }).then((response)=>response.json())
                .then((data)=>setCartItems(data));
            }
    }, [])

    const addToCart = (itemid) => {
        setCartItems((prevState) => {
            return {
                ...prevState,
                [itemid]: prevState[itemid] + 1
            }
        })
        if (localStorage.getItem('auth.token')) {
            fetch('http://localhost:5000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data,',
                    'auth.token': `${localStorage.getItem('auth.token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "itemId": itemid
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }

    const removeFromCart = (itemid) => {
        setCartItems((prevState) => {
            return {
                ...prevState,
                [itemid]: prevState[itemid] - 1
            }
        });
        if (localStorage.getItem('auth.token')) {
            fetch('http://localhost:5000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data,',
                    'auth.token': `${localStorage.getItem('auth.token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "itemId": itemid
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item]
            }
        }
        return totalItems;
    }
    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <EcomContext.Provider value={contextValue}>
            {props.children}
        </EcomContext.Provider>
    )
}

export default EcomContextProvider;