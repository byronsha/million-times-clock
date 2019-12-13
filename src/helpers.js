const vertical = cell => ({ ...cell, degreesA: 0, degreesB: 180 });
const horizontal = cell => ({ ...cell, degreesA: 90, degreesB: 270 });
const topLeftCorner = cell => ({ ...cell, degreesA: 90, degreesB: 180 });
const topRightCorner = cell => ({ ...cell, degreesA: 180, degreesB: 270 });
const bottomLeftCorner = cell => ({ ...cell, degreesA: 0, degreesB: 90 });
const bottomRightCorner = cell => ({ ...cell, degreesA: 0, degreesB: 270 });
const up = cell => ({ ...cell, degreesA: 0, degreesB: 0 });
const down = cell => ({ ...cell, degreesA: 180, degreesB: 180 });
export const downLeft = cell => ({ ...cell, degreesA: 225, degreesB: 225 });

const renderZero = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // top border
  if (rowNumber === 1) {
    if (columnNumber === startColumn) {
      return topLeftCorner(cell);
    }
    if (columnNumber === startColumn + 1) {
      return horizontal(cell);
    }
    if (columnNumber === startColumn + 2) {
      return topRightCorner(cell);
    }
  }
  // bottom border
  if (rowNumber === 6) {
    if (columnNumber === startColumn) {
      return bottomLeftCorner(cell);
    }
    if (columnNumber === startColumn + 1) {
      return horizontal(cell);
    }
    if (columnNumber === startColumn + 2) {
      return bottomRightCorner(cell);
    }
  }
  // left border
  if (columnNumber === startColumn) {
    return vertical(cell);
  }
  // line in middle
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 2) {
      return down(cell);
    }
    if (rowNumber === 5) {
      return up(cell);
    }
    return vertical(cell);
  }
  // right border
  if (columnNumber === startColumn + 2) {
    return vertical(cell);
  }

  return cell;
};

const renderOne = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    return downLeft(cell);
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 1) {
      return topLeftCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomLeftCorner(cell);
    }
    return vertical(cell);
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};

const renderTwo = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    if ([1, 3].includes(rowNumber)) {
      return topLeftCorner(cell);
    }
    if ([2, 6].includes(rowNumber)) {
      return bottomLeftCorner(cell);
    }
    return vertical(cell);
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 2) {
      return topRightCorner(cell);
    }
    if (rowNumber === 3) {
      return bottomRightCorner(cell);
    }
    if (rowNumber === 4) {
      return topLeftCorner(cell);
    }
    if (rowNumber === 5) {
      return bottomLeftCorner(cell);
    }
    return horizontal(cell);
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 4) {
      return bottomRightCorner(cell);
    }
    if (rowNumber === 5) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};

const renderThree = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    if ([1, 3, 5].includes(rowNumber)) {
      return topLeftCorner(cell);
    }
    if ([2, 4, 6].includes(rowNumber)) {
      return bottomLeftCorner(cell);
    }
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if ([3, 5].includes(rowNumber)) {
      return bottomRightCorner(cell);
    }
    if ([2, 4].includes(rowNumber)) {
      return topRightCorner(cell);
    }
    return horizontal(cell);
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};

const renderFour = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    if (rowNumber === 1) {
      return topLeftCorner(cell);
    }
    if ([2, 3].includes(rowNumber)) {
      return vertical(cell);
    }
    if (rowNumber === 4) {
      return bottomLeftCorner(cell);
    }
    return downLeft(cell);
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 2) {
      return vertical(cell);
    }
    if (rowNumber === 3) {
      return up(cell);
    }
    if (rowNumber === 4) {
      return topRightCorner(cell);
    }
    if (rowNumber === 5) {
      return vertical(cell);
    }
    if (rowNumber === 6) {
      return bottomLeftCorner(cell);
    }
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};

const renderFive = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    if ([1, 5].includes(rowNumber)) {
      return topLeftCorner(cell);
    }
    if ([4, 6].includes(rowNumber)) {
      return bottomLeftCorner(cell);
    }
    return vertical(cell);
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 2) {
      return topLeftCorner(cell);
    }
    if (rowNumber === 3) {
      return bottomLeftCorner(cell);
    }
    if (rowNumber === 4) {
      return topRightCorner(cell);
    }
    if (rowNumber === 5) {
      return bottomRightCorner(cell);
    }
    return horizontal(cell);
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 2) {
      return bottomRightCorner(cell);
    }
    if (rowNumber === 3) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};

const renderSix = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    if (rowNumber === 1) {
      return topLeftCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomLeftCorner(cell);
    }
    return vertical(cell);
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 3) {
      return bottomLeftCorner(cell);
    }
    if (rowNumber === 4) {
      return down(cell);
    }
    if (rowNumber === 5) {
      return up(cell);
    }
    if (rowNumber === 6) {
      return horizontal(cell);
    }
    return vertical(cell);
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if ([1, 2].includes(rowNumber)) {
      return downLeft(cell);
    }
    if (rowNumber === 3) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};
const renderSeven = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    if (rowNumber === 1) {
      return topLeftCorner(cell);
    }
    if (rowNumber === 2) {
      return bottomLeftCorner(cell);
    }
    return downLeft(cell);
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 1) {
      return horizontal(cell);
    }
    if (rowNumber === 2) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomLeftCorner(cell);
    }
    return vertical(cell);
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};
const renderEight = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    if (rowNumber === 1) {
      return topLeftCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomLeftCorner(cell);
    }
    return vertical(cell);
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 1) {
      return horizontal(cell);
    }
    if (rowNumber === 2) {
      return down(cell);
    }
    if (rowNumber === 3) {
      return up(cell);
    }
    if (rowNumber === 4) {
      return down(cell);
    }
    if (rowNumber === 5) {
      return up(cell);
    }
    if (rowNumber === 6) {
      return horizontal(cell);
    }
    return vertical(cell);
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};
const renderNine = (startColumn, endColumn, cell) => {
  const { rowNumber, columnNumber } = cell;
  // column 1
  if (columnNumber === startColumn) {
    if (rowNumber === 1) {
      return topLeftCorner(cell);
    }
    if ([2, 3].includes(rowNumber)) {
      return vertical(cell);
    }
    if (rowNumber === 4) {
      return bottomLeftCorner(cell);
    }
    return downLeft(cell);
  }
  // column 2
  if (columnNumber === startColumn + 1) {
    if (rowNumber === 1) {
      return horizontal(cell);
    }
    if (rowNumber === 2) {
      return down(cell);
    }
    if (rowNumber === 3) {
      return up(cell);
    }
    if (rowNumber === 4) {
      return topRightCorner(cell);
    }
    if (rowNumber === 5) {
      return vertical(cell);
    }
    if (rowNumber === 6) {
      return bottomLeftCorner(cell);
    }
    return vertical(cell);
  }
  // column 3
  if (columnNumber === startColumn + 2) {
    if (rowNumber === 1) {
      return topRightCorner(cell);
    }
    if (rowNumber === 6) {
      return bottomRightCorner(cell);
    }
    return vertical(cell);
  }

  return cell;
};

const renderColon = cell => {
  const { rowNumber } = cell;

  if (rowNumber === 2) {
    return down(cell);
  }
  if (rowNumber === 3) {
    return up(cell);
  }
  if (rowNumber === 4) {
    return down(cell);
  }
  if (rowNumber === 5) {
    return up(cell);
  }

  return downLeft(cell);
};

export const renderNumber = (number, ...args) => {
  const cell = args[2];
  if (!cell) return;

  const { columnNumber } = cell;
  if ([0, 14].includes(columnNumber)) {
    return downLeft(cell);
  }
  if (columnNumber === 7) {
    return renderColon(cell);
  }

  switch (number) {
    case 0:
      return renderZero(...args);
    case 1:
      return renderOne(...args);
    case 2:
      return renderTwo(...args);
    case 3:
      return renderThree(...args);
    case 4:
      return renderFour(...args);
    case 5:
      return renderFive(...args);
    case 6:
      return renderSix(...args);
    case 7:
      return renderSeven(...args);
    case 8:
      return renderEight(...args);
    case 9:
      return renderNine(...args);
    default:
      return cell;
  }
};

export const initializeGrid = () => {
  const rows = Array.from(Array(8).keys());
  const columns = Array.from(Array(15).keys());

  return rows.map(rowNumber =>
    columns.map(columnNumber => ({
      id: `${rowNumber}${columnNumber}`,
      rowNumber,
      columnNumber,
      degreesA: 0,
      degreesB: 0
    }))
  );
};
