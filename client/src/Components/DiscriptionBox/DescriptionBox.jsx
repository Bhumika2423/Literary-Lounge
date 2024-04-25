import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (280)</div>
        </div>
        <div className="descriptionbox-description">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora neque repellendus iure, quibusdam deleniti voluptatem officiis numquam? Quis ipsam nihil ut, mollitia a facilis, modi, dignissimos in culpa laborum magni.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic mollitia quos. Repellendus iure, dignissimos vel quasi consequatur sint quas excepturi! Minima, animi magnam ipsam perspiciatis omnis qui. Repellat, laboriosam.</p>
        </div>
    </div>
  )
}

export default DescriptionBox;
