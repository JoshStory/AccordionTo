(function( $ ) {
	
	var defaults = {
		'controls' : 'tabsNav',
		'accordion' : 'accordionNav',
		'breakpoint' : 480,
		'accordionTrans' : 'slide',
		'tabTrans' : 'none',
		'resizeCheck' : true
	};
	
	$.fn.accordionTo = function(options) {
		
		// create a namespace to be used throughout the plugin
		var accordion = {};
		
		var el = this;
		
		// initialize namespace
		var init = function() {
			
			accordion.settings = $.extend({}, defaults, options);
			
			/* Init and Main Nav */
		    var body = $('body');

		    $(body).removeClass('no-js');
		    $(body).addClass('js');

		    /* Accordion to Tabs */
			//var triggers = ;
			
			$('.' + accordion.settings.accordion + ' .section').hide();

			if(document.location.hash != '' && document.location.hash != '#top') {
			    //get the index from URL hash
			    var hash = window.location.hash;

				$('a[href^="' + hash + '"]').addClass('active');
				$(hash).addClass('open').show();

			} else {
				//set the first group active
				firstSetActive();

			}
			
			var triggers = $('.' + accordion.settings.controls + ' li a, .' + accordion.settings.accordion + ' li > a');
			
			$(triggers).on('click', function(){
				
				var activeContainer = $(this).attr('href'),
					allContainers = $('.' + accordion.settings.accordion + ' li .section');
					bothURLs = $('a[href^="' + activeContainer + '"]'),
					windowWidth = $(window).width();

				if (windowWidth < accordion.settings.breakpoint) {
					//for  accordion transitions
					if ($(bothURLs).hasClass('active')) {
						//if the selected trigger is already active
						$(bothURLs).removeClass('active');
						if (accordion.settings.accordionTrans === 'slide') {
							$(activeContainer).removeClass('open').slideUp(300);
						} else if (accordion.settings.accordionTrans === 'fade') {
							$(activeContainer).removeClass('open').fadeOut(300);
						} else {
							$(activeContainer).removeClass('open').hide();
						}
						return false;

					} else {
						//if the selected trigger is not active
						$(triggers).removeClass('active');
						$(bothURLs).addClass('active');
						if (accordion.settings.accordionTrans === 'slide') {
							$(allContainers).removeClass('open').slideUp(300);
							$(activeContainer).addClass('open').slideDown(300);
						} else if (accordion.settings.accordionTrans === 'fade') {
							$(allContainers).removeClass('open').fadeOut(300);
							$(activeContainer).addClass('open').fadeIn(300);
						} else {
							$(allContainers).removeClass('open').hide();
							$(activeContainer).addClass('open').show();
						}
						return false;

					}


				} else {
					//for tab transitions
					$(triggers).removeClass('active');
					$(bothURLs).addClass('active');
					if (accordion.settings.tabTrans === 'slide') {
						$(allContainers).removeClass('open').slideUp();
						$(activeContainer).addClass('open').slideDown();
					} else if (accordion.settings.tabTrans === 'fade') {
						$(allContainers).removeClass('open').fadeOut();
						$(activeContainer).addClass('open').fadeIn();
					} else {
						$(allContainers).removeClass('open').hide();
						$(activeContainer).addClass('open').show();
					}
					return false;

				}
				
			})
			
			if (accordion.settings.resizeCheck) {
				$(window).resize(resize);
			}
			
		}
		
		var firstSetActive = function() {

			$('.' + accordion.settings.controls + ' li:first a, .' + accordion.settings.accordion + ' li:first > a').addClass('active');
			$('.' + accordion.settings.accordion + ' li:first > a').next('.section').addClass('open').show();

		}
		
		var resize = function( ) {
		
			var hasActiveTab = $('.' + accordion.settings.accordion + ' .section').hasClass('open'),
				windowWidth = $(window).width();
			
			if (hasActiveTab === false && windowWidth > 480) {
				
				firstSetActive();
			
			}
			
		}
		
		init();
		
		// returns the current jQuery object
		return this;
	
	};
	
})( jQuery );
