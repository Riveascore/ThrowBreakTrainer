var correct;
var throwType;
var gameInterval;
var keysPressed = {};
var numberOfMilliseconds;
var totalVideoTime;

document.addEventListener('keydown', function(e) {
	keysPressed[e.keyCode] = true;
	if(keysPressed['37']) { 
		$("#button1").addClass("active");
	}
	if(keysPressed['38']) { 
		$("#button2").addClass("active");
	}	
}, false);
document.addEventListener('keyup', function(e) {
	keysPressed[e.keyCode] = false;
	if(!keysPressed['37']) { 
		$("#button1").removeClass("active");
	}
	if(!keysPressed['38']) { 
		$("#button2").removeClass("active");
	}		
}, false);

var allLoaded = false
var firstLoaded, secondLoaded, thirdLoaded;
$("#video1")[0].addEventListener('loadeddata', function() {
   firstLoaded = true;
   if(secondLoaded && thirdLoaded) {
   		playAfterLoading();
   }
}, false);
$("#video2")[0].addEventListener('loadeddata', function() {
   secondLoaded = true;
   if(firstLoaded && thirdLoaded) {
   		playAfterLoading();
   }	   
}, false);	
$("#video3")[0].addEventListener('loadeddata', function() {
   thirdLoaded = true;
   if(firstLoaded && secondLoaded) {
   		playAfterLoading();
   }	   
}, false);

$("#button1.the-button.plastic").mouseup(function() {
	keysPressed['37'] = true;
});
$("#button1").mousedown(function() {
	keysPressed['37'] = false;
});
$("#button1.the-button.plastic").on('touchstart', function() {
	keysPressed['37'] = true;
});
$("#button1").mousedown('touchend', function() {
	keysPressed['37'] = false;
});


$("#button2").mouseup(function() {
	keysPressed['38'] = true;
});
$("#button2").mousedown(function() {
	keysPressed['38'] = false;
});
$("#button2").mouseup('touchstart', function() {
	keysPressed['38'] = true;
});
$("#button2").mousedown('touchend', function() {
	keysPressed['38'] = false;
});


var videosFromInput = $('#raw-videos').val();
var allVideos = jQuery.parseJSON('');

function playAfterLoading() {
	$("#video1")[0].play();
	gameInterval = setInterval(function() {
		throwCheckLoop();
	}, 1);

	setTimeout(function() {
		clearInterval(gameInterval);
		$("#video1").hide();
		if(correct) {
			var scoreHolder = $(".scoreHolder");
			var currentScore = parseInt(scoreHolder[0].innerHTML);
			scoreHolder[0].innerHTML = currentScore + 50;
			var currentWidth = scoreHolder.width();
			scoreHolder.css({
				'margin-left': -currentWidth/2
			})
			$("#video2").show();
			$("#video2")[0].play();
		}
		else {
			$("#video3").show();
			$("#video3")[0].play();
		}
	}, numberOfMilliseconds);

	setTimeout(function(){
		gameLoop();
	}, totalVideoTime);
}

function throwCheckLoop() {
	switch(throwType) {
		case "1":
			if(keysPressed['38']) {
				clearInterval(gameInterval);
			}
			else if(keysPressed['37']) {
				correct = true;
			}	
			break;
		case "2":
			if(keysPressed['37']) {
				clearInterval(gameInterval);
			}		
			else if(keysPressed['38']) {
				correct = true;
			}	
			break;
		case "P":
			if(keysPressed['37'] && keysPressed['38']) {
				correct = true;
				clearInterval(gameInterval);
			}	
			break;					
	}
}
function gameLoop() {
	firstLoaded = false;
	secondLoaded = false;
	thirdLoaded = false;
	correct = false;
	var allMilliseconds = [];

	var randomNumber = randomIntegerInRange(0, allVideos.length/3-1)*3;
	var firstVideoName = "";
	for(var i = 0; i < 3; i++) {
		var currentVideo = allVideos[randomNumber + i];
		var videoName = currentVideo.video_name;
		if(i == 0) {
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

gameLoop();

function randomIntegerInRange(min, max) {
	return Math.floor(Math.random()*(max - min + 1)) + min;
}
$("body").css({
	"background": "#3e404"
});