import React, { useState } from "react";
import {FaChevronRight} from "react-icons/fa"
import {FaChevronLeft} from "react-icons/fa"
import sliderData from "./sliderData"

function ImageSlider() {
	const [current, setCurrent] = useState(3);

    const handlePrev = () => {
        setCurrent(current === 0  ? sliderData.length -1  : current - 1)
    }

    const handleNext = () => {
        setCurrent(current === sliderData.length - 1 ? 0 : current + 1)
    }
	return (
        <div className="flex bg-gray-500 mt-14 shadow-lg relative">
            <FaChevronLeft onClick={handlePrev} className="my-auto h-12 w-12 text-white absolute top-1/2 left-6" />
            <img src={sliderData[current].url} alt='name' className="w-3/4 h-96 object-fill" />
            <q className="w-2/3 text-3xl m-auto px-24 text-white">
                {sliderData[current].text}
            </q>
            <FaChevronRight onClick={handleNext} className="my-auto h-12 w-12 text-white absolute top-1/2 right-6" />
		</div>
	);
}

export default ImageSlider;
