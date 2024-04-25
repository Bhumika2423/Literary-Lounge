import React, { useContext } from 'react'
import './CSS/ProductCategory.css'
import { EcomContext } from '../Context/EcomContext';
// import dropdown_icon from '../Components/Assets/dropdown_icon.svg';
import Items from '../Components/Items/Items';

const ProductCategory = (props) => {
  const { all_product } = useContext(EcomContext);
  return (
    <div className='product-category'>
      <img className='shopcategory-banner'src={props.banner} alt="" />
      <div className="productcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="productcategory-sort">
          {/* Sort by <img src={dropdown_icon} alt='' /> */}
        </div>
      </div>
      <div className="productcategory-products">
        {all_product.map((item, i) => {
          try{
          if (props.category === item.category) {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        } catch (error) {
            console.error('Error rendering product:', error);
            return null;
          }
        })}
      </div>
      <div className="productcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ProductCategory;