
var $ = jQuery.noConflict(); 
var formSubmitted = 'false';
var status = '';


jQuery(document).ready(function($) {	
	$('#formSuccessMessageWrap').hide(0);
	$('.formValidationError').fadeOut(0);
});

function contactInit()
{
	
	checkConnection2();
	if(status == "No network connection" || status == "Unknown connection")
		{
			document.getElementById('loaderdiv').style.display='none';
			document.getElementById('contactnoNetworkError').style.display = '';			
			status = '';
		}else
		{	
			//document.getElementById('resp-map').src = "https://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=varutra+consulting+pune&aq=&sll=21.125498,81.914063&sspn=21.73369,39.506836&t=m&ie=UTF8&hq=varutra+consulting&hnear=Pune,+Maharashtra&ll=18.577267,73.901596&spn=0.056951,0.073128&z=13&output=embed";
			document.getElementById('resp-map').setAttribute("src","https://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=varutra+consulting+pune&aq=&sll=21.125498,81.914063&sspn=21.73369,39.506836&t=m&ie=UTF8&hq=varutra+consulting&hnear=Pune,+Maharashtra&ll=18.577267,73.901596&spn=0.056951,0.073128&z=13&output=embed");
			status = '';
		}
}

function checkConnection2() {
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

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////// Document Ready Function Ends                                                                       */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/