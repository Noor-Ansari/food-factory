import db from "../../firebase/firestore";

export const fetchProductsData = async () => {
	try {
		const querySnapshot = await db.collection("products").get();
		let data = [];
		querySnapshot.forEach((doc) => {
			data.push(doc.data());
		});
		return data;
	} catch (error) {
		return 0;
	}
};
