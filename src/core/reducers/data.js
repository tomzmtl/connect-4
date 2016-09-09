
export default (state, action) => {
  switch (action.type) {
    case 'HIGHLIGHT_CELL':
      return state.data.map((cell) => {
        const hY = cell.x === state.data[action.index].x;
        const hX = cell.y === state.data[action.index].y;

        if (hX === cell.highlightedX && hY === cell.highlightedY) {
          return cell;
        }

        const newCell = {
          ...cell,
        };

        if (hX !== cell.highlightedX) {
          newCell.highlightedX = hX;
        }

        if (hY !== cell.highlightedY) {
          newCell.highlightedY = hY;
        }

        return newCell;
      });

    case 'UNHIGHLIGHT_CELL':
      return state.data.map((cell) => ({
        ...cell,
        highlightedX: false,
        highlightedY: false,
      }));


    default: return state.data;
  }
};