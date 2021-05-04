import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addProducts } from "../../redux/actionCreators";
import ProductItem from "../ProductItem";
import firebase from "../../firebase/firestore";
import ImageSlider from "../ImageSlider";
import Loader from "react-loader-spinner";

function HomePage({ products, addProducts }) {
	const [isLoading, setIsLoading] = useState(true);
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
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<main className='flex flex-col'>
			{isLoading ? (
				<Loader
					className='self-center mt-56 sm:mt-64'
					type='Oval'
					color='#4B5563'
				/>
			) : (
				<>
					<ImageSlider />
					<div className='flex flex-wrap justify-center my-12 px-2'>
						{products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				</>
			)}
		</main>
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
