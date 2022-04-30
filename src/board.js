import React from 'react';
import './index.css';

function Square(props) {
  return (
    <button
      className={
        props.isHighlight ? "square highlight" : "square"
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
        isHighlight={this.props.winnerLine ? this.props.winnerLine.includes(i) : false}
      />
    );
  }

  renderBoard(n) {
    const board = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(
          this.renderSquare(i * n + j)
        )
      }
      board.push(
        <div className="board-row" key={i}>
          {row}
        </div>
      );
    };
    return (
      <div>
        {board}
      </div>
    );
  }

  render() {
    return this.renderBoard(3);
  }
}
