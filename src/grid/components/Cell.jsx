import React, { PropTypes } from 'react';


const Cell = ({ data, index, onCellEnter, onCellLeave, onCellClick, size }) => {
  let classNames = ['cell'];

  if (data.highlightedY) {
    classNames.push('highlight__y');
  }

  if (data.owner) {
    classNames = classNames.concat(['owned', `player-${data.owner}`]);
  }

  const cellProps = {
    className: classNames.join(' '),
    onMouseEnter: () => onCellEnter(index),
    onMouseLeave: () => onCellLeave(index),
    onClick: () => onCellClick(index),
    style: {
      width: size,
      height: size,
    },
  };

  const innerProps = {
    className: 'inner',
    style: {
      width: size - 2,
      height: size - 2,
    },
  };

  return (
    <div {...cellProps}>
      <div {...innerProps}>
        <span>{index}</span>
      </div>
    </div>);
};

Cell.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onCellEnter: PropTypes.func.isRequired,
  onCellLeave: PropTypes.func.isRequired,
  onCellClick: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};


export default Cell;
