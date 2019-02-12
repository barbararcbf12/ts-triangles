import { CLASSIFY_TRIANGLE } from './actionsType';

export const checkTriangleType = (a,b,c) => {
    if (a === b && b === c) {
        return "equilateral";
    } 
    else if (a === b || b === c || a === c) {
        return "isosceles";
    } 
    else {
        return "scalene";
    }
}

export const classifyTriangle = (a, b, c) => {
    return (dispatch) => {
        dispatch(setTriangleType(checkTriangleType(a,b,c)));
    }
};

export const setTriangleType = (typ) => {
    console.log(typ);
    return {
        type: CLASSIFY_TRIANGLE,
        triangleType: typ
    };
};


