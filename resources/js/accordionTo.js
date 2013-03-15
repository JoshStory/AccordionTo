(function( $ ) {
	
	$.fn.accordionTo = function(options) {

		//default plugin settings
		var defaults = {
			'activeOnLoad' : true,
			'controls' : 'tabsNav',
			'accordion' : 'accordionNav',
			'breakpoint' : 480,
			'accTrans' : 'slide',
			'accSpeed' : 300,
			'tabTrans' : 'none',
			'tabSpeed' : null,
			'resizeCheck' : true
		};
	
		// create a namespace to be used throughout the plugin
		var acc = {};
		
		var el = this;
		
		// initialize namespace
		var init = function() {
			
			acc.settings = $.extend({}, defaults, options);
			
			/* Init and Main Nav */
		    var body = $('body');

		    $(body).removeClass('no-js');
		    $(body).addClass('js');

		    /* Accordion to Tabs */
			//var triggers = ;
			
			$('.' + acc.settings.accordion + ' .section').hide();

			if(document.location.hash != '' && document.location.hash != '#top') {
			    //get the index from URL hash
			    var hash = window.location.hash;

				$('a[href^="' + hash + '"]').addClass('active');
				$(hash).addClass('open').show();

			} else if (acc.settings.activeOnLoad) {
				//set the first group active
				firstSetActive();

			}
			
			var triggers = $('.' + acc.settings.controls + ' li a, .' + acc.settings.accordion + ' li > a');
			
			$(triggers).on('click', function(){
				
				var activeContainer = $(this).attr('href'),
					allContainers = $('.' + acc.settings.accordion + ' li .section');
					bothURLs = $('a[href^="' + activeContainer + '"]'),
					windowWidth = $(window).width();

				if (windowWidth < acc.settings.breakpoint) {
					//for  accordion transitions
					if ($(bothURLs).hasClass('active')) {
						//if the selected trigger is already active
						$(bothURLs).removeClass('active');
						if (acc.settings.accTrans === 'slide') {
							$(activeContainer).removeClass('open').slideUp(acc.settings.accSpeed);
						} else if (acc.settings.accTrans === 'fade') {
							$(activeContainer).removeClass('open').fadeOut(acc.settings.accSpeed);
						} else {
							$(activeContainer).removeClass('open').hide();
						}
						return false;

					} else {
						//if the selected trigger is not active
						$(triggers).removeClass('active');
						$(bothURLs).addClass('active');
						if (acc.settings.accTrans === 'slide') {
							$(allContainers).removeClass('open').slideUp(acc.settings.accSpeed);
							$(activeContainer).addClass('open').slideDown(acc.settings.accSpeed);
						} else if (acc.settings.accTrans === 'fade') {
							$(allContainers).removeClass('open').fadeOut(acc.settings.accSpeed);
							$(activeContainer).addClass('open').fadeIn(acc.settings.accSpeed);
						} else {
							$(allContainers).removeClass('open').hide();
							$(activeContainer).addClass('open').show();
						}
						return false;

					}


				} else {
					//for tab transitions
					if ($(bothURLs).hasClass('active') && acc.settings.activeOnLoad) {
						return false;
					} else if ($(bothURLs).hasClass('active') && !acc.settings.activeOnLoad) {
						$(triggers).removeClass('active');
						if (acc.settings.tabTrans === 'slide') {
							$(allContainers).removeClass('open').slideUp(acc.settings.tabSpeed);
						} else if (acc.settings.tabTrans === 'fade') {
							$(allContainers).removeClass('open').fadeOut(acc.settings.tabSpeed);
						} else {
							$(allContainers).removeClass('open').hide();
						}
						return false;
					} else {
						$(triggers).removeClass('active');
						$(bothURLs).addClass('active');
						if (acc.settings.tabTrans === 'slide') {
							$(allContainers).removeClass('open').slideUp(acc.settings.tabSpeed);
							$(activeContainer).addClass('open').slideDown(acc.settings.tabSpeed);
						} else if (acc.settings.tabTrans === 'fade') {
							$(allContainers).removeClass('open').hide();
							$(activeContainer).addClass('open').fadeIn(acc.settings.tabSpeed);
						} else {
							$(allContainers).removeClass('open').hide();
							$(activeContainer).addClass('open').show();
						}
						return false;
					}

				}
				
			})
			
			if (acc.settings.resizeCheck) {
				$(window).resize(resize);
			}
			
		}
		
		var firstSetActive = function() {

			$('.' + acc.settings.controls + ' li:first a, .' + acc.settings.accordion + ' li:first > a').addClass('active');
			$('.' + acc.settings.accordion + ' li:first > a').next('.section').addClass('open').show();
			
		}
		
		var resize = function( ) {
		
			var hasActiveTab = $('.' + acc.settings.accordion + ' .section').hasClass('open'),
				windowWidth = $(window).width();
			
			if (hasActiveTab === false && windowWidth > acc.settings.breakpoint && acc.settings.activeOnLoad) {
				
				firstSetActive();
			
			}
			
		}
		
		init();
		
		// returns the current jQuery object
		return this;
	
	};
	
})( jQuery );
