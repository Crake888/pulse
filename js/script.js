$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        adaptiveWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
          {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        },
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        }
      ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__contents').removeClass('catalog__contents_active').eq($(this).index()).addClass('catalog__contents_active');
    });

    $('.catalog__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog__content').eq(i).toggleClass('catalog__content_active');
            $('.catalog__list').eq(i).toggleClass('catalog__list_active');
        })
    });

    $('.catalog__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog__content').eq(i).toggleClass('catalog__content_active');
            $('.catalog__list').eq(i).toggleClass('catalog__list_active');
        })
    });

    //modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('button.catalog__btn').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });

    $('button.catalog__btn').each(function(i) {
      $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog__subheader').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
      });
  });

  function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
};

        validateForms('#consultation-form');
        validateForms('#consultation form');
        validateForms('#order form');

        $('input[name=phone]').mask("+380 (999) 999-99-99");

    

});