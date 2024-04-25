import React, { useContext } from 'react'
import { EcomContext } from '../Context/EcomContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/BreadCrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DiscriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(EcomContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product;