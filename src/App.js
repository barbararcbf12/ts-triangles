import React, { Component } from 'react';
import { connect } from 'react-redux';
import { classifyTriangle } from './store/actions/index'
import './App.css';

import placeholder from './assets/images/placeholder.png';
import equilateral from './assets/images/equilateral.png';
import isosceles from './assets/images/isosceles.png';
import scalene from './assets/images/scalene.png';

class App extends Component {

  state = {
    sideA: '',
    sideB: '',
    sideC: '',
    // triangleType: ''
  }

  validate(sideA, sideB, sideC) {
    // true means invalid, so our conditions got reversed
    return {
      sideA: sideA.length === 0,
      sideB: sideB.length === 0,
      sideC: sideC.length === 0
    };
  }

  updateInputValue = evt => {
    if (!isNaN(evt.target.value) && evt.target.value > 0 ) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
    else{
      alert("Input invalid!");
      evt.target.value.replace(/[^1-9\.]/g,'')
    }
  }

  updateTriangleType(type) {
    this.setState(prevState => {
      return {
        ...prevState.triangleType,
        triangleType: type
      }
    });
  }

  checkTriangleType = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }

    // this.props.onClassifyTriangle(
    //   this.state.sideA, 
    //   this.state.sideB, 
    //   this.state.sideC
    // );
    // evt.preventDefault();
    // this.updateTriangleType(this.props.type);

    if (this.state.sideA !== "" && this.state.sideB !== "" && this.state.sideC !== ""){
      if (this.state.sideA === this.state.sideB && this.state.sideB === this.state.sideC) {
        evt.preventDefault();
        this.updateTriangleType("equilateral");
      } 
      else if (this.state.sideA === this.state.sideB || this.state.sideB === this.state.sideC || this.state.sideA === this.state.sideC) {
        evt.preventDefault();
        this.updateTriangleType("isosceles");
      } 
      else {
        evt.preventDefault();
        this.updateTriangleType("scalene");
      }
    }
  }

  canBeSubmitted() {
    const errors = this.validate(this.state.sideA, this.state.sideB, this.state.sideC);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    let triangle = placeholder;

    if (this.state.triangleType === 'equilateral') {triangle = equilateral};
    if (this.state.triangleType === 'isosceles') {triangle = isosceles};
    if (this.state.triangleType === 'scalene') {triangle = scalene};

    const errors = this.validate(this.state.sideA, this.state.sideB, this.state.sideC);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
        <div className="container">
        <h1>Type lengths of the sides of your triangle</h1>
        <form onSubmit={this.checkTriangleType} className="App">
              <div>
                <img src={triangle} alt="Triangle" />
              </div>
              <div className="column"> 
                <label>Length side A: 
                  <input 
                    className={errors.sideA ? "error" : ""} 
                    name="sideA" 
                    value={this.state.sideA} 
                    onChange={this.updateInputValue} 
                    placeholder="Enter length"
                  />
                </label>
                <label>Length side B: 
                  <input 
                    className={errors.sideB ? "error" : ""} 
                    name="sideB" 
                    value={this.state.sideB} 
                    onChange={this.updateInputValue}  
                    placeholder="Enter length"
                  />
                </label>
                <label>Length side C: 
                  <input 
                    className={errors.sideC ? "error" : ""} 
                    name="sideC" 
                    value={this.state.sideC} 
                    onChange={this.updateInputValue}
                    placeholder="Enter length"
                    />
                </label>
                <button disabled={isDisabled} > Check triangle's type</button>
            </div>
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    type: state.triangleType
  };
};

const mapDispatchToProps = dispatch => {
    return {
        onClassifyTriangle: (a, b, c) => dispatch(classifyTriangle(a,b,c)) //this.state.sideA, this.state.sideB, this.state.sideC))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
