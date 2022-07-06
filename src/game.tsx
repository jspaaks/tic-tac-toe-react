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

    clickHandler (iSquare: number) {
        const latest = getLatest(this.state)
        const winner = calculateWinner(latest.squares)
        if (winner === 'X' || winner === 'O') {
            console.log('We already have a winner')
            return
        }
        if (latest.squares[iSquare] === 'X' || latest.squares[iSquare] === 'O') {
            console.log('Can\'t overwrite a previous move')
            return
        }
        const squares = [...latest.squares];
        squares[iSquare] = latest.player;
        const player = latest.player === 'X' ? 'O' : 'X';
        this.setState({
            history: this.state.history.concat({ squares, player })
        })
        return
    }

    restoreStateFromHistory (iMove: number) {
        this.setState({
            history: this.state.history.slice(0, iMove + 1)
        })
    }

    render() {
        const latest = getLatest(this.state);
        const moves = this.state.history.slice(0,-1).map((state, iMove) => {
            const msg = iMove === 0 ? 'Reset' : `Restore board to state after ${iMove} moves`
            return (
                <li key={iMove}>
                    <button onClick={() => this.restoreStateFromHistory(iMove)}>{msg}</button>
                </li>
            )
        })
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
                <ol style={{listStyle: 'none'}}> { moves } </ol>
                </div>
            </div>
        );
    }
}
