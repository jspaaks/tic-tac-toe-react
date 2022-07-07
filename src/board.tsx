import React from 'react';
import { Square } from 'square';
import { SquaresType, PlayerType } from 'types';
import { calculateWinner } from 'calculate-winner';

type PropsType = {
    squares: SquaresType;
    player: PlayerType;
    clickHandler: (i: number) => void;
};

export const Board = (props: PropsType) => {
    const winner = calculateWinner(props.squares);
    const boardIsFull = props.squares.every(square => square === 'X' || square === 'O');
    let msg;
    if (winner === 'X' || winner === 'O') {
        msg = `${winner} wins!`;
    } else if (boardIsFull) {
        msg = 'No more moves';
    } else {
        msg = `Next player: ${props.player}`;
    }
    const nCols = 3;
    const rows = [0, 1, 2].map(iRow => {
        const cols = [0, 1, 2].map(iCol => {
            const iSquare = iCol + iRow * nCols;
            return (
                <Square
                    key={iCol}
                    value={props.squares[iSquare]}
                    clickHandler={() => props.clickHandler(iSquare)}
                />
            );
        });
        return (
            <div key={iRow} className="board-row">
                {cols}
            </div>
        );
    });
    return (
        <div>
            <div className="status">{msg}</div>
            {rows}
        </div>
    );
};
