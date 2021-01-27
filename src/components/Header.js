import React from 'react'
import {Link} from "react-router-dom"

function Header(){
    return(
     <div>
            <header>
                <Link to="/">Pic Some</Link>
                <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
            </header>

        </div>
    )

}

export default Header
