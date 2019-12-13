import React from "react";
import ReactDOM from "react-dom";
import { Box, Flex } from "@chakra-ui/core";

import Clock from "./Clock";
import { renderNumber, downLeft } from "./helpers";

const initializeGrid = () => {
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

const App = () => {
  const [grid, setGrid] = React.useState(initializeGrid());
  const [randomizeInterval, setRandomizeInterval] = React.useState(null);

  const animate = () => {
    const newGrid = grid.map(row =>
      row.map(cell => ({
        ...cell,
        degreesA: 90 / (cell.rowNumber + 1),
        degreesB: 180 / (cell.columnNumber + 1)
      }))
    );
    setGrid(newGrid);
  };

  const randomizeNumbers = () => {
    clearInterval(randomizeInterval);

    setTime(Math.floor(Math.random() * 10000));

    setRandomizeInterval(
      setInterval(() => {
        setTime(Math.floor(Math.random() * 10000));
      }, 7500)
    );
  };

  const setDigit = (startColumn, endColumn, number, gridToUpdate) => {
    const newGrid = (gridToUpdate || grid).map(row =>
      row.map(cell => {
        const { rowNumber } = cell;
        if (rowNumber >= 1 && rowNumber < 7) {
          if (number !== undefined) {
            return renderNumber(number, startColumn, endColumn, cell);
          }
        }
        return downLeft(cell);
      })
    );
    if (gridToUpdate) {
      return newGrid;
    }
    setGrid(newGrid);
  };

  const setDigit0 = (number, gridToUpdate) =>
    setDigit(1, 4, number, gridToUpdate);
  const setDigit1 = (number, gridToUpdate) =>
    setDigit(4, 7, number, gridToUpdate);
  const setDigit2 = (number, gridToUpdate) =>
    setDigit(8, 11, number, gridToUpdate);
  const setDigit3 = (number, gridToUpdate) =>
    setDigit(11, 14, number, gridToUpdate);

  const setTime = digits => {
    if (digits < 1000 || digits > 9999) return;

    const digitArray = digits
      .toString()
      .split("")
      .map(i => parseInt(i, 10));

    let newGrid = setDigit0(digitArray[0], grid);

    newGrid = setDigit1(digitArray[1], newGrid);
    newGrid = setDigit2(digitArray[2], newGrid);
    newGrid = setDigit3(digitArray[3], newGrid);

    setGrid(newGrid);
  };

  const reset = () => {
    setGrid(initializeGrid());
  };

  const handleChange = callback => e => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > -1 && value < 10) {
      callback(value);
    }
  };

  return (
    <Box>
      <Box mb={5}>
        {grid.map((row, index) => (
          <Flex key={index}>
            {row.map(({ id, degreesA, degreesB }) => (
              <Clock key={id} degreesA={degreesA} degreesB={degreesB} />
            ))}
          </Flex>
        ))}
      </Box>

      <span>Digit 0</span>
      <input type="number" min={0} max={9} onChange={handleChange(setDigit0)} />
      <br />

      <span>Digit 1</span>
      <input type="number" min={0} max={9} onChange={handleChange(setDigit1)} />
      <br />

      <span>Digit 2</span>
      <input type="number" min={0} max={9} onChange={handleChange(setDigit2)} />
      <br />

      <span>Digit 3</span>
      <input type="number" min={0} max={9} onChange={handleChange(setDigit3)} />
      <br />

      <button onClick={animate}>Animate</button>
      <br />
      <button onClick={randomizeNumbers}>Randomize</button>
      <br />
      <button onClick={reset}>Reset</button>
    </Box>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
