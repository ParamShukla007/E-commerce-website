import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import displayRazorPay from "../Components/razorpay";

export function addItemToCart(itemToAdd) {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newCartItems = [...storedCartItems, itemToAdd];
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
}
  
function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from local storage on component mount
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    // Function to remove an item from the cart
    const removeItemFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        // Update local storage with updated cart items
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    const totalEnd = totalAmount+80
    return (
        <>
            <div className="w-full h-full bg-gray-900 overflow-hidden">
                <Navbar />
                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col md:flex-row w-full max-w-7xl">
                        <div className="md:w-2/3">
                            <div className="py-8 bg-gray-900 overflow-y-auto h-screen" id="scroll">
                                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Cart</p>
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex items-center mt-14 py-8 border-t border-gray-200">
                                        <div className="w-1/4">
                                            <img src={item.imageSrc} alt={item.name} className="w-full h-full object-center object-cover" />
                                        </div>
                                        <div className="pl-3 w-3/4">
                                            <div className="flex items-center w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">{item.name}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex items-center">
                                                    <p className="text-xs leading-3 underline text-red-500 cursor-pointer" onClick={() =>{
                                                       
                                                        removeItemFromCart(index)
                                                        
                                                        }}>Remove</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">Rs {item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/3 bg-gray-900 h-full">
                            <div className="flex flex-col justify-between h-full py-20 px-14">
                                <div>
                                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                    <div className="flex items-center justify-between pt-16">
                                        <p className="text-xl leading-none text-gray-800">Subtotal</p>
                                        <p className="text-xl leading-none text-gray-800">{totalAmount}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-xl leading-none text-gray-800">Shipping</p>
                                        <p className="text-xl leading-none text-gray-800">50</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-xl leading-none text-gray-800">Tax</p>
                                        <p className="text-xl leading-none text-gray-800">30</p>
                                    </div>
                                </div>
                                <div className="pt-20">
                                    <div className="flex items-center pb-6 justify-between">
                                        <p className="text-2xl leading-normal text-gray-800">Total</p>
                                        <p className="text-2xl leading-normal text-gray-800">{totalEnd}</p>
                                    </div>
                                    <button className="w-full py-5 bg-gray-800 border border-gray-800 text-white text-base leading-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={()=>displayRazorPay(totalEnd)}>
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
          #scroll::-webkit-scrollbar {
            width: 8px;
          }

          #scroll::-webkit-scrollbar-thumb {
            background-color: #4a5568;
            border-radius: 4px;
          }

          #scroll::-webkit-scrollbar-track {
            background-color: #2d3748;
          }
        `}
            </style>
        </>
    );
}

export default Cart;


