=============================
AccordionTo
=============================

A responsive accordtion to tabs jQuery plugin. Uses a separate list to control the tab functionality, giving more options for layout.

Second list also works as anchor fallback navigation when no js is available.

You can link to specific tabs in the URL by using the same conventions as jQuery UI tabs.

=============================
Example Usage:
=============================

<pre><code><script src="/latest/version/of/jQuery.js"></script>
  
<script src="accordionTo.js"></script></code>

<script>
	
	$(document).ready(function(){
			
		$('.tabContainer').accordionTo();
			
	});
	
</script></code></pre>

=============================
Options (showing defaults):
=============================

<pre><code><script>
  
	$(document).ready(function(){
			
	  $('.tabContainer').accordionTo({

		controls : 'tabsNav', //class for separate list controls
  	 	accordion : 'accordionNav', //class for main accordion list
		breakpoint : 480, //breakpoint in pixels for transitions and resize check
		accordionTrans : 'slide', //effect for accordion. also uses 'fade' and 'none'
		tabTrans : 'none', //effect for tabs. lso uses 'fade' and 'slide'
		resizeCheck : true //when window resizes above the breakpoint, check if there are no active tabs. if there aren't any, set the first tab active

 	});
			
  });
	
</script></code></pre>

=============================
Markup:
=============================

<pre><code><div class="tabContainer">

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
	
</div></code></pre>






