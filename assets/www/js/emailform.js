
var $ = jQuery.noConflict(); 
var formSubmitted = 'false';
var states = '';

jQuery(document).ready(function($) {	

	$('#formSuccessMessageWrap').hide(0);
	$('.formValidationError').fadeOut(0);
	
	// fields focus function starts
	$('input[type="text"], input[type="password"], textarea').focus(function(){
		if($(this).val() == $(this).attr('data-dummy')){
			$(this).val('');
		};	
	});
	// fields focus function ends
		
	// fields blur function starts
	$('input, textarea').blur(function(){
    	if($(this).val() == ''){		    
			$(this).val($(this).attr('data-dummy'));				
		};			
	});
	// fields blur function ends
		
	$('#contactEmailField').val(localStorage.getItem('email'));
	
	$('#contactEmailField').keyup(function(){		
		localStorage.setItem('email',$('#contactEmailField').val());
	});
	
	// submit form data starts	   
    function submitData(currentForm, formType){
    	checkConnection();
    	if(status == 'No network connection')
    		{
    		    $('#' + currentForm).hide();
				$('#formNetworkMessageWrap').fadeIn(1000);
			}
    	else
			{	
    		$('#' + currentForm).hide();
			$('#formLoadingMessageWrap').fadeIn(1000);
			$('#loader1').fadeIn(1000);
				formSubmitted = 'true';		
				var formInput = $('#' + currentForm).serialize();		
				$.post($('#' + currentForm).attr('action'),formInput, function(data,textStatus)
				{			
					if(data=='The_report_has_been_successfully_sent_on_your_Email')
					{
						//alert(data);	
							$('#formLoadingMessageWrap').hide();
						$('#formSuccessMessageWrap').fadeIn(1000);
					}			
					else
					{
							$('#formLoadingMessageWrap').hide();
						$('#formFailMessageWrap').fadeIn(1000);
					}					
				});
			}
	};
	function validateForm(currentForm, formType){		
	    $('.formValidationError').hide();
		$('.fieldHasError').removeClass('fieldHasError');
		$('#' + currentForm + ' .requiredField').each(function(i){		   	 
			if($(this).val() == '' || $(this).val() == $(this).attr('data-dummy')){				
				$(this).val($(this).attr('data-dummy'));	
				$(this).focus();
				$(this).addClass('fieldHasError');
				$('#' + $(this).attr('id') + 'Error').fadeIn(300);
				return false;					   
			};			
			if($(this).hasClass('requiredEmailField')){				  
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				var tempField = '#' + $(this).attr('id');				
				if(!emailReg.test($(tempField).val())) {
					$(tempField).focus();
					$(tempField).addClass('fieldHasError');
					$(tempField + 'Error2').fadeIn(300);
					return false;
				};			
			};			
			if(formSubmitted == 'false' && i == $('#' + currentForm + ' .requiredField').length - 1){
			 	submitData(currentForm, formType);
			};			  
   		});		
	};
	
	$('#emailSubmitButton').click(function() {	
		validateForm($(this).attr('data-formId'));	
	    return false;		
	});

});

function checkConnection() {
    var networkState = navigator.network.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
    status = states[networkState];    
   
}