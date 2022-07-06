import React from 'react';
import { Square } from 'square'
import { SquaresType, NextPlayerType } from 'types'
import { calculateWinner } from 'calculate-winner'


type PropsType = {
    squares: SquaresType
    nextPlayer: NextPlayerType
    clickHandler: (i: number) => void
}
type StateType = {}

export class Board extends React.Component<PropsType, StateType>{

    renderSquare(i: number) {

        return <Square
            value={ this.props.squares[i] }
            clickHandler={ () => this.props.clickHandler(i) }
        />;
    }
    
    render() {
        const winner = calculateWinner(this.props.squares)
        const boardIsFull = this.props.squares.every(square => square === 'X' || square === 'O');
        let msg;
        if (winner === 'X' || winner === 'O') {
            msg = `${ winner } wins!`
        } else if (boardIsFull) {
            msg = 'No more moves';
        } else {
            msg = `Next player: ${ this.props.nextPlayer }`
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
