$(document).ready(function () {
  window.keysPressed = {};

  runEntireGame();

  var videosFromInput = $('#raw-videos').val();
  var allVideos = jQuery.parseJSON(videosFromInput);

  gameLoop(allVideos);
  $("body").css({
    "background": "#3e404"
  });
});

function runEntireGame() {
  var correct;
  var throwType;
  var gameInterval;
  var numberOfMilliseconds;
  var totalVideoTime;

  document.addEventListener('keydown', function (e) {
    window.keysPressed[e.keyCode] = true;
    if (window.keysPressed['37']) {
      $("#button1").addClass("active");
    }
    if (window.keysPressed['38']) {
      $("#button2").addClass("active");
    }
  }, false);
  document.addEventListener('keyup', function (e) {
    window.keysPressed[e.keyCode] = false;
    if (!window.keysPressed['37']) {
      $("#button1").removeClass("active");
    }
    if (!window.keysPressed['38']) {
      $("#button2").removeClass("active");
    }
  }, false);

  var allLoaded = false
  var firstLoaded, secondLoaded, thirdLoaded;
  $("#video1")[0].addEventListener('loadeddata', function () {
    firstLoaded = true;
    if (secondLoaded && thirdLoaded) {
      playAfterLoading();
    }
  }, false);
  $("#video2")[0].addEventListener('loadeddata', function () {
    secondLoaded = true;
    if (firstLoaded && thirdLoaded) {
      playAfterLoading();
    }
  }, false);
  $("#video3")[0].addEventListener('loadeddata', function () {
    thirdLoaded = true;
    if (firstLoaded && secondLoaded) {
      playAfterLoading();
    }
  }, false);

  $("#button1.the-button.plastic").mouseup(function () {
    window.keysPressed['37'] = true;
  });
  $("#button1").mousedown(function () {
    window.keysPressed['37'] = false;
  });
  $("#button1.the-button.plastic").on('touchstart', function () {
    window.keysPressed['37'] = true;
  });
  $("#button1").mousedown('touchend', function () {
    window.keysPressed['37'] = false;
  });


  $("#button2").mouseup(function () {
    window.keysPressed['38'] = true;
  });
  $("#button2").mousedown(function () {
    window.keysPressed['38'] = false;
  });
  $("#button2").mouseup('touchstart', function () {
    window.keysPressed['38'] = true;
  });
  $("#button2").mousedown('touchend', function () {
    window.keysPressed['38'] = false;
  });
}

function playVideo(videoSelector) {
  var playPromise = $(videoSelector)[0].play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
}

function playAfterLoading() {
  var videoSelector = "#video1";
  playVideo(videoSelector)
  
  gameInterval = setInterval(function () {
    throwCheckLoop();
  }, 1);

  setTimeout(function () {
    clearInterval(gameInterval);
    $("#video1").hide();
    if (correct) {
      var scoreHolder = $(".scoreHolder");
      var currentScore = parseInt(scoreHolder[0].innerHTML);
      scoreHolder[0].innerHTML = currentScore + 50;
      var currentWidth = scoreHolder.width();
      scoreHolder.css({
        'margin-left': -currentWidth / 2
      })
      $("#video2").show();
      $("#video2")[0].play();
    } else {
      $("#video3").show();
      $("#video3")[0].play();
    }
  }, numberOfMilliseconds);

  setTimeout(function () {
    gameLoop();
  }, totalVideoTime);
}

function throwCheckLoop() {
  switch (throwType) {
    case "1":
      if (window.keysPressed['38']) {
        clearInterval(gameInterval);
      } else if (window.keysPressed['37']) {
        correct = true;
      }
      break;
    case "2":
      if (window.keysPressed['37']) {
        clearInterval(gameInterval);
      } else if (window.keysPressed['38']) {
        correct = true;
      }
      break;
    case "P":
      if (window.keysPressed['37'] && window.keysPressed['38']) {
        correct = true;
        clearInterval(gameInterval);
      }
      break;
  }
}

function gameLoop(allVideos) {
  firstLoaded = false;
  secondLoaded = false;
  thirdLoaded = false;
  correct = false;
  var allMilliseconds = [];

  var randomNumber = randomIntegerInRange(0, allVideos.length / 3 - 1) * 3;
  var firstVideoName = "";
  for (var i = 0; i < 3; i++) {
    var currentVideo = allVideos[randomNumber + i];
    var videoName = currentVideo.video_name;
    if (i == 0) {
      firstVideoName = videoName;
    }
    var milliseconds = currentVideo.number_of_milliseconds;
    allMilliseconds.push(parseInt(milliseconds));
    currentVideoHolder = $("#video" + (i + 1));
    currentVideoHolder[0].src = "/videos/" + videoName;
    currentVideoHolder.data('data-number-of-milliseconds', milliseconds);
  }
  totalVideoTime = allMilliseconds[0] + Math.max(allMilliseconds[1], allMilliseconds[2]);

  var video1 = $("#video1");

  video1.show();
  numberOfMilliseconds = allMilliseconds[0];
  var video1 = $("#video1");

  throwType = firstVideoName.replace(/(\w{1}).*/, "$1");
  $("#video2, #video3").hide();
}

function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}