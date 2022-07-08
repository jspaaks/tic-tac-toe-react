import React from 'react';
import { Square } from 'square';
import { SquaresType } from 'types';

type PropsType = {
    squares: SquaresType;
    clickHandler: (i: number) => void;
};

export const Board = (props: PropsType) => {
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
    return <div>{rows}</div>;
};
