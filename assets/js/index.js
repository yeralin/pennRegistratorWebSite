$(window).load(function() {
    NProgress.done();
});


$(document).ready(function() {
	$('.checkButton').click(function() {
    	if($('.checkButton').is(':checked')) { $('.fLink').css({"pointerEvents":"inherit", "color":"#008CBA"}); }
    	else { $('.fLink').css({"pointerEvents":"none", "color":"#C8C8C8"}); }
	});
    $('nav.fixed').midnight();
   	$('a#link').click(function() {
   		$('.agreement').css({"display":"initial"});
   	});
    $('a#link').avgrund({
	width: 380, // max is 640px
	height: 280, // max is 350px
	showClose: true, // switch to 'true' for enabling close button
	showCloseText: 'Close', // type your text for close button
	closeByEscape: true, // enables closing popup by 'Esc'..
	closeByDocument: true, // ..and by clicking document itself
	onBlurContainer: 'body', // enables blur filter for specified block
	openOnEvent: true, // set to 'false' to init on load
	setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
	template: $('.agreement')
});

    NProgress.start();
});