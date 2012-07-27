(function($, window, undefined) {
	var document = window.document;
  
	$.fn.foundationButtons = function(options) {  
	
		// Prevent event propagation on disabled buttons
		$(document).on('click.fndtn', '.button.disabled', function(event) {
			event.preventDefault();
		});
		
		$('.button.dropdown > ul', this).addClass('no-hover');
		
		$(document).on('click.fndtn', '.button.dropdown', function(event) {
			event.stopPropagation();
		});
		
		$(document).on('click.fndtn', '.button.dropdown.split span', function(event) {
			event.preventDefault();
			$('.button.dropdown', this).not($(this).parent()).children('ul').removeClass('show-dropdown');
			$(this).siblings('ul').toggleClass('show-dropdown');
		});
		
		$('.button.dropdown', this).not('.split').on('click.fndtn', function(event) {
			$('.button.dropdown', this).not(this).children('ul').removeClass('show-dropdown');
			$(this).children('ul').toggleClass('show-dropdown');
		});
		
		$('body, html').on('click.fndtn', function(event) {
			$('.button.dropdown ul').removeClass('show-dropdown');
		});
    
		// Positioning the Flyout List
		var normalButtonHeight  = $('.button.dropdown:not(.large):not(.small):not(.tiny)', this).outerHeight() - 1,
			largeButtonHeight   = $('.button.large.dropdown', this).outerHeight() - 1,
			smallButtonHeight   = $('.button.small.dropdown', this).outerHeight() - 1,
			tinyButtonHeight    = $('.button.tiny.dropdown', this).outerHeight() - 1;
		
		$('.button.dropdown:not(.large):not(.small):not(.tiny) > ul', this).css('top', normalButtonHeight);
		$('.button.dropdown.large > ul', this).css('top', largeButtonHeight);
		$('.button.dropdown.small > ul', this).css('top', smallButtonHeight);
		$('.button.dropdown.tiny > ul', this).css('top', tinyButtonHeight);
		
		$('.button.dropdown.up:not(.large):not(.small):not(.tiny) > ul', this).css('top', 'auto').css('bottom', normalButtonHeight - 2);
		$('.button.dropdown.up.large > ul', this).css('top', 'auto').css('bottom', largeButtonHeight - 2);
		$('.button.dropdown.up.small > ul', this).css('top', 'auto').css('bottom', smallButtonHeight - 2);
		$('.button.dropdown.up.tiny > ul', this).css('top', 'auto').css('bottom', tinyButtonHeight - 2);
	
	};
	
}(jQuery, window));
