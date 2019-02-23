jQuery(document).ready(function ($) {

    var $active = false;

    window.onhashchange = function () {
        if(window.location.hash.indexOf('realisation-') < 0){
            return true;
        }

        var $work = $(window.location.hash);

        if($work.length < 1 || $work.hasClass('active')){
            return true;
        }

        var $detail = $work.parent().nextAll('.row-detail:first');
        var $work_detail = $('.work_detail', $work).clone();

        var showElement = function () {
            $detail.append($work_detail);
            $work_detail.slideDown();

            //Animation
            for(var i = 1; i <= 5; i++) {
                $('.stagger' + i, $work_detail).css({opacity:0, marginLeft:-20}).delay(300 + 200 * i).animate({opacity:1, marginLeft:0})
            }
            $active = $work_detail;
        }


        var hideActive = function () {
            var $el = $active;
            $active.slideUp(500, function () {
                $el.remove();
            });
        }


        var buildSlideShow = function () {
            $('.work_slideshow', $work_detail).nivoSlider({
                effect: 'boxRain',
                directionNav: false,
                controlNav: false,
                pauseTime: 4000
            });
        }



        //traitement
        $('.work').removeClass('active');
        $work.addClass('active');
        if($active) {
            hideActive();
        }
        showElement();
        buildSlideShow();


    }

    $('.work').click(function (e) {
        e.preventDefault();

        window.location.hash = $(this).attr('id');


    });


    window.onhashchange();

    if(window.location.hash) {
         var $target = $(window.location.hash);
         if($target.length > 0) {
         $target.trigger('click');
         scrollTo($target);
         }
     }
});


var scrollTo = function(cible) {
    $('html, body').animate({scrollTop: cible.offset().top}, 750);
}