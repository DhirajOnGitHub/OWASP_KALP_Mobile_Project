$(document).ready(function(){	
	//Go up
	
	$('.intro-table').ready(function() {		
	document.getElementById("details11").style.display = 'none';
    document.getElementById("details22").style.display = 'none';
	document.getElementById("details33").style.display = 'none';    
	document.getElementById("details44").style.display = 'none';    	
	});	
});

function toggle() {
	 if( document.getElementById("details11").style.display=='none' ){	
	   document.getElementById("details11").style.display = '';	    
	   document.getElementById("details22").style.display = 'none';
	   document.getElementById("details33").style.display = 'none';
	   document.getElementById("details44").style.display = 'none';  
	 }else{
	    document.getElementById("details11").style.display = 'none';
	   document.getElementById("details22").style.display = 'none';
	    document.getElementById("details33").style.display = 'none';
		document.getElementById("details44").style.display = 'none';  
	 }
	}	
	
	function toggle2() {
	 if( document.getElementById("details22").style.display=='none' ){	
	   document.getElementById("details11").style.display = 'none';	    
	   document.getElementById("details22").style.display = '';
	   document.getElementById("details33").style.display = 'none';
	   document.getElementById("details44").style.display = 'none';  
	   
	 }else{
	   document.getElementById("details22").style.display = 'none';
	   document.getElementById("details11").style.display = 'none';
	   document.getElementById("details22").style.display = 'none';
	   document.getElementById("details33").style.display = 'none';
	   document.getElementById("details44").style.display = 'none';  	   
	 }
	}	
	
	function toggle3() {
	 if( document.getElementById("details33").style.display=='none' ){	
	   document.getElementById("details11").style.display = 'none';	    
	   document.getElementById("details22").style.display = 'none';
	   document.getElementById("details33").style.display = '';
	   document.getElementById("details44").style.display = 'none';  
	   
	 }else{
	   document.getElementById("details11").style.display = 'none';
	   document.getElementById("details22").style.display = 'none';
	   document.getElementById("details33").style.display = 'none';	
       document.getElementById("details44").style.display = 'none';
	 	   
	 }
	}	
	
	function toggle4() {
	 if( document.getElementById("details44").style.display=='none' ){	
	   document.getElementById("details11").style.display = 'none';	    
	   document.getElementById("details22").style.display = 'none';
	   document.getElementById("details33").style.display = 'none';
	   document.getElementById("details44").style.display = '';
	 
	   
	 }else{
	   document.getElementById("details11").style.display = 'none';
	   document.getElementById("details22").style.display = 'none';
	   document.getElementById("details33").style.display = 'none';
	   document.getElementById("details44").style.display = 'none';	  	   
	 }
	}	
	
	function toggleall()
	{
	if( document.getElementById("details11").style.display=='none' || document.getElementById("details22").style.display=='none' || document.getElementById("details33").style.display=='none' || document.getElementById("details44").style.display=='none')
	{	
	   document.getElementById("details11").style.display = '';	    
	   document.getElementById("details22").style.display = '';
	   document.getElementById("details33").style.display = '';
	   document.getElementById("details44").style.display = '';	   
	 }else{
	   document.getElementById("details11").style.display = 'none';
	   document.getElementById("details22").style.display = 'none';
	   document.getElementById("details33").style.display = 'none';
	   document.getElementById("details44").style.display = 'none';	  	   
	 }
	}