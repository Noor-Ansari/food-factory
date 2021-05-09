import firebase from "firebase";

export const logOutUser = async () => {
	try {
		await firebase.auth().signOut();
		return 1;
	} catch (error) {
		return 0;
	}
};
