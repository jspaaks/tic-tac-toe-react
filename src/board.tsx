import React from 'react';
import { Square } from 'square'
import { SquaresType, PlayerType } from 'types'
import { calculateWinner } from 'calculate-winner'

const renderSquare = (props: PropsType, i: number) => {
    return <Square
        value={ props.squares[i] }
        clickHandler={ () => props.clickHandler(i) }
    />;
}

type PropsType = {
    squares: SquaresType
    player: PlayerType
    clickHandler: (i: number) => void
}

export const Board = (props: PropsType) => {
    const winner = calculateWinner(props.squares)
    const boardIsFull = props.squares.every(square => square === 'X' || square === 'O');
    let msg;
    if (winner === 'X' || winner === 'O') {
        msg = `${ winner } wins!`
    } else if (boardIsFull) {
        msg = 'No more moves';
    } else {
        msg = `Next player: ${ props.player }`
    }
    return (
        <div>
            <div className="status">
                { msg }
            </div>
            <div className="board-row">
                { renderSquare(props, 0) }
                { renderSquare(props, 1) }
                { renderSquare(props, 2) }
            </div>
            <div className="board-row">
                { renderSquare(props, 3) }
                { renderSquare(props, 4) }
                { renderSquare(props, 5) }
            </div>
            <div className="board-row">
                { renderSquare(props, 6) }
                { renderSquare(props, 7) }
                { renderSquare(props, 8) }
            </div>
        </div>
    );
}

