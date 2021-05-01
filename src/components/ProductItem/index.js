import React from 'react'

function ProductItem({name, price, description, image, stocks}) {
    return (
        <div className="shadow-xl w-1/3 m-4 p-5 flex flex-col justify-between
        rounded-md bg-gray-600 text-white">
            <img src={image} alt={name} className="h-72" />
            <div className="mt-4 flex flex-col">
                <h4 className="text-lg font-medium flex justify-between border-b-2 border-gray-800 my-2">{name} <span>€{price}</span></h4>
                <small className="text-xs">{description}</small>
                <button className="py-1 px-2 bg-gray-800 w-32 rounded-lg hover:bg-gray-900 text-white text-sm font-thin my-2">Add to basket</button>
            </div>
        </div>
    )
}

export default ProductItem;
