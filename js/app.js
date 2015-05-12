// One page scroll

$(document).ready(function() {
				$('.footer').hide();
				$('.dev-page .content').hide();
	$('.model-page .content').hide();
	
	$('#pagepiling').pagepiling({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		
		afterLoad: function(anchorLink, index){
			
			//using anchorLink
			if(index == 2){
				$('.dev-page .content').show();
			}
			
			//using index
			if(index == 3){
				$('.model-page .content').show();
			}
			
			//using index
			if(index == 4){
				$('.footer').show();
				$('.footer').addClass('bounceInUp')
				$('.footer').removeClass('bounceOutDown')
				$('.footer-page').css('z-index', '100');
			} else {
				$('.footer').attr('style', '')
				$('.footer').removeClass('bounceInUp')
				$('.footer').addClass('bounceOutDown')
				$('.footer-page').css('z-index', '1');
			}
		}
	});
});


// For wow.js

new WOW().init();


// For video in youtube

var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		playerVars: { 'autoplay': 1, 'controls': 0,'autohide':1,'wmode':'opaque', 'loop': 1, 'rel': 0, 'showinfo': 0, 'wmode': 'transperant', 'hd': 1, 'start': 20 },
		videoId: 'M3lOwDnRXjg',
		events: {
		'onReady': onPlayerReady}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.mute();
}

//for resizing video
function videoResize() {
	var w = $(document).width()*1.35;
	$("#player").css('width', ''+w+'px').css('height', ''+w/1.77778+'px');
	console.log($(document).width());
}
videoResize();
$(window).resize(function() {
	videoResize();
});


// SLIDER

$('.right-arrow').click(function() {
	$('.white-chair').removeClass('animated').removeClass('fadeInLeft');
	$('.white-chair').addClass('fadeInLeft').addClass('animated');
});