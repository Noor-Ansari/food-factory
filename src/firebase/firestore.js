import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyANPEFON872oT1tfeZLoxXtiqlxIxNQRlU",
    authDomain: "food-factory-5a8a9.firebaseapp.com",
    projectId: "food-factory-5a8a9",
    storageBucket: "food-factory-5a8a9.appspot.com",
    messagingSenderId: "840717753163",
    appId: "1:840717753163:web:d9bfe3932b7ba83c9666ce"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default  {
    firebase, db
}
