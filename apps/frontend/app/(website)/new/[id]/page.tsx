import React from 'react'

interface props {
    params: {
        id : string;
    };
}

const page = ({params}: props) => {
  return (
    <div className='font-bold text-5xl'>
        {params.id}
    </div>
  )
}

export default page