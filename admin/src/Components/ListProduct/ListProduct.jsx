import React, { useEffect, useState } from 'react'
import './ListProduct.css'

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:5000/allproducts').then((res) => res.json()).then((data) => { setAllProducts(data) });
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const remove_product = async(id)=>{
        await fetch('http://localhost:5000/removeproduct',{
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        })
        await fetchInfo();
    }
    return (
        <div className='listproduct'>
            <h1>All Product List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product, index) => {
                    return <><div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className='listproduct-product-icon' />
                        <p>{product.name}</p>
                        <p>{product.old_price}</p>
                        <p>{product.new_price}</p>
                        <p>{product.category}</p>
                        <button onClick={()=>{remove_product(product.id)}}className='listproduct-remove-button'>Remove</button>
                    </div>
                        <hr />
                    </>
                })}
            </div>
        </div>
    )
}

export default ListProduct