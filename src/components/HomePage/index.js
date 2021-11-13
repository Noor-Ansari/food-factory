import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addProducts, setLoader } from "../../redux/actionCreators";
import ProductItem from "../ProductItem";
import ImageSlider from "../ImageSlider";
import CustomerLoader from "../Loader";
import Modal from "../Modal";
import { fetchProductsData } from "./Logic";

function HomePage({ products, addProducts, modal, loader, setLoader }) {
  useEffect(() => {
    (async () => {
      setLoader(true);
      const productsData = await fetchProductsData();
      if (productsData) {
        addProducts(productsData);
        setLoader(false);
      }
    })();
  }, [addProducts, setLoader]);

  return (
    <>
      {loader ? (
        <CustomerLoader />
      ) : (
        <>
          {modal && <Modal />}
          <ImageSlider />
          <div className="flex flex-wrap justify-center my-12 px-2">
            {products.map((product) => (
              <ProductItem key={product.name} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    modal: state.modalReducer.modal,
    loader: state.modalReducer.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProducts: (products) => dispatch(addProducts(products)),
    setLoader: (state) => dispatch(setLoader(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
