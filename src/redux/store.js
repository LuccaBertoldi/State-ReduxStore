// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import statement
import productReducer from './reducers/productReducer'; // Adjust the path
import cartReducer from './reducers/cartReducer'; // Adjust the path
import userReducer from './reducers/userReducer';





const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;