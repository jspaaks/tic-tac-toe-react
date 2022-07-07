import React from 'react';
import { render } from '@testing-library/react';
import { Game } from 'game';

describe('Game', () => {
    test('should render', () => {
        render(<Game />);
    });
});
