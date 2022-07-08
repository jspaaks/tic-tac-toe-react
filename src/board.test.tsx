import React from 'react';
import { render, screen } from '@testing-library/react';
import { Board } from 'board';
import { SquaresType } from 'types';

describe('Board', () => {
    let squares: SquaresType;
    beforeEach(() => {
        squares = Array(9).fill(null);
    });

    test('should render', () => {
        const clickHandler = () => console.log('dummy handler');
        render(<Board squares={squares} clickHandler={clickHandler} />);
    });
});
