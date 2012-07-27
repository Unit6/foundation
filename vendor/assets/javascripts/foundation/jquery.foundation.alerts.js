(function($, window, undefined) {
		  
	var document = window.document;
	
	$.fn.foundationAlerts = function(options) {	
	
		var settings = $.extend({callback: $.noop}, options);
		
		$(document).on('click.fdtn', '.alert-box a.close', function(event) {
			event.preventDefault();
			
			$(this).closest('.alert-box').fadeOut(function(event) {
				$(this).remove();				
				settings.callback(); // Do something else after the alert closes
			});
		});		
	};
	
}(jQuery, window));
