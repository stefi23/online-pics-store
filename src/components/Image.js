import React, {useState, useContext} from 'react';
import { Context } from "../Context"
import PropTypes from 'prop-types';

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool

  }),
}

function Image({className, img}){
    const [isHoovered, setIsHoovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    return(
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setIsHoovered(true)}
            onMouseLeave={() => setIsHoovered(false)}  >
        <img    
            src={img.url} className='image-grid'
            alt="Images from catalog"/>
                {isHoovered ? (
                    <>
                    {img.isFavorite ? 
                        (<i className="ri-heart-fill favorite"
                            onClick={() => toggleFavorite(img.id)}>   
                        </i>) : 
                        (<i  className="ri-heart-line favorite"
                             onClick={() => toggleFavorite(img.id)}>
                        </i>)}
                        
                        <i className="ri-add-circle-line cart"></i>
                    </>
                ) : null }

         </div>
    )
}

export default Image


    // const handleMouseEnter = () =>{
    //     setIsHoovered(true)
    // }

    // const handleMouseOut = () =>{
    //     setIsHoovered(false)
    // }