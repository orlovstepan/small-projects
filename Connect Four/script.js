(function () {
  var currentPlayer = "player1";
  var playerOneWin = $(".playerOneWin");
  playerOneWin.hide();
  var playerTwoWin = $(".playerTwoWin");
  playerTwoWin.hide();

  var overlay = $(".overlay");

  console.log(overlay);

  function switchPlayers() {
    if (currentPlayer === "player1") {
      currentPlayer = "player2";
    } else {
      currentPlayer = "player1";
    }
  }

  $(".column").on("click", function (e) {
    var column = $(e.currentTarget);
    var slotsInCol = column.children();
    for (var i = slotsInCol.length - 1; i >= 0; i--) {
      if (
        !slotsInCol.eq(i).hasClass("player1") &&
        !slotsInCol.eq(i).hasClass("player2")
      ) {
        slotsInCol.eq(i).addClass(currentPlayer);
        break;
      }
    }
    if (i === -1) {
      return;
    }

    var slotsInRow = $(".row" + i);

    var handleFinishGame = function () {
      if (currentPlayer == "player1") {
        playerOneWin.show();
        $(".overlay").addClass("overlayOn");
      } else if (currentPlayer == "player2") {
        playerTwoWin.show();
        $(".overlay").addClass("overlayOn");
      }
    };

    if (checkForVictory(slotsInCol)) {
      console.log("Vertical Win!");
      handleFinishGame();
      return;
    } else if (checkForVictory(slotsInRow)) {
      handleFinishGame();
      console.log("Horizontal Win");
      return;
    } else if (checkForDiagonals(slots)) {
      handleFinishGame();
      console.log("Diagonal Win");
    }

    switchPlayers();
  });

  overlay.on("click", function () {
    window.location.reload();
  });

  var slots = $(".slot");

  var diagonals = [
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 14, 19, 24],
    [10, 15, 20, 25],
    [11, 16, 21, 26],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 20, 25, 30],
    [16, 21, 26, 31],
    [17, 22, 27, 32],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [21, 26, 31, 36],
    [22, 27, 32, 37],
    [23, 28, 33, 38],
  ];

  function checkForVictory(x) {
    var count = 0;
    for (var i = 0; i < x.length; i++) {
      if (x.eq(i).hasClass(currentPlayer)) {
        count++;

        if (count == 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
  }

  function checkForDiagonals(slot) {
    for (var i = 0; i < diagonals.length; i++) {
      var count = 0;
      var x = diagonals[i];
      for (var j = 0; j < diagonals[i].length; j++) {
        var y = x[j];
        if (slot.eq(y).hasClass(currentPlayer)) {
          count++;
          console.log(count);

          if (count == 4) {
            return true;
          }
        } else {
          count = 0;
        }
      }
    }
  }
})();
