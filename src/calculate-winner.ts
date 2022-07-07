import { SquaresType } from 'types';

export const calculateWinner = (squares: SquaresType) => {
    const getLineValues = (line: [number, number, number]) => {
        const [a, b, c] = squares.filter((_, index: number) => line.includes(index));
        return a !== null && a === b && b === c ? a : null;
    };
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return lines.map(getLineValues).filter(elem => elem !== null)[0];
};
