import React from 'react'
import { Link } from "react-router-dom"

function index() {
    return (
        <nav className="py-2 px-2 xxs:px-4 sm:px-8 md-px-12 flex justify-between items-center shadow-lg bg-gray-600 text-white fixed top-0 left-0 w-full z-50">
            <div className="text-lg uppercase font-semibold">
                <Link to="/">Food Factory</Link>
            </div>
            <input type="text" className="hidden sm:block sm:w-2/5 py-1 px-2 rounded ring-gray-800 focus:ring-4 outline-none bg-gray-500  placeholder-white" placeholder="Search your favourites..." />
            <div className="flex space-x-2 sm:space-x-4 md:space-x-10">
                <Link to="/" className="px-2 rounded bg-gray-500 hover:bg-gray-600 transition duration-300 text-sm">Home</Link>
                <Link to="/cart" className="px-2 rounded bg-gray-500 hover:bg-gray-600 transition duration-300 text-sm">Cart</Link>
            </div>
        </nav>
    )
}

export default index
