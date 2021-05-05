import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
const modalRoot = document.getElementById('modal-root');
const root = document.getElementById('root');

function Modal({ itemName, setShowModal }) {
    
    const handleClick = () => {
        setShowModal(false)
    }

    useEffect(() => {
        root.style.opacity = 0.5
        document.body.style.overflow = 'hidden'
        return () => {
            root.style.opacity = 1
            document.body.style.overflow = 'unset'
        }
    }, [])

    return ReactDOM.createPortal(
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-screen">
              <div className="bg-gray-600 shadow-lg mx-12 h-40 p-4 flex flex-col justify-center rounded-lg">
            <h1 className="text-sm text-white text-center my-4">{itemName} added to your cart.</h1>
            <button className="bg-gray-500 text-white text-xs w-12 p-1 mx-auto rounded focus:outline-none" onClick={handleClick}>Ok</button>
        </div>
        </div>
    , modalRoot)
}

export default Modal;
