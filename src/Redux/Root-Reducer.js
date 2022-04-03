import {combineReducers} from 'redux';
import userReducer from './User/reducer';
import cartReducer from './Cart/reducer';
import categoryReducer from './Categories/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user : userReducer,
    cart : cartReducer,
    category : categoryReducer
})

export default persistReducer(persistConfig, rootReducer)