import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {Context} from '../Context'

function Header(){
const {cartItems} = useContext(Context)
const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return(
     <div>
            <header>
                <Link to="/online-pics-store">Pic Some</Link>
                <Link to="/online-pics-store/cart"><i className={`${cartClassName} ri-fw ri-2x`}></i></Link>
            </header>

        </div>
    )

}

export default Header
