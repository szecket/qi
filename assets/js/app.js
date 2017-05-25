$(document).foundation();
sections = ['Explained','Partners','Philosophy','Products','Contact'];
$(document).ready(function() {
	// $('#fullpage').fullpage({
	// 	// sectionsColor: ['#61bd6d', '#ffffff', '#ff0000'],
	// 	anchors: sections,
	// 	menu: '#menu',
	// 	onLeave: function(index, nextIndex, direction){
	// 		console.log('', sections[nextIndex-1])
	// 		logoFade();

	// 		// //leaving the first slide of the 2nd Section to the right
	// 		// if(index == 2 && slideIndex == 0 && direction == 'right'){
	// 		// 	alert("Leaving the fist slide!!");
	// 		// }

	// 		// //leaving the 3rd slide of the 2nd Section to the left
	// 		// if(index == 2 && slideIndex == 2 && direction == 'left'){
	// 		// 	alert("Going to slide 2! ");
	// 		// }
	// 	},
	// 	slidesNavigation: true
	// });
});

$(document).on('update.zf.magellan', '[data-magellan]', function () {
	$('[data-magellan] a').blur();
	logoFade();
});

colors = [
	{main:'#BF3532',ring:'#E3B367', circle1: '#36676C', circle2: '#554A68', circle3:'#312D3B', circle4:'#3C4D57',bg:'#D27843', circle5:'#000'},
	{main:'#4F4665',ring:'#396B72', circle1: '#C52F2D', circle2: '#E1BF68', circle3:'#E2AC62', circle4:'#B7322D',bg:'#322C3A', circle5:'#000'},
	{main:'#FF2600',ring:'#2BA1A7', circle1: '#88CCEE', circle2: '#5678DC', circle3:'#8675DB', circle4:'#A5854F',bg:'#2B2210', circle5:'#000'},
]
function logoFade() {
	random = Math.floor(Math.random()*(colors.length))
	color = colors[random]
	colorPicker = [color.ring,color.circle1,color.circle2,color.circle3,color.bg,color.main];
	// console.log('color',random, color)
	$('.bg-cells *').velocity('stop');
	$('.top-bar-logo #ring').velocity('finish');
	$('.top-bar-logo #tissue path').velocity('stop');
	$('.top-bar').velocity('stop');
	$('.top-bar-logo #tissue path').velocity({fill: color.main},{duration:1400});
	$('.top-bar-logo #ring').velocity({fill: color.ring},{duration:1500});
	$('.top-bar-logo #ring').velocity({'transform-origin': '340.5 340.5 0'});
	$('.top-bar-logo #ring').velocity({rotateZ: "+=360"},{delay:500,duration:1000});
	$('.top-bar-logo #circle1').velocity({fill: color.circle1},{duration:1000});
	$('.top-bar-logo #circle2').velocity({fill: color.circle2},{duration:1100});
	$('.top-bar-logo #circle3').velocity({fill: color.circle3},{duration:1200});
	$('.top-bar-logo #circle4').velocity({fill: color.circle4},{duration:1300});
	$('div .top-bar').velocity({'background-color': color.bg},{duration:1400});

	$('.bg-cells .i1').velocity({'background-color': colorPicker[Math.floor(Math.random()*6)]},{delay:100,duration:6000});
	$('.bg-cells .i2').velocity({'background-color': colorPicker[Math.floor(Math.random()*6)]},{delay:1200,duration:500});
	$('.bg-cells .i3').velocity({'background-color': colorPicker[Math.floor(Math.random()*6)]},{delay:1200,duration:500});
	$('.bg-cells .i4').velocity({'background-color': colorPicker[Math.floor(Math.random()*6)]},{delay:1200,duration:500});

	$('.top-bar a').velocity({color:color.ring},{duration:400});
	$('a.active').velocity({color:color.main},{duration:500});
	$('input.button').velocity({'background-color':color.main},{duration:500});
}
