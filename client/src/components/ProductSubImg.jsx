import React from 'react'

const ProductSubImg = (props) => {
  return (
    <div className="w-[192.09px] h-[155.93px] relative bg-neutral-100 rounded flex justify-center">
        {props.image && <img className="w-[116px] h-[151.13px]" src={props.image} />}
    </div>
  )
}

export default ProductSubImg
