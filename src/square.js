import React from 'react';


export class Square extends React.Component {

    render() {

        return (
            <button
                className="square"
                onClick={ this.props.clickHandler }
            >
                {this.props.value}
            </button>
        );
    }
}
