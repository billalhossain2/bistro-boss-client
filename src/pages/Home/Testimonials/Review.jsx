import { Rating, Star } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import {BiSolidQuoteLeft} from "react-icons/bi"

const Review = ({review}) => {
    const {name, details, rating} = review;

    const myStyles = {
        itemShapes:Star,
        activeFillColor: '#CD9003',
        inactiveFillColor: '#fbf1a9'
      }


  return (
    <div className="flex flex-col items-center text-center gap-5 px-16">
       <Rating readOnly  style={{ maxWidth: 150 }} itemStyles={myStyles} value={rating}/>
        <BiSolidQuoteLeft className='text-5xl'></BiSolidQuoteLeft>
        <p>{details}</p>
        <p className='text-[#CD9003] font-medium'>{name}</p>
    </div>
  )
}

export default Review