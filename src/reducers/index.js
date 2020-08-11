import {combineReducers} from 'redux';
import products from './products';
import ItemEditting from './itemEditting'
let myReducer = combineReducers({
    products,
    ItemEditting

})
 export default myReducer;
