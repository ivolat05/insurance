$(function(){
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active'),
        $('.header__inner').toggleClass('header__inner-active'),
            $('.main__box-conteiner').toggleClass('main__box-active')
           
    });

    // scroll table
    const scrollStart = $('#scrollStart').offset().top,
           scrollFinish = $('#scrollFinish').offset().top,
            navHeiht = $('#column__height').height();

    
    
    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();
        
        if (scrolled > scrollStart) {
            // fixed head
            $('#scrollStart').addClass('table__line-fixed');
            $('#line__margin').css({ marginBottom: navHeiht });
        }  else {
            // not fixed  head
            $('#scrollStart').removeClass('table__line-fixed');
            $('#line__margin').css({ marginBottom: 0});
        }
        if (scrolled > scrollFinish) {
            $('#scrollStart').removeClass('table__line-fixed');
            $('#line__margin').css({ marginBottom: 0});
        }
    })
});