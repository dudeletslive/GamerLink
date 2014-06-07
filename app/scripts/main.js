// $(document).ready(function() {
// 	var paneTwo = $('#paneTwo');
// 	var paneOne = $('#paneOne');
// 	$(paneTwo).transition({
// 		perspective: '2500px',
// 		rotateY: '-180deg',
// 		opacity: 0
// 	});
// 	$('a#scroll').click(function() {
// 		$(paneTwo).transition({
// 			perspective: '2500px',
// 			rotateY: '0',
// 			opacity: 1
// 		});
// 		$(paneOne).transition({
// 			perspective: '2500px',
// 			rotateY: '180deg',
// 			opacity: 0
// 		});
// 	});
// 	$(paneOne).click(function() {
// 		$(this).transition({
// 			perspective: '2500px',
// 			rotateY: '180deg',
// 			opacity: 0
// 		});
// 		$(paneTwo).transition({
// 			perspective: '2500px',
// 			rotateY: '0',
// 			opacity: 1
// 		});
// 	});
// });
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});