/* Author:

*/
var rotateLogo = function(){
	$("#logo").transition({ rotate: '360deg' }, 5000, function() {
	    $(this).attr("style","");
	});
}
$(document).ready(function(){
	//ON LOAD
	rotateLogo();
	
	//ON HOVER
	$("#logo").live('mouseover', function(e) {
		rotateLogo();
	});
	
});





