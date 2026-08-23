import GameState from "./GameState";

function GameOver({ gameState }) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
            break;
        case GameState.playerOWins:
            return <div className="game-over">O Wins</div>;
            break;
        case GameState.playerXWins:
            return <div className="game-over">X Wins</div>;
            break;
        case GameState.draw:
            return <div className="game-over">Draw</div>;
            break;
    }
}

export default GameOver;