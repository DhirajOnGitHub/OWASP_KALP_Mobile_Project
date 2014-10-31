$(document).ready(function(){
	$('#home-menu').ready(function() {		
		document.getElementById("home-menu").style.display = 'none';   	
	});	
});


 $('#home-menu').ready(function () {        
    setInterval( function() 
    {	   
	     document.getElementById("home-menu").style.display = '';
		 document.getElementById("footer-loading").style.display = 'none';	   
    }, 3500);
});