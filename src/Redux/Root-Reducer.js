import {combineReducers} from 'redux';
import userReducer from './User/reducer';
import cartReducer from './Cart/reducer';
export default combineReducers({
    user : userReducer,
    cart : cartReducer
})