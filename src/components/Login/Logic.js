import firebase from "firebase";
import { fetchUserData } from "../../helpers/userHelpers";

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
