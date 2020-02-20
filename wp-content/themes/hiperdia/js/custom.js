// menu
$(function () {
    $('#site-navigation').slicknav({
        prependTo: '#mobile-menu'
    });
});

//homepage slide
$("#home-slide").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    autoPlay: 5000,
    paginationSpeed: 1000,
    singleItem: true,
    pagination: true,
    stopOnHover: true,
    rewindNav: true
});

// small-head on scroll
$(function () {
    var header = $(".site-header .fixed");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            header.addClass('shadow');
        } else {
            header.removeClass('shadow');
        }
    });
});

//window pop
function windowpop(url, width, height) {
    var width,
            height,
            leftPosition,
            topPosition,
            newwindow;
    width = (width) ? width : 500;
    height = (height) ? height : 400;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    newwindow = window.open(url, 'name', 'status=no,height=' + height + ',width=' + width + ',resizable=yes,left=' + leftPosition + ',top=' + topPosition + ',screenX=' + leftPosition + ',screenY=' + topPosition + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');
    if (window.focus)
        newwindow.focus();
    return false;
}
;

//image lightbox

$('.image-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function (openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }

});

//fit vid
$(".blogpost-content").fitVids();

//call center show
$('.site-header .fixed .phone-contact .icon').click(function () {
    $('.site-header .fixed .phone-contact .inside').slideToggle("fast");
});
//tabs

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

//facebook
(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
