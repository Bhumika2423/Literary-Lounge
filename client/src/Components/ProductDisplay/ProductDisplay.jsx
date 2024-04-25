import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { EcomContext } from '../../Context/EcomContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(EcomContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt=''/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(230)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ducimus ratione aspernatur ullam beatae molestiae libero officiis quia. Hic et expedita totam ipsam neque id, animi similique voluptatum est ducimus?
                </div>
                <button onClick={()=>{addToCart(product.id)}}className='productdisplay-right-button'>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>New Release, Mystery, Seinen, Fantasy</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Latest, New</p>
            </div>
        </div>
    )
}

export default ProductDisplay;