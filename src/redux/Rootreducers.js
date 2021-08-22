import { combineReducers } from "redux";

import chatReducer from "./chats/Reducer";


const RootReducers = combineReducers({
 
  chatReducer,
 
});

export default RootReducers;
