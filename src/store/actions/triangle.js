import { CLASSIFY_TRIANGLE } from './actionsType';

import configureStore from '../configureStore';

const store = configureStore();

export const classifyTriangle = (a, b, c) => {
    return (dispatch) => {
    // return dispatch => {
        // const token = getState().auth.token;
        if (a === b && b === c) {
            dispatch(setTriangleType("equilateral"));
            // return "equilateral"
        } 
        else if (a === b || b === c || a === c) {
            dispatch(setTriangleType("isosceles"));
            // return "isosceles"
        } 
        else {
            dispatch(setTriangleType("scalene"));
            // return "scalene"
        }
    }
};

export const setTriangleType = type => {
    store.dispatch({
        type: CLASSIFY_TRIANGLE,
        triangleType: type
    });
};


