import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { Game } from 'game';

let game: any;
beforeEach(() => {
    game = render(<Game />);
});

describe('Game', () => {
    const checkMove = (player: string, ariaLabel: string, nextPlayer: string) => {
        const square = game.getByRole('button', { name: ariaLabel });
        fireEvent.click(square);
        expect(square.textContent).toBe(player);
        const msg = game.getByRole('region', { name: 'message' });
        expect(msg.textContent).toBe(`Next player: ${nextPlayer}`);
    };

    test('simulate a short game where X wins', () => {
        checkMove('X', 'top-left square', 'O');
        checkMove('O', 'top-center square', 'X');
        checkMove('X', 'middle-left square', 'O');
        checkMove('O', 'middle-center square', 'X');
        const square = game.getByRole('button', { name: 'bottom-left square' });
        fireEvent.click(square);
        expect(square.textContent).toBe('X');
        const msg = game.getByRole('region', { name: 'message' });
        expect(msg.textContent).toBe('X wins!');
    });

    test('simulate a short game where O wins', () => {
        checkMove('X', 'top-left square', 'O');
        checkMove('O', 'top-center square', 'X');
        checkMove('X', 'middle-left square', 'O');
        checkMove('O', 'middle-center square', 'X');
        checkMove('X', 'top-right square', 'O');
        const square = game.getByRole('button', { name: 'bottom-center square' });
        fireEvent.click(square);
        expect(square.textContent).toBe('O');
        const msg = game.getByRole('region', { name: 'message' });
        expect(msg.textContent).toBe('O wins!');
    });

    test('simulate a game where no one wins', () => {
        checkMove('X', 'top-left square', 'O');
        checkMove('O', 'top-center square', 'X');
        checkMove('X', 'middle-left square', 'O');
        checkMove('O', 'middle-center square', 'X');
        checkMove('X', 'bottom-center square', 'O');
        checkMove('O', 'bottom-left square', 'X');
        checkMove('X', 'top-right square', 'O');
        checkMove('O', 'middle-right square', 'X');
        const square = game.getByRole('button', { name: 'bottom-right square' });
        fireEvent.click(square);
        expect(square.textContent).toBe('X');
        const msg = game.getByRole('region', { name: 'message' });
        expect(msg.textContent).toBe('No more moves');
    });
});
