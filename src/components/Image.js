import React, {useState} from 'react';

function Image({className, img}){
    const [isHoovered, setIsHoovered] = useState(false)

    const handleMouseEnter = () =>{
        setIsHoovered(true)
    }

    const handleMouseOut = () =>{
        setIsHoovered(false)
    }

    return(
        <div className={`${className} image-container`}  >
        <img    onMouseEnter={() => setIsHoovered(true)}
                onMouseLeave={() => setIsHoovered(false)}
                src={img} className='image-grid'/>
                {isHoovered ? (
                    <>
                <i className="ri-heart-line favorite"></i>
                <i className="ri-add-circle-line cart"></i>
                </>
                ) : null }

         </div>
    )
}

export default Image