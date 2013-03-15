=============================
AccordionTo
=============================

A responsive accordion to tabs jQuery plugin.

Uses a separate list to control the tabs, giving more options for layout and doubles as an anchor navigation fallback when no js is available.

You can link to specific tabs in the URL by using the same conventions as jQuery UI tabs. (http://example.com/tabs-page#tabId)

Use CSS + media queries to toggle visibility for the tabs and anchor links.

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

				activeOnLoad : true,
				controls : 'tabsNav',
				accordion : 'accordionNav',
				breakpoint : 480,
				accTrans : 'slide',
				accSpeed : 300,
				tabTrans : 'none',
				tabSpeed : 300,
				resizeCheck : true

			});
			
		});
	
	</script>

<code>activeOnLoad</code> - (default: true)
----------------------------------------------------------
Load first content block on page load.

<code>controls</code> - (default: 'tabsNav')
----------------------------------------------------------
CSS class name for the separate unordered list that will control your tabs.

<code>accordion</code> - (default: 'accordionNav')
----------------------------------------------------------
CSS class name for the unordered list that contains the content blocks.

<code>breakpoint</code> - (default: 480)
----------------------------------------------------------
Breakpoint used to detect which transition to use and used for resize check.

<code>accTrans</code> - (default: 'slide')
----------------------------------------------------------
Transition effect for the accordion. Accepts 'slide', 'fade' and 'none'.

<code>accSpeed</code> - (default: 300)
----------------------------------------------------------
Transition speed for accordion.

<code>tabTrans</code> - (default: 'none')
----------------------------------------------------------
Transition effect for the tabs. Accepts 'slide', 'fade' and 'none'.

<code>tabSpeed</code> - (default: 300)
----------------------------------------------------------
Transition speed for tabs.

<code>resizeCheck</code> - (default: true)
----------------------------------------------------------
When all accordions are collapsed and resizing a browser window above the breakpoint, should the accordionTo automatically active the first tab?


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






