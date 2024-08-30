import { combineReducers } from "redux";
import { productReducer, SelectedproductReducer } from "./ProductReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: SelectedproductReducer,
});
export default reducers;
