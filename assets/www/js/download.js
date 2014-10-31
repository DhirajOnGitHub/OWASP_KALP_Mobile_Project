var $ = jQuery.noConflict(); 
var formSubmitted = 'false';
var status = '';
var url = '';
var filePath = '';

window.appRootDirName = "Topten";
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log("device is ready");
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function fail() {
	console.log("failed to get filesystem");
}

function gotFS(fileSystem) {
	console.log("filesystem got");
	window.fileSystem = fileSystem;
	fileSystem.root.getDirectory(window.appRootDirName, {
		create : true,
		exclusive : false
	}, dirReady, fail);
}

function dirReady(entry) {
	window.appRootDir = entry;
	console.log("application dir is ready");
}


jQuery(document).ready(function($) {	

	$('#formSuccessMessageWrap').hide(0);
	$('.formValidationError').fadeOut(0);

		$('input[type="text"], input[type="password"], textarea').focus(function(){
		if($(this).val() == $(this).attr('data-dummy')){
			$(this).val('');
		};	
	});

		$('input, textarea').blur(function(){
		if($(this).val() == ''){		    
			$(this).val($(this).attr('data-dummy'));				
		};			
	});

	$('#contactEmailField').val(localStorage.getItem('email'));
	
	$('#contactEmailField').keyup(function(){		
		localStorage.setItem('email',$('#contactEmailField').val());
	});
	
	
	
	
	
	function submitData(currentForm, formType){     
		formSubmitted = 'true';		
		var formInput = $('#' + currentForm).serialize();	
		
		checkConnection();		
			
		if(status == "No network connection")
			{
				$('#' + currentForm).hide();
				$('#formFailMessageWrap').fadeIn(1000);
			}else
			{					
				downloadFile();
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

	$('#downloadSubmitButton').click(function() {	
		validateForm($(this).attr('data-formId'));	
		return false;		
	});


});

downloadFile = function(){
	
	document.getElementById("downloadForm").style.display = 'none';
	document.getElementById("formLoadingMessageWrap").style.display = '';
	document.getElementById("loader1").style.display = '';
	
	
	var year = document.getElementById("soflow");
	var selectedyear = year.options[ year.selectedIndex ].value
	
	if(selectedyear == "2014")
	{	
		url = "http://www.varutra.com/mobileOWASPKALP/pdf/OWASP_Top_10_2014.pdf";
		filePath = window.appRootDir.fullPath + "/OWASP_Top10_2014.pdf";
		
	}else if(selectedyear == "2013")
	{
		url = "http://www.varutra.com/mobileOWASPKALP/pdf/OWASP_Top_10_2013.pdf";
		filePath = window.appRootDir.fullPath + "/OWASP_Top10_2013.pdf";
	}else if(selectedyear == "2010")
	{
		url = "http://www.varutra.com/mobileOWASPKALP/pdf/OWASP_Top_10_2010.pdf";
		filePath = window.appRootDir.fullPath + "/OWASP_Top10_2010.pdf";
	}else if(selectedyear == "2007")
	{
		url = "http://www.varutra.com/mobileOWASPKALP/pdf/OWASP_Top_10_2007.pdf";
		filePath = window.appRootDir.fullPath + "/OWASP_Top10_2007.pdf";
	}
	
	var fileTransfer = new FileTransfer();
	
	fileTransfer.download(
	    url,
	    filePath,
	    function(entry) {
	        document.getElementById("formLoadingMessageWrap").style.display = 'none';
			document.getElementById("formSuccessMessageWrap").style.display = 'block';
	    },
	    function(error) {
	        document.getElementById("formLoadingMessageWrap").style.display = 'none';
			document.getElementById("formErrorMessageWrap").style.display = 'block';
	    }
	);
	
}


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



function viewpdf()
{
	
	
	try
	{	
	var ref = window.open(filePath, '_system', 'location=yes');	
	}
	catch(err)
	{
		document.getElementById("nopdfviewerfound").style.display = 'block';    
		
	}
	ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
	ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
	ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
	ref.addEventListener('exit', function(event) { alert(event.type); });	

}
