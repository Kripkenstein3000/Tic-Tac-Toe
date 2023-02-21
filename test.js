var board = ['', '', '', '', '', '', '', '', ''];
var player = 'X';

function print_board() {
  for (var i = 0; i < 9; i++) {
    document.getElementById(i.toString()).innerHTML = board[i];
  }
}

function make_move(i) {
  if (board[i] != '') {
    alert("Invalid move. That space is already taken.");
    return;
  }
  board[i] = player;
  print_board();
  if (check_win()) {
    alert("Congratulations, Player " + player + " wins!");
    reset();
  } else if (check_tie()) {
    alert("It's a tie!");
    reset();
  } else {
    player = (player == 'X') ? 'O' : 'X';
  }
}

function check_win() {
  var win_positions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var i = 0; i < win_positions.length; i++) {
    var a = win_positions[i][0];
    var b = win_positions[i][1];
    var c = win_positions[i][2];
    if (board[a] != '' && board[a] == board[b] && board[b] == board[c]) {
      return true;
    }
  }
  return false;
}

function check_tie() {
  for (var i = 0; i < 9; i++) {
    if (board[i] == '') {
      return false;
    }
  }
  return true;
}

function reset() {
  board = ['', '', '', '', '', '', '', '', ''];
  player = 'X';
  print_board();
}

print_board();
