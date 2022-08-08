let tic_tac_toe_one = new TicTacToe(
    '.first_game .board',
    '.first_game .reset',
    '.first_game .message'
);

tic_tac_toe_one.displayMessage('Test');

let tic_tac_toe_second = new TicTacToe(
    '.second_game .board',
    '.second_game .reset',
    '.second_game .message'
);
