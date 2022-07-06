import React from "react";

type PropsType = {
    clickHandler: any;
    value: string;
}

export const Square = (props: PropsType) => {
    return (
        <button
            className="square"
            onClick={ props.clickHandler }
        >
            {props.value}
        </button>
    );
}