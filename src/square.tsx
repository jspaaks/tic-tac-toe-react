import React from 'react';

type PropsType = {
    clickHandler: any;
    ariaLabel: string;
    value: string;
};

export const Square = (props: PropsType) => {
    return (
        <button className="square" aria-label={props.ariaLabel} onClick={props.clickHandler}>
            {props.value}
        </button>
    );
};
