import * as ActionTypes from '../constants/actionType';
const InitialState = {}
const ItemEditting  = (state = InitialState, action) => {
    switch (action.type) {
        case ActionTypes.EDIT_PRODUCTS:
            return action.product;
            break;
        default:
            return state;
            break;
    }
}
export default ItemEditting