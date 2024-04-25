import React from 'react'
import './Breadcrum.css'
import arrow_ico from '../Assets/arrow_ico.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home <img src={arrow_ico} alt=''/> SHOP <img src={arrow_ico} alt=''/> {product.category} <img src={arrow_ico} alt=''/> {product.name}
    </div>
  )
}

export default Breadcrum;
