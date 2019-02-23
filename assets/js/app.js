$(document).foundation();
sections = ['About','What','Who','Contact'];
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
var rc1= colorPicker[Math.floor(Math.random()*6)];
var rc2= colorPicker[Math.floor(Math.random()*6)];
var rc3= colorPicker[Math.floor(Math.random()*6)];
var rc4= colorPicker[Math.floor(Math.random()*6)];
$('.bg-cells .i1').css('background-color', rc1);
$('.bg-cells .i2').css('background-color', rc2);
$('.bg-cells .i3').css('background-color', rc3);
$('.bg-cells .i4').css('background-color', rc4);

});
if ($(location).attr('href').indexOf("application")>=0){
	$('.bg-cells').hide();
	$('.main-logo').hide();
}
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
];
function logoFade() {
	$('.top-bar-title').html($('.top-bar .active').html());
	random = Math.floor(Math.random()*(colors.length))
	color = colors[random]
	colorPicker = [color.circle1,color.circle2,color.circle3,color.circle4,color.circle5];
	if ($(location).attr('href').indexOf("application")>=0){
		// $('body').css('background-color','#27323a');
		$('body').css('background-color','#fff');
		$('section').addClass('tight');
		$('.ghost-box').addClass('line');
		$('p').addClass('application');
		$('h1').addClass('application');
		$('.showcase-text').addClass('application');
		$('.top-bar,.slideUp,.footer,.hamburger-bg').velocity({'background-color': color.bg},{duration:1400});
		return;
	} else {
		$('body').css('background-color','#000');
	}
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
	$('svg #circle1').velocity({fill: rc1},{duration:1000});
	$('svg #circle2').velocity({fill: rc2},{duration:1100});
	$('svg #circle3').velocity({fill: rc3},{duration:1200});
	$('svg #circle4').velocity({fill: rc4},{duration:1300});
	$('.top-bar,.slideUp,.footer,.hamburger-bg').velocity({'background-color': color.bg},{duration:1400});
	$('.bg-cells .i1')
		.velocity('stop')
		.velocity("fadeOut", 900 ,function(){
			newBg = background_images[Math.floor(Math.random()*background_images.length)];
			console.log('newBG 1',newBg);
			$('.bg-cells .i1').css("background-image", newBg);
		})
		.velocity("fadeIn", { duration: 1000 })
		.velocity({'background-color': rc1},{delay:1000,duration:2000});

	$('.bg-cells .i2')
		.velocity('stop')
		.velocity("fadeOut", 1900,function(){
			newBg = background_images[Math.floor(Math.random()*background_images.length)];
			console.log('newBG 2',newBg);
			$('.bg-cells .i2').css("background-image", newBg);
		})
		.velocity("fadeIn", { delay:300, duration: 900 })
		.velocity({'background-color': rc2},{delay:100,duration:1100});

	$('.bg-cells .i3')
		.velocity('stop')
		.velocity("fadeOut", 300 ,function(){
			newBg = background_images[Math.floor(Math.random()*background_images.length)];
			console.log('newBG 3',newBg);
			$('.bg-cells .i3').css("background-image", newBg);
		})
		.velocity("fadeIn", { delay:350, duration: 900 })
		.velocity({'background-color': rc3},{delay:100,duration:900});

	$('.bg-cells .i4')
		.velocity('stop')
		.velocity("fadeOut", 1550,function(){
			newBg = background_images[Math.floor(Math.random()*background_images.length)];
			console.log('newBG 4',newBg);
			$('.bg-cells .i4').css("background-image", newBg);
		})
		.velocity("fadeIn", { delay:800, duration: 800 })
		.velocity({'background-color': rc4},{delay:700,duration:500});

	$('.top-bar a, .slideUpLink').velocity({color:color.ring},{duration:400});
	$('span.active a, a.active,.top-bar-title,.top-bar-title-static').velocity({color:color.main},{duration:500});
	$('input.button').velocity({'background-color':color.main},{duration:500});
	$('.ghost-box').css('z-index',-1);
}

function rollover(item){
	$(item).velocity({ blur: 5 }, {duration:400});
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
var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('input:submit', $contactForm);
	var defaultSubmitText = $submit.val();
    var name = $('#inputName')
    var email = $('#inputEmail')
    var message = $('#inputMessage')
    var serial = {'name':name.val(),'email':email.val(),'message':message.val()};
	  var recipient = 'nederlofontheroad@me.com'
	$.ajax({
		url: '//formspree.io/' + recipient,
		method: 'POST',
		data: serial,
		dataType: 'json',
		beforeSend: function() {
			//$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
			$submit.attr('disabled', true).val('Sending message…');
		},
		success: function(data) {
			//$contactForm.append('<div class="alert alert--success">Message sent!</div>');
      $('.submit-success').fadeToggle(400);
      $('.submit-form').fadeToggle(400);
		},
		error: function(err) {
			//$contactForm.find('.alert--loading').hide();
			//$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
			$submit.val('Ops, there was an error.');
			setTimeout(function() {
				//$('.alert--error').remove();
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 5000);
		}
	});
});
$('.submit-fail, .submit-success').click(function() {
  $(this).hide();
})


// ---------------------------------------------------------------
// SlideUpTopBar for Foundation top-bar
// ---------------------------------------------------------------

var $window = $(window);
var didScroll;
var lastScrollTop = 0;
var scrollAmount = 10;          // Value of scroll amount
var navbarHeight = $('.slideUp').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {

    "use strict";

    var sup = $(window).scrollTop();

    if(Math.abs(lastScrollTop - sup) <= scrollAmount) return;

    if (sup > lastScrollTop && sup > navbarHeight){
        // On Scroll Down
        $('.slideUp').css({top: -$(window).outerHeight()});
    } else {
        // On Scroll Up
        if(sup + $(window).height() < $(document).height()) {
            $('.slideUp').css({top: 75});
        }
    }

    lastScrollTop = sup;

}
