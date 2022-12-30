import React, { Component } from 'react'
import '../styles/Button.css';
export class Button extends Component {
    render() {
        return (
          <>
              <button className={`bt ${this.props}`}>{this.props.text}</button>
          </>
      )
    }
  }
  export default Button;
  Button.defaultProps = {
      text: 'Mi botón',
      class: 'solid'
  }
