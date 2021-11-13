import { updateUserCart, fetchUserData } from "../../helpers/userHelpers";

export const increaseItemQuantity = async (userId, name) => {
  const { userData, docId } = await fetchUserData(userId);
  let newCart = [
    ...userData.cart.map((item) =>
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    ),
  ];
  const response = await updateUserCart(docId, newCart);
  return response ? newCart : 0;
};

export const decreaseItemQuantity = async (userId, name) => {
  const { userData, docId } = await fetchUserData(userId);
  let newCart = [
    ...userData.cart.map((item) =>
      item.name === name
        ? { ...item, quantity: item.quantity - 1 }
        : { ...item }
    ),
  ];
  const response = await updateUserCart(docId, newCart);
  return response ? newCart : 0;
};

export const removeItem = async (userId, name) => {
  const { userData, docId } = await fetchUserData(userId);
  let newCart = [...userData.cart.filter((item) => item.name !== name)];
  const response = await updateUserCart(docId, newCart);
  return response ? newCart : 0;
};

export const updateItemSaving = async (name, userId, newSavings) => {
  const { userData, docId } = await fetchUserData(userId);
  let newCart = [
    ...userData.cart.map((item) =>
      item.name === name ? { ...item, savings: newSavings } : item
    ),
  ];
  const response = await updateUserCart(docId, newCart);
  return response ? newCart : 0;
};
