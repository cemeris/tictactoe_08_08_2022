
class TicTacToe {
    constructor(board_selector, reset_selector, message_el_selector) {
        this.symbol = 'x';

        this.board = document.querySelector(board_selector);
        this.reset_btn = document.querySelector(reset_selector);
        this.message_element = document.querySelector(message_el_selector);

        this.win_combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6]
        ];

        const obj = this;

        this.board.onclick = function (event) {
            event.preventDefault();
            if (event.target.tagName == 'DIV') return;
            let cell = event.target;
            if (cell.textContent != '') return;

            cell.textContent = obj.symbol;
            if (obj.#checkWinner()) {
                obj.displayMessage('Winner is ' + obj.symbol + '!');
            }
            obj.symbol = (obj.symbol == 'x') ? 'o' : 'x';
        }

        this.reset_btn.onclick = function (event) {
            event.preventDefault();
            obj.#resetHandler();
        };
    }

    #resetHandler() {
        for (let cell of this.board.children) {
            cell.textContent = '';
            this.symbol = 'x';
            this.displayMessage('');
        }
    }

    #checkWinner() {
        for (let cords of this.win_combinations) {
            if (
                this.board.children[cords[0]].textContent == this.symbol &&
                this.board.children[cords[1]].textContent == this.symbol &&
                this.board.children[cords[2]].textContent == this.symbol
            ) {
                return true;
            }
        }
        return false;
    }

    displayMessage(message) {
        this.message_element.textContent = message;
    }
}