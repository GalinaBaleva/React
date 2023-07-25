import { useState } from "react";
import Board from "./commponents/Board/Board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    function jumpTo(nextMove) {
        const newHistory = history.slice(0, nextMove + 1);
        setHistory(newHistory);
        setCurrentMove(nextMove);
    };

    const moves = history.map((squares, move) => {
        let desctiption;

        if (move > 0) {
            desctiption = 'Go to move #' + move;
        } else {
            desctiption = 'Go to game start';
        };

        if(history.length-1 === move && move > 0){
            desctiption = 'You are at move #' + move
        };

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desctiption}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
};