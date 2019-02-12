import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { checkTriangleType } from './store/actions/triangle';
import configureStore from './store/configureStore';

const store = configureStore();


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

console.log( checkTriangleType( 1, 2, 3 ) );

it('checkTriangleType', () => {
    const triangleScalene = checkTriangleType( 1, 2, 3 );
    expect(triangleScalene).toEqual("scalene");

    const triangleIsosceles = checkTriangleType( 1, 2, 1 );
    expect(triangleIsosceles).toEqual("isosceles");
    
    const triangleEquilateral = checkTriangleType( 2, 2, 2 );
    expect(triangleEquilateral).toEqual("equilateral");
});
