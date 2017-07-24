$(document).foundation();
sections = ['Explained','Partners','Philosophy','Products','Contact'];
$(document).ready(function() {
	logoFade();
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
	{page:'qi', main:'#FF2600',ring:'#2BA1A7', circle1: '#ff0000', circle2: '#0000ff', circle3:'#ff00ff', circle4:'#00ffff',bg:'#222', circle5:'#00ff00'},
	{page:'qi', main:'#44ccaa',ring:'#E3B367', circle1: '#ff0000', circle2: '#0000ff', circle3:'#ff00ff', circle4:'#00ffff',bg:'#222', circle5:'#00ff00'},
	{page:'qi', main:'#4484C3',ring:'#0E7B5B', circle1: '#901613', circle2: '#C1381A', circle3:'#EEEFF1', circle4:'#C4CC29',bg:'#343173', circle5:'#4484C3'},
]
cool_colors = [
	{page:'qi', main:'#BF3532',ring:'#E3B367', circle1: '#36676C', circle2: '#554A68', circle3:'#312D3B', circle4:'#3C4D57',bg:'#D27843', circle5:'#000'},
	{page:'qi', main:'#4F4665',ring:'#396B72', circle1: '#C52F2D', circle2: '#E1BF68', circle3:'#E2AC62', circle4:'#B7322D',bg:'#322C3A', circle5:'#000'},
	{page:'qi', main:'#FF2600',ring:'#2BA1A7', circle1: '#88CCEE', circle2: '#5678DC', circle3:'#8675DB', circle4:'#A5854F',bg:'#2B2210', circle5:'#000'},
	{page:'qi', main:'#DCB044',ring:'#2EB3B4', circle1: '#C93A27', circle2: '#DCB044', circle3:'#E77B20', circle4:'#C93A27',bg:'#2c3840', circle5:'#000'},
]
background_images = [
	'url(/assets/images/value/CK17.jpg)',
	'url(/assets/images/value/actin.jpg)',
	'url(/assets/images/value/aSMA.jpg)',
	'url(/assets/images/value/CD44.jpg)',
	'url(/assets/images/value/CK5.jpg)',
	'url(/assets/images/value/CK8+18.jpg)',
	'url(/assets/images/value/CK14.jpg)',
	'url(/assets/images/value/CK17.jpg)',
	'url(/assets/images/value/CK19.jpg)',
	'url(/assets/images/value/CoxIV.jpg)',
	'url(/assets/images/value/DAPI.jpg)',
	'url(/assets/images/value/E-Cad.jpg)',
	'url(/assets/images/value/ER.jpg)',
	'url(/assets/images/value/Her2.jpg)',
	'url(/assets/images/value/Ki67.jpg)',
	'url(/assets/images/value/tubulin.jpg)',
	'url(/assets/images/value/VMT.jpg)',
	'',
	'',
	'',
	'',
	'',
	'',
]
function logoFade() {
	$('.top-bar-title').html($('.top-bar .active').html());
	random = Math.floor(Math.random()*(colors.length))
	color = colors[random]
	colorPicker = [color.circle1,color.circle2,color.circle3,color.circle4,color.circle5];
	// console.log('color',random, color)
  $('.hamburger-menu').velocity({opacity:0},{duration:400,display:"none"});
	$('.bg-cells *').velocity('stop');
	// $('.bg-cells .i4').velocity({opacity:1},{duration:200});
	$('svg #ring').velocity('finish');
	$('svg #tissue path').velocity('stop');
	$('.top-bar').velocity('stop');
	$('svg #tissue path').velocity({fill: color.main},{duration:1400});
	$('svg #ring').velocity({fill: color.ring},{duration:1500});
	$('svg #ring').velocity({'transform-origin': '340.5 340.5 0'});
	$('svg #ring').velocity({rotateZ: "360deg"},{delay:500,duration:1000}).velocity({rotateZ: "0deg"},{duration:0});
	var rc1= colorPicker[Math.floor(Math.random()*6)];
	var rc2= colorPicker[Math.floor(Math.random()*6)];
	var rc3= colorPicker[Math.floor(Math.random()*6)];
	var rc4= colorPicker[Math.floor(Math.random()*6)];
	var i1 = background_images[Math.floor(Math.random()*background_images.length)];
	var i2 = background_images[Math.floor(Math.random()*background_images.length)];
	var i3 = background_images[Math.floor(Math.random()*background_images.length)];
	var i4 = background_images[Math.floor(Math.random()*background_images.length)];
	console.log(i1,i2,i3,i4);
	$('svg #circle1').velocity({fill: rc1},{duration:1000});
	$('svg #circle2').velocity({fill: rc2},{duration:1100});
	$('svg #circle3').velocity({fill: rc3},{duration:1200});
	$('svg #circle4').velocity({fill: rc4},{duration:1300});
	$('.top-bar,.footer,.hamburger-bg').velocity({'background-color': color.bg},{duration:1400});
	$('.bg-cells .i1').velocity("fadeOut", { duration: 500 }).velocity({'background-color': rc1},{delay:100,duration:6000}).velocity("fadeIn", { duration: 1000 });
	$('.bg-cells .i1').delay(700).css("background-image", i1);
	$('.bg-cells .i2').velocity("fadeOut", { delay: 300, duration: 1500 }).velocity({'background-color': rc2},{delay:1200,duration:500}).velocity("fadeIn", { duration: 3000 });
	$('.bg-cells .i2').delay(2000).css("background-image", i2);
	$('.bg-cells .i3').velocity("fadeOut", { duration: 3000 }).velocity({'background-color': rc3},{delay:1200,duration:500}).velocity("fadeIn", { duration: 500 });
	$('.bg-cells .i3').delay(3200).css("background-image", i3);
	$('.bg-cells .i4').velocity("fadeOut", { duration: 2000 }).velocity({'background-color': rc4},{delay:1200,duration:1000}).velocity("fadeIn", { duration: 500 });
	$('.bg-cells .i4').delay(2200).css("background-image", i4);

	// $('.bg-cells .i4').velocity({opacity:0},{delay:200, duration:1400, loop:3});
	$('.top-bar a').velocity({color:color.ring},{duration:400});
	$('a.active,.top-bar-title,.top-bar-title-static').velocity({color:color.main},{duration:500});
	$('input.button').velocity({'background-color':color.main},{duration:500});
}

function rollover(item){
	$(item).velocity({ blur: 0 }, {duration:400});
}

function scrollToTop(){
	// $('.top-bar-title').html('Quantitative Imaging');
	$('html').velocity('scroll', { duration: 750, offset: top - 100 });
}

$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();
  if ( scrollTop < ($('.main-logo').offset().top + $('.main-logo').height()/2 )) {
		// $('.top-bar-title').html('Quantitative Imaging');
  }
});
function toggleHamburger(){
  $('.hamburger-menu').velocity({opacity:1},{duration:400,display:"block"});
  $('.hamburger-menu').velocity({opacity:0},{delay:3000,duration:400,display:"none"});
}
$('#contact-form').submit(function(e) {
    var name = $('#inputName')
    var email = $('#inputEmail')
    var message = $('#inputMessage')
  
    if(name.val() == "" || email.val() == "" || message.val() == "") {
      $('.submit-fail').fadeToggle(400);
      return false;
    }
    else {
      $.ajax({
        method: 'POST',
        url: 'https://formspree.io/szecket@magrittescow.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      $('.submit-success').fadeToggle(400);
      $('.submit-form').fadeToggle(400);
    }
  });

$('.submit-fail, .submit-success').click(function() {
  $(this).hide();
})


