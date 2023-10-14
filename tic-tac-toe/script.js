let currentPlayer = 'X' || 'O';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
  if (board[index] === '' && !checkWinner()) {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;

    if (checkWinner()) {
      let winner = currentPlayer === 'O' ? 'O' : 'X';
      alert('Player ' + winner + ' wins!');
    } else if (board.indexOf('') === -1) {
      alert('It\'s a draw!');
    } else {
      currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  const cells = document.getElementsByClassName('cell');

  for (let cell of cells) {
    cell.innerText = '';
  }
}
