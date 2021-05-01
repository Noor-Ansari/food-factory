import React from 'react'
import {Link} from "react-router-dom"

function index() {
    return (
        <nav className="py-3 px-12 flex justify-between items-center shadow-lg bg-gray-600 text-white">
            <div className="text-2xl uppercase font-semibold">
                Food factory
            </div>
                <input type="text" className="w-2/5 py-1 px-2 rounded ring-gray-800 focus:ring-4 outline-none bg-gray-500 "  placeholder="Search your favourites..."/>
            <div className="flex space-x-12">
                <Link to="/" className="px-4 rounded bg-gray-500 hover:bg-gray-600">Home</Link>
                <Link to="/cart" className="px-4 rounded bg-gray-500 hover:bg-gray-600">Cart</Link>
            </div>
        </nav>
    )
}

export default index
