import React, {useContext, useState} from "react"
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const [buttonText, setButtonText] = useState("Place Order")
    
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            cartItems.length = 0
        }, 3000)
        emptyCart()
    }

    const cartItemElements = cartItems.map(item => (<
        CartItem key={item.id} item={item}/>
        ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                {cartItems.length >0 ? (
                <button onClick={placeOrder}>{buttonText}</button>
                ): (<p>You have no items in your cart.</p>)}       
            </div>
        </main>
    )
}

export default Cart