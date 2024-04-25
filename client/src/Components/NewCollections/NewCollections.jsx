import React, { useState, useEffect } from 'react'
import './NewCollections.css'
import Items from '../Items/Items'

export const NewCollections = () => {
    const [new_collection, setNew_collection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newcollections')
     .then((response)=>response.json())
     .then((data)=>setNew_collection(data))
    },[])
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollections;
