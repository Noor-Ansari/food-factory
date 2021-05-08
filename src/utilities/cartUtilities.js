import db from "../firebase/firestore";

export const addItemToCart = (name,
    image,
    price,
    userId, setModal, setModalText) => {
    db.collection("users")
				.where("userId", "==", userId)
				.get()
				.then((querySnapshot) => {
					let docId;
					let userData;
                    let newCart;
					querySnapshot.forEach((doc) => {
						userData = doc.data();
						docId = doc.id;
					});
					const isExists = userData.cart.filter((item) => item.name === name);
					const filteredCart = userCart.cart.filter(
						(item) => item.name !== name
					);
					if (isExists.length) {
						newCart = [
							...filteredCart,
							{ ...isExists[0], quantity: (isExists[0].quantity += 1) },
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
					db.collection("users")
						.doc(docId)
						.set({ cart: newCart }, { merge: true })
						.then(() => {
							setModal(true)
                            setModalText(`${name} added to cart`)					
                        	})
						.catch((error) => console.log(error));
} 

