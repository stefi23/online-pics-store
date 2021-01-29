import React, {useContext} from "react"
import {Context} from '../Context'
import PropTypes from 'prop-types'

import useHover from '../hooks/useHoover'


CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

function CartItem({item}){
    const {removeFromCart} = useContext(Context)
    const [isHovered, ref] = useHover()

   const iconClassName = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

    return(
        <div className='cart-item'>
            <i  className={iconClassName} 
                onClick={()=> removeFromCart(item.id)}
                ref={ref}>
            </i>
            <img src={item.url} width='130px' alt="Srimba JSON test images" />
            <p>$5.99</p>
        </div>
    
    )
}

export default CartItem