import firebase from "firebase/app";
import "firebase/auth";

export const logOutUser = async () => {
  try {
    await firebase.auth().signOut();
    return 1;
  } catch (error) {
    return 0;
  }
};
