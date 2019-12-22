import React from 'react';
// import IconArrowDown from './../Icons/IconArrowDown'
import './SlideButton.scss'

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span style={{animation:'none'}}>
      <h1>V</h1>
    </span>
  </button>
);

export default SlideButton;