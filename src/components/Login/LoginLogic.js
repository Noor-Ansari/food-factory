import db from "../../firebase/firestore";
import firebase from "firebase";

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

export const loginWithEmailAndPassword = async (email, password) => {
	try {
		const userCredentials = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		const { userData } = await fetchUserData(userCredentials.user.uid);
		return userData;
	} catch (error) {
		return 0;
	}
};
