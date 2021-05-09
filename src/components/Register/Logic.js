import db from "../../firebase/firestore";
import firebase from "firebase";

export const saveUserData = async (firstName, lastName, email, userId) => {
	const response = await db.collection("users").add({
		firstName: firstName,
		lastName: lastName,
		email: email,
		cart: [],
		userId: userId,
	});
	return response;
};

export const registerWithEmailAndPassword = async (
	firstName,
	lastName,
	email,
	password
) => {
	try {
		const userCredential = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		await saveUserData(firstName, lastName, email, userCredential.user.uid);
		return 1;
	} catch (error) {
		return 0;
	}
};
