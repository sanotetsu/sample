(function($) {
	var defaults = {
		"width":500,
		"speed":3000
	};
	$.fn.marqueePlugin = function(options){
		var setting = $.extend(defaults,options);
		var textWidth = $("#js p").width();
		$("#js").css("width",setting["width"]+"px");
		$("#js p").css("margin-left",setting["width"]+"px");
		$("#js p").animate({"margin-left":-textWidth+"px"},setting["speed"],"linear",$.fn.marqueePlugin);
	}
})(jQuery);