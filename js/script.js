$(document).ready(function(){
	$('.click').click(function() {            
    var src = $(this).children('img').first().attr('src');
    $('.walldesign').css('backgroundImage', 'url('+src+')');
    $('.closeclass').click();
});
});