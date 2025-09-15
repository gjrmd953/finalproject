import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ImStarEmpty } from 'react-icons/im';

const ProductRating = ({rating}) => {
    console.log(rating);
   const fullRating = Math.floor(rating) || 0
   const halfRating = rating % 1 >= 0.5
    const emptyRating = 5 - fullRating - (halfRating ? 1 : 0)
  return (
    <div className='flex'>
        {
            [...Array(fullRating)].map(()=>(
              <FaStar className='text-[#FFD881]'/>     
            ))
        }

        {
           halfRating && <FaStarHalfAlt className='text-[#FFD881]'/>
 
        }

        {
          [...Array(emptyRating)].map(()=>(
              <ImStarEmpty />    
            ))  
        }
    </div>
  )
}

export default ProductRating