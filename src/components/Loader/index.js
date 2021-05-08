import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import ReactDOM from "react-dom";
const loaderRoot = document.getElementById("loader-root");
const root = document.getElementById("root");

function CustomLoader() {
	useEffect(() => {
		root.style.opacity = 0.5;
		document.body.style.overflow = "hidden";
		return () => {
			root.style.opacity = 1;
			document.body.style.overflow = "unset";
		};
	}, []);

	return ReactDOM.createPortal(
		<div className='w-full flex justify-center absolute top-0 left-0'>
			<Loader
				className='self-center mt-56 sm:mt-64'
				type='Oval'
				color='#4B5563'
			/>
		</div>,
		loaderRoot
	);
}

export default CustomLoader;
