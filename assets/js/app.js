// $(document).ready(function(){ 
// 	var touch 	= $('#resp-menu');
// 	var menu 	= $('.menu');

// 	$(touch).click(e => {
// 		e.preventDefault();
// 		menu.fadeToggle('fast');
// 	});

// 	$(window).resize(function(){
// 		var w = $(window).width();
// 		if(w > 767 && menu.is(':hidden')) {
// 			menu.removeAttr('style');
// 		}
// 	});

// });

// function myFunction() {
// 	var x = document.getElementById("myTopnav");
// 	if (x.className === "topnav") {
// 		x.className += " responsive";
// 	} else {
// 		x.className = "topnav";
// 	}
// }

$(document).ready(function () {

	$("#responsive-menu").click(function (e) {
		console.log('cliquei');
		e.preventDefault();
		if ($('#myTopnav').is( ".topnav.responsive")){
			$('#myTopnav').removeClass('responsive');
			
		} else {
			$('#myTopnav').attr('class', 'topnav responsive');
		}
	})
});