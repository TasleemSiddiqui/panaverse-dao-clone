import React, { FC } from 'react'

const Cards:FC<{heading:string,para:string,No:number}> = ({heading,para,No}) => {
  return (
    <div className='max-w-[350px] max-h-[220px] min-h-[220px] p-14 relative shadow-md text-left my-4'>
       <h4 className='text-lg font-extrabold text-gray-900 my-3'>{heading}</h4>
       <p className='text-sm text-gray-600'>{para}</p>
       <div className='absolute text-slate-100 top-0 right-12 text-[8rem] -z-10  font-bold'> {No}</div>
    </div>
  )
}

export default Cards;