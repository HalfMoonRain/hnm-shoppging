import { combineReducers } from "redux";
import authenticatReducer from "./autheticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authenticatReducer,
  product: productReducer,
});
