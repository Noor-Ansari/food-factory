import React, { useEffect } from 'react'
import {connect} from "react-redux"
import { addProducts } from '../../redux/actionCreators'
import ProductItem from "../ProductItem"
import firebase from "../../firebase/firestore"

function HomePage({products, addProducts }) {
console.log(products)
    useEffect(() => {
        const getTodos = () => {
          firebase.db.collection('product').get()
            .then(querySnapshot => {
              let data = []
            querySnapshot.forEach( doc => {
              data.push(doc.data())
            })
            addProducts(data)
          })
          .catch(err => {
            console.log(err.message)
          })
        }
        getTodos()
    }, [])
    
    return (
            <div className="flex flex-wrap justify-center">
            {
                products.map(product => (
                    <ProductItem key={product.id} name={product.name} description = {product.description} image = {product.image} price = {product.price} stocks = {product.stocks} />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProducts : (products) => dispatch(addProducts(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)