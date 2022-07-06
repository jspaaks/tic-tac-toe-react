import React from 'react';
import { Square } from 'square'

type SquaresType = Array<null|string>
type NextPlayerType = null|string
type StateType = {
    squares: SquaresType
    nextPlayer: NextPlayerType
}

const calculateWinner = (squares: SquaresType) => {
    const getLineValues = (line: [number, number, number]) => {
        const [a, b, c] = squares.filter((_, index: number) => line.includes(index));
        return a !== null && a === b && b === c ? a : null
    }
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    return lines.map(getLineValues).filter(elem => elem !== null)[0]
}

export class Board extends React.Component<{}, StateType>{

    constructor(props: {}) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            nextPlayer: 'X'
        }
    }

    renderSquare(i: number) {

        const clickHandler = (i: number) => {
            return () => {
                console.log(`clicked square ${i}`);
                const winner = calculateWinner(this.state.squares)
                if (winner === 'X' || winner === 'O') {
                    console.log('We already have a winner')
                    return
                }
                if (this.state.squares[i] === 'X' || this.state.squares[i] === 'O') {
                    console.log('Can\'t overwrite a previous move')
                    return
                }
                const squares = [...this.state.squares];
                squares[i] = this.state.nextPlayer;
                const nextPlayer = this.state.nextPlayer === 'X' ? 'O' : 'X';
                this.setState({
                    squares,
                    nextPlayer
                })
                return
            }
        }

        return <Square
            value={ this.state.squares[i] }
            clickHandler={ clickHandler(i) }
        />;
    }
    
    render() {
        const winner = calculateWinner(this.state.squares)
        const boardIsFull = this.state.squares.every(square => square === 'X' || square === 'O');
        let msg;
        if (winner === 'X' || winner === 'O') {
            msg = `${winner} wins!`
        } else if (boardIsFull) {
            msg = 'No more moves';
        } else {
            msg = `Next player: ${this.state.nextPlayer}`
        }
        return (
            <div>
                <div className="status">
                    { msg }
                </div>
                <div className="board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        );
    }
}
