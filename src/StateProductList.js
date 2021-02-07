import React from 'react';

import Header from './Header';


const StateProductList = ({ images }) => {
    console.log(images);

    const imageRender = (images) => {
        return images.map(image => {
            console.log(image.urls.small)
            return (
                <div key={image.id}>
                    <img src={image.urls.small} />
                </div>
            )
        })
    }

    
    return (
        <>
            <div className="app">
                <Header />
                { imageRender(images)}
            </div>
            
        </>
    )
}

export default StateProductList;