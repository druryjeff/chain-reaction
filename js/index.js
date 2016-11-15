/* VARIABLES */

var ball = document.querySelector("#ball");
var button = document.querySelector("#button");
var slant1 = document.querySelector("#slant1");
var slant2 = document.querySelector("#slant2");
var teeter = document.querySelector("#teeter");
var letter = document.querySelector("#letter");
var net = document.querySelector("#net");
var spring = document.querySelector("#spring");
var door = document.querySelector("#door");

var tl = new TimelineLite({paused:true});
var tl1 = new TimelineLite({paused:true});
var tl2 = new TimelineLite({paused:true});


/* TIMELINE */

tl
	// Note the attention to easing and timing needed for realistic physics
	.to(ball,.5,{ top: 35, ease: Bounce.easeOut })
	.to(ball,3.65,{ transformOrigin: "50% 50%", rotation: 360, left: 325, top: 85, ease: Power2.easeIn })
	.to(ball,.6,{ top: 177, ease: Bounce.easeOut })
	.to(ball,3.5,{ transformOrigin: "50% 50%", rotation: -360, left: 25, top: 230, ease: Power1.easeIn })
	.to(ball,.2,{ transformOrigin: "50% 50%", rotation: 30, top: 552, ease: Power1.easeIn })
	.to(teeter,.025,{ rotation: -12, ease: Power1.easeOut })
	.to(letter,.1,{ bottom: 297, ease: Power1.easeOut },"-=.1")
	.to(slant2,0,{ rotation: 10, ease: Power1.easeIn })
	.to(letter,.5,{ bottom: -11, ease: Power1.easeIn })
	.to(teeter,.025,{ rotation: 12, ease: Power1.easeIn })
	.to(ball,1.5,{ transformOrigin: "50% 50%", rotation: 360, top: 294, ease: Power4.easeOut })
	.to(net,.5,{ left: 0, ease: Bounce.easeOut },"-=1")
	.to(ball,.2,{ transformOrigin: "50% 50%", rotation: -360, top: 360, ease: Power4.easeOut })
	.to(ball,0,{ opacity: 0 })
	.to(net,.5,{ left: -100, ease: Bounce.easeOut })
	.set(ball,{ top:600, left: 300, opacity: 1 })
	.to(ball,.2,{ top: "-=355", ease: Power4.ease  })
	.to(door,.1,{ rotation: 90, transformOrigin: "100% 100%", ease: Bounce.easeIn },"-=.2")
	.to(spring,.1,{ bottom: -100, ease: Bounce.easeIn },"-=.2")
	.to(spring,.1,{ bottom: -150, ease: Bounce.easeOut })
	.to(slant2,1,{ rotation: -10, ease: Power4.easeOut },"-=.31")
	.to(ball,1.5,{ top: 600, ease: Power4.easeIn, onComplete: startHere },"-=.5")

//
//, onComplete: rotateBack2
;

tl1
	.to(slant1,1,{ rotation: 10, delay: 1, ease: Bounce.easeOut });

tl2
	.to(slant2,1,{ rotation: -10, delay: 1, ease: Bounce.easeOut });


/* FUNCTIONS */

function rotateBack1(){
	tl1.play();
}

function rotateBack2(){
	tl2.play();
}

function startHere(){
	TweenLite.to(ball,0,{ top: -40});
	TweenLite.to(ball,0,{ opacity: 1, delay: .5 });
	tl.restart();
}


/* EVENT HANDLER */

button.addEventListener("click",function(){
	startHere();
});

