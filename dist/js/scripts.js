/*!
 * jquery.basicPopup
 * 
 * 
 * @author Lucas Dasso
 * @version 1.0.0
 * Copyright 2015. ISC licensed.
 */
$(document).ready(function(){

		
	$('#btn-open').click(function(){	
		
		$.basicpopup({
			content: $('#popup-content').html()
		});
		
	});

});