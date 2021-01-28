import React, {useContext, useState} from "react"
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
    // const [isHovered, setIsHovered] = useState(false)
    const [isHovered, ref] = useHover()

   const iconClassName = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

    return(
        <div className='cart-item'>
            <i  className={iconClassName} 
                onClick={()=> removeFromCart(item.id)}
                ref={ref}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                ></i>
            <img src={item.url} width='130px' />
            <p>$5.99</p>
        </div>
    
    )
}

export default CartItem