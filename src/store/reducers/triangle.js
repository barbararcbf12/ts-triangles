import { CLASSIFY_TRIANGLE } from '../actions/actionsType';

const initialState = {
    triangleType: ""
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {

        case CLASSIFY_TRIANGLE: 
            return {
                ...state,
                triangleType: action.triangleType
            };

        default:
            return state;
    }
};

export default reducer;