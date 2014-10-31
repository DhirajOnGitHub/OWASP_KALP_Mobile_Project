


$(document).ready(function(){
	
	
	$('.footer-up-icon, .going-up').click(function() {
		$('body,html').animate({
			scrollTop:0
		}, 800, 'easeOutExpo');
		return false;
	});
		
	$('.checkbox-one').click(function(){
		$(this).toggleClass('checkbox-one-checked');
		return false;
	});
	$('.checkbox-two').click(function(){
		$(this).toggleClass('checkbox-two-checked');
		return false;
	});
	$('.checkbox-three').click(function(){
		$(this).toggleClass('checkbox-three-checked');
		return false;
	});	
	$('.radio-one').click(function(){
		$(this).toggleClass('radio-one-checked');
		return false;
	});	
	$('.radio-two').click(function(){
		$(this).toggleClass('radio-two-checked');
		return false;
	});
	
		
	$('.tap-dismiss-notification').click(function(){
		$(this).fadeOut();
		return false;
	});
	
	$('.close-big-notification').click(function(){
		$(this).parent().fadeOut();
		return false;
	});
	
	
	$('.tab-but-1').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-1').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-1').show(100);	
		return false;	
	});
	
	$('.tab-but-2').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-2').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-2').show(100);
		return false;		
	});	
	
	$('.tab-but-3').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-3').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-3').show(100);	
		return false;	
	});	
	
	$('.tab-but-4').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-4').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-4').show(100);
		return false;		
	});	

	$('.tab-but-5').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-5').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-5').show(100);	
		return false;	
	});	
	
	
	$('.deploy-toggle-1').click(function(){
		$(this).parent().find('.toggle-content').toggle(100);
		$(this).toggleClass('toggle-1-active');
		return false;
	});
	
	$('.deploy-toggle-2').click(function(){
		$(this).parent().find('.toggle-content').toggle(100);
		$(this).toggleClass('toggle-2-active');
		return false;
	});
	
	$('.deploy-toggle-3').click(function(){
		$(this).parent().find('.toggle-content').toggle(100);
		$(this).find('em strong').toggleClass('toggle-3-active-ball');
		$(this).find('em').toggleClass('toggle-3-active-background');
		return false;
	});
	
	$('.submenu-nav-deploy').click(function(){
		$(this).toggleClass('submenu-nav-deploy-active');
		$(this).parent().find('.submenu-nav-items').toggle(100);
		return false;
	});
	
	
	$('.sliding-door-top').click(function(){
		$(this).animate({
			left:'101%'
		}, 500, 'easeInOutExpo');
		return false;
	});
	
	$('.sliding-door-bottom a em').click(function(){
		$(this).parent().parent().parent().find('.sliding-door-top').animate({
			left:'0px'
		}, 500, 'easeOutBounce');
		return false
		
	});
	

	
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	function eraseCookie(name) {	createCookie(name,"",-1);	}
	
	var webappStatus = readCookie('webappIsClosed');
	
	
	var isiPhone = 		navigator.userAgent.toLowerCase().indexOf("iphone");
	var isiPad = 		navigator.userAgent.toLowerCase().indexOf("ipad");
	var isiPod = 		navigator.userAgent.toLowerCase().indexOf("ipod");
	var isiAndroid = 	navigator.userAgent.toLowerCase().indexOf("android");
	
	if(isiPhone > -1) 	 {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').show();		 $('.android-detected').hide();	 }
	if(isiPad > -1)	 {		 	 $('.ipod-detected').hide();		 $('.ipad-detected').show();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }
	if(isiPod > -1)	 {		 	 $('.ipod-detected').show();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }   
	if(isiAndroid > -1) {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').show();	 }  

	
	$('.delete-cookie').click(function(){
		eraseCookie('webappIsClosed');
		return false;
	});
	
	if(window.navigator.standalone==true){	$('.webapp').hide();	}
	
		
	$('.close-webapp').click(function(){
		createCookie('webappIsClosed', 'true' , 7);
		$('.webapp').animate({
			bottom: '-220',
		}, 500, function() {
			$('.webapp').hide();
		});
		return false;
	});	
	
	if(isiPhone > -1){
		$('.webapp').delay(1000).animate({
			bottom: '20',
		}, 500, function(){});		
	};

	if(webappStatus == 'true'){
		$('.webapp').hide();	
	};
		
	
});