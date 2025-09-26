import React from 'react'

const MarksItem = ({img}) => {
  return (
    <div>
        <div className=' m-8'>
            <img className='hover:border-b-2 hover:border-green-400' src={`/images/${img}`} alt="" />
        </div>


    </div>
  )
}

export default MarksItem