import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import homeReducer from './homeReducer';

const Reducer = combineReducers({ userReducer, homeReducer, });

export default Reducer;