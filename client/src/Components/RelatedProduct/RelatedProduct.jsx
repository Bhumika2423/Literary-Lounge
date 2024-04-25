import React from 'react'
import './RelatedProduct.css';
import data_product from '../Assets/data';
import Items from '../Items/Items';

const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Titles</h1>
        <hr />
        <div className="relatedproduct-item">
            {data_product.map((item, i) =>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProduct;