import React from 'react';
import { render } from '@testing-library/react';
import { Square } from 'square';

describe('Square', () => {
    test('should render', () => {
        const clickHandler = () => {
            console.log('dummy click handler');
        };
        const ariaLabel = 'top-left square';
        const value = 'X';
        render(<Square clickHandler={clickHandler} ariaLabel={ariaLabel} value={value} />);
    });
});
