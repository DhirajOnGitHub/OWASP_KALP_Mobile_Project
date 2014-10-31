

$(window).load(function() { 
	$("#status").delay(4000).fadeOut(); 
	$("#preloader").delay(2000).fadeOut("slow"); 


})

$(document).ready(function(){

	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
	
	var owl = $(".slider-controls");
	owl.owlCarousel({
			singleItem:true,
		slideSpeed : 250,
		paginationSpeed : 250,
		rewindSpeed : 250,
		pagination:false,
		
		autoPlay : true,
	});
	
	$(".next-slider").click(function(){
	  owl.trigger('owl.next');
	  return false;
	});
	$(".prev-slider").click(function(){
	  owl.trigger('owl.prev');
	  return false;
	});
	
	
	var owlQuoteControls = $(".quote-slider");
	owlQuoteControls.owlCarousel({
		items : 2,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,3],
		itemsTabletSmall: [480,1],
		itemsMobile : [370,1],
		singleItem : false,
		itemsScaleUp : false,
		slideSpeed : 250,
		paginationSpeed : 250,
		rewindSpeed : 250,
		pagination:false,
		autoPlay : false,
		autoHeight: true,
	});
	
	var owlQuoteNoControls = $(".quote-slider-no-controls");
	owlQuoteNoControls.owlCarousel({
		singleItem:true,
		slideSpeed : 250,
		paginationSpeed : 250,
		rewindSpeed : 250,
		pagination:false,
		autoPlay : true,
		autoHeight: true,
	});
	
	$(".next-quote").click(function(){
	  owlQuoteControls.trigger('owl.next');
	  return false;
	});
	$(".prev-quote").click(function(){
	  owlQuoteControls.trigger('owl.prev');
	  return false;
	});
	

	var owlStaffControls = $(".staff-slider");
	owlStaffControls.owlCarousel({
		//Basic Stuff
		items : 2,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,3],
		itemsTabletSmall: [480,1],
		itemsMobile : [370,1],
		singleItem : false,
		itemsScaleUp : false,
		slideSpeed : 250,
		paginationSpeed : 250,
		rewindSpeed : 250,
		pagination:false,
		autoPlay : false,
		autoHeight: true,
	});
	
	$(".next-staff").click(function(){
	  owlStaffControls.trigger('owl.next');
	  return false;
	});
	$(".prev-staff").click(function(){
	  owlStaffControls.trigger('owl.prev');
	  return false;
	});

	
	$('.slider-two-thumbs').owlCarousel({
		singleItem:true,	
	});
		
	$(".slider-no-controls").owlCarousel({
		singleItem:true,
		slideSpeed : 250,
		paginationSpeed : 250,
		rewindSpeed : 250,
		pagination:false,
		autoHeight:true,
	
		autoPlay : true,
		stopOnHover : true,
	
		dragBeforeAnimFinish : true,
		mouseDrag : true,
		touchDrag : true,
	
		transitionStyle : false,
	});
	
	$(".swipebox").swipebox({
		useCSS : true, 
		hideBarsDelay : 3000 
	});
	
	$(".swipebox-wide").swipebox({
		useCSS : true, 
		hideBarsDelay : 3000 
	});
	
	$(".portfolio-item-full-width a").colorbox({
	 	transition:"fade",
		scalePhotos:"true",
		maxWidth:"100%",
		maxHeight:"100%"
	});
	
	$(".portfolio-item-thumb a").colorbox({
	 	transition:"fade",
		scalePhotos:"true",
		maxWidth:"100%",
		maxHeight:"100%"
	});

	
  var time = 7; 
 
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
	  
 
    $(".homepage-slider").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
	  pagination:false,
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging
    });
 
    function progressBar(elem){
      $elem = elem;
      buildProgressBar();
      start();
    }
 
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        if(percentTime >= 100){
          $elem.trigger('owl.next')
        }
      }
    }
 
    function pauseOnDragging(){
      isPause = true;
    }
 
    function moved(){
      clearTimeout(tick);
      start();
    }


	$(".next-home").click(function(){
	  $(".homepage-slider").trigger('owl.next');
	  return false;
	});
	$(".prev-home").click(function(){
	  $(".homepage-slider").trigger('owl.prev');
	  return false;
	});	



});