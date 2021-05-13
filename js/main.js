$(function(){
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active'),
        $('.header__inner').toggleClass('header__inner-active'),
            $('.main__box').toggleClass('main__box-active'),
            $('.main__wrapper').toggleClass('main__wrapper-active')
    });
});