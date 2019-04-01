(function() {
  'use strict';

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');

  let startTime;
  let timeLeft;
  let timeToCountDown = 4 * 1000; //4秒

  function countDown() {
    setTimeout(function() {
      // let elapsedTime = Date.now() - startTime;
      // timeLeft = timeToCountDown - elapsedTime;
      timeLeft = timeToCountDown - (Date.now() - startTime);
      console.log(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click', function() {
    startTime = Date.now();
    countDown();
  });
})();
