import {createStore} from 'redux';
import RootReducer from './Root-Reducer';
import { persistStore } from 'redux-persist';

export const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

export const persistor = persistStore(store);