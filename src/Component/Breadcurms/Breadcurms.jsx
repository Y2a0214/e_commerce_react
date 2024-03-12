import React from 'react'

const Breadcurms = (props) => {
    const product = props.product
  return (
    <div className='my-12 font-semibold text-mycolor'>
        Shop <i className="fa-solid fa-caret-right"></i> {product.category} <i className="fa-solid fa-caret-right"></i> {product.name} 
    </div>
  )
}

export default Breadcurms