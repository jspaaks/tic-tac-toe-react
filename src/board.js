import React from 'react';
import { Square } from './square'

    
export class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    renderSquare(i) {

        const clickHandler = (i) => {
            return () => {
                console.log(`clicked square ${i}`);
                const squares = [...this.state.squares]
                squares[i] = 'X'
                this.setState({ squares })
            }
        }

        return <Square
            value={ this.state.squares[i] }
            clickHandler={ clickHandler(i) }
        />;
    }
    
    render() {
        const status = 'Next player: X';
        
        return (
            <div>
                <div className="status">
                    { status }
                </div>
                <div className="board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        );
    }
}
