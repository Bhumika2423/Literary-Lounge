import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddProduct.css';
import upload_area from '../../assets/image_upload.png';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        category: 'newRelease',
        new_price: '',
        old_price: '',
    });

    const [productId, setProductId] = useState('');

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const addProduct = async () => {
        try {
            let responseData;
            let product = { ...productDetails };
            let formData = new FormData();
            formData.append('product', image);

            // Upload image
            await fetch('http://localhost:5000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            })
                .then((resp) => resp.json())
                .then((data) => {
                    responseData = data;
                });

            if (responseData.success) {
                product.image = responseData.image_url;
                console.log(product);

                // Add product
                await fetch('http://localhost:5000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        if (data.success) {
                            toast.success('Product added successfully');
                        } else {
                            toast.error('Failed to add product');
                        }
                    });
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    // ...

    const updateProduct = async () => {
        try {

            if (!productId) {
                toast.error('Please provide a product ID');
                return;
            }

            let responseData;
            let product = { ...productDetails };
            let formData = new FormData();
            formData.append('product', image);

            // Upload image
            await fetch('http://localhost:5000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            })
                .then((resp) => resp.json())
                .then((data) => {
                    responseData = data;
                });

            if (responseData.success) {
                product.image = responseData.image_url;

                // Include the product ID in the update request
                await fetch(`http://localhost:5000/updateproduct/${productId}`, {
                    method: 'PATCH',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        if (data.success) {
                            toast.success('Product updated successfully');
                        } else {
                            toast.error('Failed to update product');
                        }
                    });
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // ...


    return (
        <div className='addproduct'>
            <div className='addproduct-itemfield'>
                <p>Manga Title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type='text'
                    name='name'
                    placeholder='Manga Title'
                />
                <input
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    type='text'
                    placeholder='Product ID'
                />
                <div className='addproduct-price'>
                    <div className='addproduct-itemfiled'>
                        <p>Price</p>
                        <input
                            value={productDetails.old_price}
                            onChange={changeHandler}
                            type='text'
                            name='old_price'
                            placeholder='Price'
                        />
                    </div>
                    <div className='addproduct-itemfiled'>
                        <p>Offer Price</p>
                        <input
                            value={productDetails.new_price}
                            onChange={changeHandler}
                            type='text'
                            name='new_price'
                            placeholder='Price'
                        />
                    </div>
                    <div className='addproduct-itemfiled'>
                        <p>Product Category</p>
                        <select
                            value={productDetails.category}
                            onChange={changeHandler}
                            name='category'
                            className='add-product-selector'
                        >
                            <option value='newRelease'>New Release</option>
                            <option value='bestSeller'>Best Seller</option>
                            <option value='classicTitle'>Classic Titles</option>
                        </select>
                    </div>
                    <div className='addproduct-itemfiled'>
                        <label htmlFor='file-input'>
                            <img src={image ? URL.createObjectURL(image) : upload_area} alt='' />
                        </label>
                        <input
                            onChange={imageHandler}
                            type='file'
                            name='image'
                            id='file-input'
                            hidden
                        />
                    </div>
                    <button onClick={() => addProduct()} className='addproduct-btn'>
                        ADD
                    </button>
                    <button onClick={() => updateProduct(1)} className='addproduct-btn'>
                        UPDATE
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;
