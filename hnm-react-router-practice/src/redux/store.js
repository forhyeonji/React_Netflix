import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducer/index"
// rootReducer는 여기서 임시로 지정한 이름




let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;