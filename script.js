const Gameboard = (() => {
    const gameboard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    for (i = 0; i <= 8; i++) {
        const square = document.getElementById(`${i}`);
        square.textContent = gameboard[i];
    }

    const playerFactory = (name, mark, ai, turn) => {
        return {name, mark, ai, turn};
    }

    const player1 = playerFactory('player 1', 'X', false, true)
    const player2 = playerFactory('player 2', 'O', false, true)

    const winConditions = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];

    let turns = 0;
})();

const player = () => {

}
