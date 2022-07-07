import React from 'react';
import { render } from '@testing-library/react';
import { Board } from 'board';

describe('Board', () => {
    test('should render', () => {
        const squares = Array(9).fill(null);
        const player = 'X';
        const clickHandler = () => console.log('dummy handler');
        render(<Board squares={squares} player={player} clickHandler={clickHandler} />);
    });
});
