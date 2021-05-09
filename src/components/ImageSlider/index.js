import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import sliderData from "./sliderData";

function ImageSlider() {
	const [current, setCurrent] = useState(0);

	const handlePrev = () => {
		setCurrent((current) =>
			current === 0 ? sliderData.length - 1 : current - 1
		);
	};

	const handleNext = () => {
		setCurrent((current) =>
			current === sliderData.length - 1 ? 0 : current + 1
		);
	};
	return (
		<div className='flex flex-col sm:flex-row bg-gray-600 mt-10 sm:mt-14 shadow-lg relative'>
			<FaChevronLeft
				onClick={handlePrev}
				className='my-auto h-4 w-4 sm:h-8 sm:w-8 text-white absolute top-24 sm:top-24 left-0 sm:left-2'
			/>
			<img
				src={sliderData[current].url}
				alt='name'
				className='w-full sm:w-2/3 h-32 sm:h-64 object-fill'
			/>
			<h4 className='w-full sm:w-2/3 h-24 sm:h-64 text-sm sm:text-xl px-6 sm:px-16 text-white flex items-center'>
				{sliderData[current].text}
			</h4>
			<FaChevronRight
				onClick={handleNext}
				className='my-auto h-4 w-4 sm:h-8 sm:w-8 text-white absolute top-24 sm:top-24 right-0 sm:right-2'
			/>
		</div>
	);
}

export default ImageSlider;
