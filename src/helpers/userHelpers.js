import db from "../firebase/firestore";

export const updateUserCart = async (docId, newCart) => {
	try {
		await db.collection("users").doc(docId).update({ cart: newCart });
		return 1;
	} catch (error) {
		return 0;
	}
};

export const fetchUserData = async (userId) => {
	const querySnapshot = await db
		.collection("users")
		.where("userId", "==", userId)
		.get();
	let userData;
	let docId;
	querySnapshot.forEach((doc) => {
		userData = doc.data();
		docId = doc.id;
	});
	return { userData, docId };
};
