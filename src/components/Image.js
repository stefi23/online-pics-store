import React, {useContext} from 'react';
import { Context } from '../Context'
import PropTypes from 'prop-types';
import useHover from '../hooks/useHoover'

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool

  }),
}

function Image({className, img}){
    const {cartItems, toggleFavorite, addToCart, removeFromCart} = useContext(Context)
    const [isHovered, ref] = useHover()

    
    const heartIcon = () => {
        if(img.isFavorite) {
            return <i className='ri-heart-fill favorite' onClick={() => toggleFavorite(img.id)}></i>
        } else if(isHovered) {
            return <i className='ri-heart-line favorite' onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    const cartIcon = () => {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className='ri-shopping-cart-fill cart' onClick={() => removeFromCart(img.id)}></i>
        } else if(isHovered) {
            return <i className='ri-add-circle-line cart' onClick={() => addToCart(img)}></i>
        }
    }
    return(
        <div 
            className={`${className} image-container`}
            ref={ref}
            >
        <img    
            src={img.url} className='image-grid'
            alt='Images from catalog'/>
             {heartIcon()}
             {cartIcon()}
         </div>
    )
}

export default Image
