import React from 'react'

const Cover = ({title, description, coverImg}) => {
  return (
    <section style={{backgroundImage:`url('${coverImg}')`, backgroundSize:'cover'}} className="flex justify-center items-center mb-20 h-[600px]">
        <div className='bg-black bg-opacity-50 text-center md:w-[60%] w-[90%] text-white md:py-16 py-8'>
        <h3 className='md:text-5xl text-3xl mb-3 uppercase'>{title}</h3>
        <p>{description}</p>
        </div>
    </section>
  )
}

export default Cover