import React from 'react';
import { Board } from 'board';
import { SquaresType, NextPlayerType } from 'types'
import { calculateWinner } from 'calculate-winner'


type PropsType = {}

type StateType = {
    squares: SquaresType,
    nextPlayer: NextPlayerType
}

export class Game extends React.Component<PropsType, StateType > {

    constructor(props: PropsType) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            nextPlayer: 'X'
        }
    }

    clickHandler (i: number) {
        console.log(`clicked square ${i}`);
        const winner = calculateWinner(this.state.squares)
        if (winner === 'X' || winner === 'O') {
            console.log('We already have a winner')
            return
        }
        if (this.state.squares[i] === 'X' || this.state.squares[i] === 'O') {
            console.log('Can\'t overwrite a previous move')
            return
        }
        const squares = [...this.state.squares];
        squares[i] = this.state.nextPlayer;
        const nextPlayer = this.state.nextPlayer === 'X' ? 'O' : 'X';
        this.setState({
            squares,
            nextPlayer
        })
        return
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        nextPlayer={ this.state.nextPlayer }
                        squares={ this.state.squares }
                        clickHandler={ (i: number) => this.clickHandler(i) }
                    />
                </div>
                <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
