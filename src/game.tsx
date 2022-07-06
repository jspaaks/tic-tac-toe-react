import React from 'react';
import { Board } from 'board';
import { SquaresType, PlayerType } from 'types'
import { calculateWinner } from 'calculate-winner'


const getLatest = (state: StateType) => {
    const iMove = state.history.length;
    return state.history[iMove - 1];
}

type PropsType = {}

type StateType = {
    history: Array<{
        squares: SquaresType
        player: PlayerType
    }>
}

export class Game extends React.Component<PropsType, StateType > {

    constructor(props: PropsType) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                player: 'X'
            }]
        }
    }

    clickHandler (i: number) {
        console.log(`clicked square ${i}`);
        console.info(this.state.history);
        const latest = getLatest(this.state)
        const winner = calculateWinner(latest.squares)
        if (winner === 'X' || winner === 'O') {
            console.log('We already have a winner')
            return
        }
        if (latest.squares[i] === 'X' || latest.squares[i] === 'O') {
            console.log('Can\'t overwrite a previous move')
            return
        }
        const squares = [...latest.squares];
        squares[i] = latest.player;
        const player = latest.player === 'X' ? 'O' : 'X';
        this.setState({
            history: this.state.history.concat({ squares, player })
        })
        return
    }

    render() {
        const latest = getLatest(this.state);
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        player={ latest.player }
                        squares={ latest.squares }
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
