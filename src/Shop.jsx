import React, { useState } from "react";
import Login from "./Login";

export default function Shop(props) {
    const [cart, setCart] = useState([]);

    function addItemToCart(item) {
        setCart([...cart, item]);
    }

    function removeItemFromCart(itemToRemove) {
        setCart(cart.filter((item) => item.id !== itemToRemove.id));
    }

    const renderItems = () => {
        const ShopItems = [
            { id: 1, name: "Solo Sisig with Egg", price: 80 },
            { id: 2, name: "Bulalo", price: 380 },
            { id: 3, name: "Crispy Pata", price: 400 },
            { id: 4, name: "Sinigang na Baboy", price: 130 },
            { id: 5, name: "Bistek", price: 90 },
            { id: 6, name: "Chicken Inasal", price: 135 },
            { id: 7, name: "Palabok", price: 90 },
            { id: 8, name: "Fried Lumpia", price: 120 },
            { id: 9, name: "Ginataang Gulay", price: 75 },
            { id: 10, name: "Tortang Talong", price: 50 },
        ];

        return ShopItems.map((item) => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>Price per Order: ${item.price}</p>
                <button onClick={() => addItemToCart(item)} className="add">Add to Cart</button>
                <button onClick={() => removeItemFromCart(item)} className="remove">Remove from Cart</button><br/>
                <br />
            </div>
        ));
    };

    const handleCheckout = () => {
    };

    if (!props.isLoggedIn) {
        return <Login />;
    } else {
        return (
            <div>
                <h1>Welcome to the Shop</h1>
                <h3 className="now">Place your Orders NOW!</h3><br/><br/>
                {renderItems()}
             
                {cart.length > 0 && (
                    <div>
                        <br/><br/><h2 className="checkout">Checkout Items:</h2><br/>
                        
                            {cart.map((item) => (
                                <li key={item.id}>
                                    {item.name} - ${item.price}
                                </li>
                            ))}
                        <br/><br/>
                        
                    </div>
                )}
            </div>
        );
    }
}