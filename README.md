=============================
AccordionTo
=============================

A responsive accordtion to tabs jQuery plugin. Uses a separate list to control the tab functionality, giving more options for layout.

Second list also works as anchor fallback navigation when no js is available.

You can link to specific tabs in the URL by using the same conventions as jQuery UI tabs.

=============================
Example Usage:
=============================

<script src="/latest/version/of/jQuery.js"></script>
  
<script src="accordionTo.js"></script>

<script>
	
	$(document).ready(function(){
			
		$('.tabContainer').accordionTo();
			
	});
	
</script>

=============================
Options (showing defaults):
=============================

<script>
  
	$(document).ready(function(){
			
	  $('.tabContainer').accordionTo({

          controls : 'tabsNav', //class for separate list controls
  	      accordion : 'accordionNav', //class for main accordion list
		      breakpoint : 480, //breakpoint for transitions and resize check
		      accordionTrans : 'slide', //effect for accordion
		      tabTrans : 'none', //effect for tabs
		      resizeCheck : true //when window resizes to tabs, check if there are no active tabs and set the first one

    });
			
  });
	
</script>

=============================
Markup:
=============================

<div class="tabContainer">

  <ul class="tabsNav">
	
	  <li><a href="#one">One</a></li>
		<li><a href="#two">Two</a></li>
		<li><a href="#three">Three</a></li>
		
	</ul>
	
	<ul class="accordionNav">
		
		<li><a href="#one">One</a>
		  
		  <div id="one" class="section">
		    
		    ...
		
		  </div>
		  
	  </li>
	  <li><a href="#two">Two</a>
		  
		  <div id="two" class="section">
  	    
		    ...
		
			 </div>
		  
		</li>
		<li><a href="#three">Three</a>
		  
		  <div id="three" class="section">
  	    
		    ...
		
			 </div>
		  
		</li>
		
	</ul>
	
</div>






