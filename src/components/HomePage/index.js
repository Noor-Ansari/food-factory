import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addProducts } from "../../redux/actionCreators";
import ProductItem from "../ProductItem";
import firebase from "../../firebase/firestore";
import ImageSlider from "../ImageSlider";

function HomePage({ products, addProducts }) {
	useEffect(() => {
		firebase.db
			.collection("product")
			.get()
			.then((querySnapshot) => {
				let data = [];
				querySnapshot.forEach((doc) => {
					data.push(doc.data());
				});
				addProducts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<>
		<ImageSlider />
		<div className='flex flex-wrap justify-center my-24 px-4'>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
			</div>
			</>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProducts: (products) => dispatch(addProducts(products)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
