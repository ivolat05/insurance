$(function(){
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active'),
        $('.header__inner').toggleClass('header__inner-active'),
            $('.main__box-conteiner').toggleClass('main__box-active')
    });


    //pop-up
    $('.pop__up-one').click((event) => {
        $('.pop-up-one').toggleClass('active-one')           
    });
    $('.pop__up-two').click((event) => {
        $('.pop-up-two').toggleClass('active-two')           
    });
    $('.pop__up-three').click((event) => {
        $('.pop-up-three').toggleClass('active-three')           
    });
    $('.pop__up-four').click((event) => {
        $('.pop-up-four').toggleClass('active-four')           
    });
    $('.pop__up-five').click((event) => {
        $('.pop-up-five').toggleClass('active-five')           
    });
    $('.pop__up-six').click((event) => {
        $('.pop-up-six').toggleClass('active-six')           
    });
    $('.pop__up-seven').click((event) => {
        $('.pop-up-seven').toggleClass('active-seven')           
    });
    $('.pop__up-eight').click((event) => {
        $('.pop-up-eight').toggleClass('active-eight')           
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

    // accordion

    const acc = document.getElementsByClassName("accordion");
    

        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                    if (panel.style.maxHeight){
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
            });
        }
    
    
    //form-active
    $('.data__add-one').click((event) => {
        $('.data__add-one-one').toggleClass('data__btn-deactive'),
            $('.data__two').toggleClass('data__btn-active') 
    });
    $('.data__add-two').click((event) => {
        $('.data__add-two-two').toggleClass('data__btn-deactive'),
            $('.data__three').toggleClass('data__btn-active') 
    });
    $('.data__add-three').click((event) => {
        $('.data__add-three-three').toggleClass('data__btn-deactive'),
            $('.data__four').toggleClass('data__btn-active') 
    });
    $('.data__add-four').click((event) => {
        $('.data__add-four-four').toggleClass('data__btn-deactive'),
            $('.data__five').toggleClass('data__btn-active') 
    });

    // form-deactive
    $('.data__dell-btn-one').click((event) => {
        $('.data__add-one-one').removeClass('data__btn-deactive'),
            $('.data__two').removeClass('data__btn-active') 
    });
    $('.data__dell-btn-two').click((event) => {
        $('.data__add-two-two').removeClass('data__btn-deactive'),
            $('.data__three').removeClass('data__btn-active') 
    });
    $('.data__dell-btn-three').click((event) => {
        $('.data__add-three-three').removeClass('data__btn-deactive'),
            $('.data__four').removeClass('data__btn-active') 
    });
    $('.data__dell-btn-four').click((event) => {
        $('.data__add-four-four').removeClass('data__btn-deactive'),
            $('.data__five').removeClass('data__btn-active') 
    });


    // form Step-by-step
    $('.form').stepy({
        block: true 
    });
});