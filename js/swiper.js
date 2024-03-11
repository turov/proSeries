const productSliders = document.querySelectorAll('.product-slider');

if (productSliders.length) {
    productSliders.forEach(slider => {
        const swiper = new Swiper(slider, {
            direction: 'horizontal',
            loop: true,
            autoHeight: true,
            centeredSlides: true,
            slidesPerView: 1.3,
            spaceBetween: 16,
            pagination: {
                el: slider.nextElementSibling.querySelector('.popular-products__pagination'),
            },
            navigation: {
                nextEl: slider.nextElementSibling.querySelector('.popular-products__next'),
                prevEl: slider.nextElementSibling.querySelector('.popular-products__prev'),
            },
            breakpoints: {
                1158: {
                    centeredSlides: false,
                    slidesPerView: 4,
                    spaceBetween: 32,
                }
            }
        });
    })
}

// const swiper = new Swiper('.popular-products__slider', {
//     direction: 'horizontal',
//     loop: true,
//     autoHeight: true,
//     centeredSlides: true,
//     slidesPerView: 1.3,
//     spaceBetween: 16,
//     pagination: {
//         el: '.popular-products__pagination',
//     },
//     navigation: {
//         nextEl: '.popular-products__next',
//         prevEl: '.popular-products__prev',
//     },
//     breakpoints: {
//         1158: {
//             centeredSlides: false,
//             slidesPerView: 4,
//             spaceBetween: 32,
//         }
//     }
// });

if (document.querySelector('.swiperVideo')) {
    const swiper2 = new Swiper('.swiperVideo', {
        direction: 'horizontal',
        loop: true,
        autoHeight: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.video-slider__pagination',
        },
        navigation: {
            nextEl: '.video-slider__next',
            prevEl: '.video-slider__prev',
        },
        breakpoints: {
            1158: {
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 32,
            }
        }
    });
}

if (document.querySelector('.reviews__slider')) {
    const swiper2 = new Swiper('.reviews__slider', {
        direction: 'horizontal',
        loop: true,
        autoHeight: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 19,
        pagination: {
            el: '.reviews__pagination',
        },
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
    });
}