import { createStore, combineReducers } from 'redux';
import triangleReducer from "./reducers/triangle";

const rootReducer = combineReducers({
    triangleType: triangleReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;