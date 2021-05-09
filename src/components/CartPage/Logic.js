export const getTotal = (cart) => {
	const productsTotal = cart.map((item) => item.quantity * item.price);
	const grandTotal = productsTotal.reduce((total, current) => total + current);
	return grandTotal;
};

export const getTotalSavings = (cart) => {
	const savingsTotal = cart.map((item) => item.savings);
	const savingsGrandTotal = savingsTotal.reduce(
		(total, current) => total + current
	);
	return savingsGrandTotal;
};
