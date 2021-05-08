import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addProducts, setLoader } from "../../redux/actionCreators";
import ProductItem from "../ProductItem";
import db from "../../firebase/firestore";
import ImageSlider from "../ImageSlider";
import CustomerLoader from "../Loader";
import Modal from "../Modal";

function HomePage({ products, addProducts, modal, loader, setLoader }) {
	useEffect(() => {
		setLoader(true);
		db.collection("products")
			.get()
			.then((querySnapshot) => {
				let data = [];
				querySnapshot.forEach((doc) => {
					data.push(doc.data());
				});
				addProducts(data);
				setLoader(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<>
			{loader ? (
				<CustomerLoader />
			) : (
				<>
					{modal && <Modal />}
					<ImageSlider />
					<div className='flex flex-wrap justify-center my-12 px-2'>
						{products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				</>
			)}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.productReducer.products,
		modal: state.modalReducer.modal,
		loader: state.modalReducer.loader,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProducts: (products) => dispatch(addProducts(products)),
		setLoader: (state) => dispatch(setLoader(state)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
