$(function() {
  var turn = 0;

  function checkWin(letter) {
    if ($('#1').text() === letter && $('#2').text() === letter && $('#3').text() === letter) {
      alert('WINNER');
    } else if ($('#1').text() === letter && $('#4').text() === letter && $('#7').text() === letter) {
        alert('WINNER');
    } else if ($('#4').text() === letter && $('#5').text() === letter && $('#6').text() === letter) {
        alert('WINNER');
    } else if ($('#7').text() === letter && $('#8').text() === letter && $('#9').text() === letter) {
        alert('WINNER');
    } else if ($('#2').text() === letter && $('#5').text() === letter && $('#8').text() === letter) {
        alert('WINNER');
    } else if ($('#7').text() === letter && $('#8').text() === letter && $('#9').text() === letter) {
        alert('WINNER');
    } else if ($('#3').text() === letter && $('#6').text() === letter && $('#9').text() === letter) {
        alert('WINNER');
    } else if ($('#1').text() === letter && $('#5').text() === letter && $('#9').text() === letter) {
        alert('WINNER');
    } else if ($('#3').text() === letter && $('#5').text() === letter && $('#7').text() === letter) {
        alert('WINNER');
      }
  }

  $('.square').on('click', function() {

    var self = $(this);

    if ( self.text() === '') {
      if ( turn % 2 === 0 ) {
        self.text("X");
      } else {
        self.text("O");
      }

      turn++;
    } else {
      alert("I'm sorry, Dave...");
    }
    checkWin(self.text())

  });
});
