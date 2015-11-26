$(document).ready(function(){

	$('#heading').mouseenter(function(){
		$('#heading').fadeTo('slow', 1);
	});
	$('#heading').mouseleave(function(){
		$('#heading').fadeTo('slow', 0.9);
	});




});


$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });
    $('.panel').click(function(){
        $('.panel').slideToggle('slow');
    
    });

    $('#keystat1').mouseenter(function(){
    	$('#keystat1').animate({ 'zoom': 1.2 }, 400);
    });

    $('#keystat1').mouseleave(function(){
    	$('#keystat1').animate({ 'zoom': 1 }, 400);
    });

    $('#keystat2').mouseenter(function(){
    	$('#keystat2').animate({ 'zoom': 1.2 }, 400);
    });

    $('#keystat2').mouseleave(function(){
    	$('#keystat2').animate({ 'zoom': 1 }, 400);
    });

    $('.keystat3').mouseenter(function(){
    	$('.keystat3').animate({ 'zoom': 1.2 }, 400);
    });

    $('.keystat3').mouseleave(function(){
    	$('.keystat3').animate({ 'zoom': 1 }, 400);
    });

    $('.keystat4').mouseenter(function(){
    	$('.keystat4').animate({ 'zoom': 1.2 }, 400);
    });

    $('.keystat4').mouseleave(function(){
    	$('.keystat4').animate({ 'zoom': 1 }, 400);
    });
    $('.keystat5').mouseenter(function(){
    	$('.keystat5').animate({ 'zoom': 1.2 }, 400);
    });

    $('.keystat5').mouseleave(function(){
    	$('.keystat5').animate({ 'zoom': 1 }, 400);
    });
    $('.keystat6').mouseenter(function(){
    	$('.keystat6').animate({ 'zoom': 1.2 }, 400);
    });

    $('.keystat6').mouseleave(function(){
    	$('.keystat6').animate({ 'zoom': 1 }, 400);
    });
    $('.keystat7').mouseenter(function(){
    	$('.keystat7').animate({ 'zoom': 1.2 }, 400);
    });

    $('.keystat7').mouseleave(function(){
    	$('.keystat7').animate({ 'zoom': 1 }, 400);
    });

});