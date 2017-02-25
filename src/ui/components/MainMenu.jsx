import React, { PropTypes } from 'react';
import classnames from 'classnames';


const Component = ({ ui, resetGame }) => (
  <div className="MainMenu">
    <div className="reset" onClick={resetGame}>
      <svg fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
      </svg>
    </div>
  </div>
  );


Component.propTypes = {
  resetGame: PropTypes.func,
  ui: PropTypes.object,
};


export default Component;
