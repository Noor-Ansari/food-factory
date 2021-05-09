import { fetchUserData, updateUserCart } from "../../helpers/userHelpers";

export const addItemToCart = async (name, price, image, userId) => {
	const { userData, docId } = await fetchUserData(userId);
	const isExists = userData.cart.filter((item) => item.name === name);
	const filteredCart = userData.cart.filter((item) => item.name !== name);
	let newCart;
	if (isExists.length) {
		newCart = [
			...filteredCart,
			{ ...isExists[0], quantity: isExists[0].quantity + 1 },
		];
	} else {
		newCart = [
			...filteredCart,
			{
				name: name,
				price: price,
				image: image,
				quantity: 1,
				savings: 0,
				addedAt: Date.now(),
			},
		];
	}

	const response = await updateUserCart(docId, newCart);
	if (response) {
		const { userData } = await fetchUserData(userId);
		return userData;
	} else {
		return 0;
	}
};
