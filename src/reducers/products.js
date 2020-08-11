import * as typeAction from "./../constants/actionType";
var initialState = [];
let findIndex = (products, id) => {
  let result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};
const products = (state = initialState, action) => {
  var { id, product } = action;
  let index = -1;
  switch (action.type) {
    case typeAction.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
      break;
    case typeAction.DELETE_PRODUCTS:
      
      index = findIndex(state, id);
      console.log(index);
      if (index !== -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return [...state];
      break;
    case typeAction.ADD_PRODUCTS:
      state.push(action.product);
      return [...state];
    case typeAction.UPDATE_PRODUCTS:
      index = findIndex(state, product.id);
      state[index] = product;
      return [...state];
    default:
      return [...state];
      break;
  }
};
export default products;
