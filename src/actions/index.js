import *as actionType from './../constants/actionType'
import callApi from './../utils/callApi'
import products from '../reducers/products'
import Product from '../components/ProductList/ProductList'

/** show all product request
 * 
 */
export const actFetchAllProductRequest = ()=> {
    return (dispatch)=>{
        callApi('product','GET',null)
        .then((res)=> {
            dispatch(actFetchAllProduct(res.data))
        })
    }
}

/** 
 * action show all produc
*/
export const actFetchAllProduct = (products)=> {
    return {
        type: actionType.FETCH_PRODUCTS,
        products
    }
}

/**
 * act delete product request   
 * @param {*} id id want to delete
 */
export const actDeleteProductRequest = (id)=> {
    return (dispatch) => {
        return callApi(`product/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}
/**
 * act delete product
 * @param {*} id id of product want to delete 
 */
export const actDeleteProduct = (id) => {
    return {
         type: actionType.DELETE_PRODUCTS,
         id
        }
}

/**
 * action add product
 */
export const actAddProduct = (product) => {
    return {
         type: actionType.ADD_PRODUCTS,
         product
        }
}
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`product`,'POST', product).then(res => {
            dispatch(actAddProduct(res.data))
        })
    }
}

/**
 * act get product editing.
 */
export const actGetProductEditingRequest = (id) => {
    return (dispatch)=> {
        return callApi (`product/${id}`, 'GET', null).then(res => {
            dispatch(actGetProductEditing(res.data))
        })
    }
}
export const actGetProductEditing = (product) => {
    return {
        type: actionType.EDIT_PRODUCTS,
        product
    }
}

/**
 * action update product
 */
export const actUpdateProductRequest = (product)=>{
    return dispatch => {
        return callApi(`product/${product.id}`, 'PUT', product).then(res=>{
            dispatch(actUpdateProduct(res.data));
        })
    }
}
export const actUpdateProduct = (product)=> {
    return {
        type: actionType.UPDATE_PRODUCTS,
        product
    }
}