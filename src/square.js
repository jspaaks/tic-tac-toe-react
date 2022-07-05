export const Square = (props) => {
    return (
        <button
            className="square"
            onClick={ props.clickHandler }
        >
            {props.value}
        </button>
    );
}
