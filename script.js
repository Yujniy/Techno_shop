document.addEventListener('DOMContentLoaded', function () {
    const catalogButtons = document.querySelectorAll('.catalogButton a');
    const productRectangleContainer = document.querySelector('.product-rectangle-container');
    const developmentMessageTabs = document.querySelector('.development-message-tabs');


    catalogButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const activeButton = document.querySelector('.catalogButton a.active');
            if (activeButton) {
                activeButton.classList.remove('active');
            }
            this.classList.add('active');

            if (this.textContent === 'Смартфоны') {
                document.body.classList.remove('hide-cards');
                developmentMessageTabs.style.display = 'none';
            } else {
                document.body.classList.add('hide-cards');
                developmentMessageTabs.style.display = 'block';
            }
        });
    });



    const iphoneColorImages = document.querySelectorAll('.swiper-slide .iphone-color-image');
    const iphoneMainImages = document.querySelectorAll('.swiper-slide .iphone-img-slider');

    iphoneColorImages.forEach(function (image) {
        image.addEventListener('click', function () {
            const selectedImage = this.getAttribute('data-image');
            const currentSlide = this.closest('.swiper-slide');
            const iphoneMainImage = currentSlide.querySelector('.iphone-img-slider');
            iphoneMainImage.src = selectedImage;
        });
    });

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }



    const iphoneMemoryOptions = document.querySelectorAll('.Iphone .memory-option');
    const iphonePriceValue = document.getElementById('iphone-price-value');
    const iphoneColorCircles = document.querySelectorAll('.Iphone .color-circle');
    const iphoneColorText = document.querySelector('.Iphone .color-text');
    const iphoneColorName = document.querySelector('.Iphone .color-name');

    iphoneMemoryOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            const activeOption = document.querySelector('.Iphone .memory-option.active');
            if (activeOption) {
                activeOption.classList.remove('active');
            }
            this.classList.add('active');
            const selectedPrice = parseInt(this.getAttribute('data-price'));
            iphonePriceValue.textContent = formatPrice(selectedPrice) + ' ₽';
        });
    });

    iphoneColorCircles.forEach(function (circle) {
        circle.addEventListener('click', function () {
            const activeCircle = document.querySelector('.Iphone .color-circle.active');
            if (activeCircle) {
                activeCircle.classList.remove('active');
            }
            this.classList.add('active');
            const selectedColor = this.getAttribute('data-color');
            let colorNameText = '';
            switch (selectedColor) {
                case 'sky-blue':
                    colorNameText = 'небесно-голубой';
                    break;
                case 'green':
                    colorNameText = 'зеленый';
                    break;
                case 'black':
                    colorNameText = 'тёмная ночь';
                    break;
                default:
                    colorNameText = '';
            }
            iphoneColorName.textContent = colorNameText;
        });
    });

    const vivoMemoryOptions = document.querySelectorAll('.Vivo .memory-option');
    const vivoPriceValue = document.getElementById('Vivo-price-value');
    const vivoColorCircles = document.querySelectorAll('.Vivo .color-circle');
    const vivoColorText = document.querySelector('.Vivo .color-text');
    const vivoColorName = document.querySelector('.Vivo .color-name');

    vivoMemoryOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            const activeOption = document.querySelector('.Vivo .memory-option.active');
            if (activeOption) {
                activeOption.classList.remove('active');
            }
            this.classList.add('active');
            const selectedPrice = parseInt(this.getAttribute('data-price'));
            vivoPriceValue.textContent = formatPrice(selectedPrice) + ' ₽';
        });
    });

    vivoColorCircles.forEach(function (circle) {
        circle.addEventListener('click', function () {
            const activeCircle = document.querySelector('.Vivo .color-circle.active');
            if (activeCircle) {
                activeCircle.classList.remove('active');
            }
            this.classList.add('active');
            const selectedColor = this.getAttribute('data-color');
            let colorNameText = '';
            switch (selectedColor) {
                case 'sky-blue':
                    colorNameText = 'голубой';
                    break;
                case 'green':
                    colorNameText = 'черный';
                    break;
                default:
                    colorNameText = '';
            }
            vivoColorName.textContent = colorNameText;
        });
    });

    const realmeMemoryOptions = document.querySelectorAll('.Realme .memory-option');
    const realmePriceValue = document.getElementById('Realme-price-value');

    realmeMemoryOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            const activeOption = document.querySelector('.Realme .memory-option.active');
            if (activeOption) {
                activeOption.classList.remove('active');
            }
            this.classList.add('active');
            const selectedPrice = parseInt(this.getAttribute('data-price'));
            realmePriceValue.textContent = formatPrice(selectedPrice) + ' ₽';
        });
    });
    const realmeColorCircles = document.querySelectorAll('.Realme .color-circle');
    const realmeColorText = document.querySelector('.Realme .color-text');
    const realmeColorName = document.querySelector('.Realme .color-name');

    realmeColorCircles.forEach(function (circle) {
        circle.addEventListener('click', function () {
            const activeCircle = document.querySelector('.Realme .color-circle.active');
            if (activeCircle) {
                activeCircle.classList.remove('active');
            }
            this.classList.add('active');
            const selectedColor = this.getAttribute('data-color');
            let colorNameText = '';
            switch (selectedColor) {
                case 'sky-blue':
                    colorNameText = 'темно-синий';
                    break;
                case 'green':
                    colorNameText = 'черный';
                    break;
                default:
                    colorNameText = '';
            }
            realmeColorName.textContent = colorNameText;
        });
    });

    const samsungMemoryOptions = document.querySelectorAll('.Samsung .memory-option');
    const samsungPriceValue = document.getElementById('Samsung-price-value');
    const samsungColorCircles = document.querySelectorAll('.Samsung .color-circle');
    const samsungColorText = document.querySelector('.Samsung .color-text');
    const samsungColorName = document.querySelector('.Samsung .color-name');

    samsungMemoryOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            const activeOption = document.querySelector('.Samsung .memory-option.active');
            if (activeOption) {
                activeOption.classList.remove('active');
            }
            this.classList.add('active');
            const selectedPrice = parseInt(this.getAttribute('data-price'));
            samsungPriceValue.textContent = formatPrice(selectedPrice) + ' ₽';
        });
    });

    samsungColorCircles.forEach(function (circle) {
        circle.addEventListener('click', function () {
            const activeCircle = document.querySelector('.Samsung .color-circle.active');
            if (activeCircle) {
                activeCircle.classList.remove('active');
            }
            this.classList.add('active');
            const selectedColor = this.getAttribute('data-color');
            let colorNameText = '';
            switch (selectedColor) {
                case 'sky-blue':
                    colorNameText = 'зеленый';
                    break;
                case 'green':
                    colorNameText = 'черный';
                    break;
                default:
                    colorNameText = '';
            }
            samsungColorName.textContent = colorNameText;
        });
    });

    // Инициализация Swiper для мобильной версии
    const mobileSwiper = new Swiper('.mobile-product-rectangle-container', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
    });

    const showMoreButton = document.querySelector('.show-more-button');
    const developmentMessageBlock = document.querySelector('.development-message-block');

    showMoreButton.addEventListener('click', function () {
        if (developmentMessageBlock.style.display === 'block') {
            developmentMessageBlock.style.display = 'none';
        } else {
            developmentMessageBlock.style.display = 'block';
        }
    });

    const mobileShowMoreButton = document.querySelector('.mobile-product-rectangle-container .show-more-button');
    const mobileDevelopmentMessageBlock = document.querySelector('.mobile-product-rectangle-container .development-message-block');

    mobileShowMoreButton.addEventListener('click', function () {
        if (mobileDevelopmentMessageBlock.style.display === 'block') {
            mobileDevelopmentMessageBlock.style.display = 'none';
        } else {
            mobileDevelopmentMessageBlock.style.display = 'block';
        }
    });

    const iphoneMemoryOptionsSlider = document.querySelectorAll('.swiper-slide.product-rectangle:nth-child(1) .memory-option-slider');
    const iphonePriceValueSlider = document.querySelector('.swiper-slide.product-rectangle:nth-child(1) .iphone-price-value-slider');

    iphoneMemoryOptionsSlider.forEach(function (option) {
        option.addEventListener('click', function () {
            const activeOption = document.querySelector('.swiper-slide.product-rectangle:nth-child(1) .memory-option-slider.active');
            if (activeOption) {
                activeOption.classList.remove('active');
            }
            this.classList.add('active');
            const selectedPrice = parseInt(this.getAttribute('data-price'));
            iphonePriceValueSlider.textContent = formatPrice(selectedPrice) + ' ₽';
        });
    });

    const vivoMemoryOptionsSlider = document.querySelectorAll('.swiper-slide.product-rectangle:nth-child(2) .memory-option-slider');
    const vivoPriceValueSlider = document.querySelector('.swiper-slide.product-rectangle:nth-child(2) .vivo-price-value-slider');

    vivoMemoryOptionsSlider.forEach(function (option) {
        option.addEventListener('click', function () {
            const activeOption = document.querySelector('.swiper-slide.product-rectangle:nth-child(2) .memory-option-slider.active');
            if (activeOption) {
                activeOption.classList.remove('active');
            }
            this.classList.add('active');
            const selectedPrice = parseInt(this.getAttribute('data-price'));
            vivoPriceValueSlider.textContent = formatPrice(selectedPrice) + ' ₽';
        });
    });

    const realmeMemoryOptionsSlider = document.querySelectorAll('.swiper-slide.product-rectangle:nth-child(3) .memory-option-slider');
    const realmePriceValueSlider = document.querySelector('.swiper-slide.product-rectangle:nth-child(3) .realme-price-value-slider');

    realmeMemoryOptionsSlider.forEach(function (option) {
        option.addEventListener('click', function () {
            const activeOption = document.querySelector('.swiper-slide.product-rectangle:nth-child(3) .memory-option-slider.active');
            if (activeOption) {
                activeOption.classList.remove('active');
            }
            this.classList.add('active');
            const selectedPrice = parseInt(this.getAttribute('data-price'));
            realmePriceValueSlider.textContent = formatPrice(selectedPrice) + ' ₽';
        });
    });

    const samsungMemoryOptionsSlider = document.querySelectorAll('.swiper-slide.product-rectangle:nth-child(4) .memory-option-slider');
    const samsungPriceValueSlider = document.querySelector('.swiper-slide.product-rectangle:nth-child(4) .samsung-price-value-slider');

    samsungMemoryOptionsSlider.forEach(function (option) {
        option.addEventListener('click', function () {
            const activeOption = document.querySelector('.swiper-slide.product-rectangle:nth-child(4) .memory-option-slider.active');
            if (activeOption) {
                activeOption.classList.remove('active');
            }
            this.classList.add('active');
            const selectedPrice = parseInt(this.getAttribute('data-price'));
            samsungPriceValueSlider.textContent = formatPrice(selectedPrice) + ' ₽';
        });
    });

    // iPhone
    const iphoneColorCirclesSlider = document.querySelectorAll('.iphone-color-circles-slider .color-circle-slider');
    const iphoneColorNameSlider = document.querySelector('.swiper-slide.product-rectangle:nth-child(1) .color-name-slider');

    iphoneColorCirclesSlider.forEach(function (circle) {
        circle.addEventListener('click', function () {
            const activeCircle = document.querySelector('.iphone-color-circles-slider .color-circle-slider.active');
            if (activeCircle) {
                activeCircle.classList.remove('active');
            }
            this.classList.add('active');
            const selectedColor = this.getAttribute('data-color');
            let colorNameText = '';
            switch (selectedColor) {
                case 'sky-blue':
                    colorNameText = 'небесно-голубой';
                    break;
                case 'green':
                    colorNameText = 'зеленый';
                    break;
                case 'black':
                    colorNameText = 'тёмная ночь';
                    break;
                default:
                    colorNameText = '';
            }
            iphoneColorNameSlider.textContent = colorNameText;
        });
    });

    // Vivo
    const vivoColorCirclesSlider = document.querySelectorAll('.vivo-color-circles-slider .color-circle-slider');
    const vivoColorNameSlider = document.querySelector('.swiper-slide.product-rectangle:nth-child(2) .color-name-slider');

    vivoColorCirclesSlider.forEach(function (circle) {
        circle.addEventListener('click', function () {
            const activeCircle = document.querySelector('.vivo-color-circles-slider .color-circle-slider.active');
            if (activeCircle) {
                activeCircle.classList.remove('active');
            }
            this.classList.add('active');
            const selectedColor = this.getAttribute('data-color');
            let colorNameText = '';
            switch (selectedColor) {
                case 'sky-blue':
                    colorNameText = 'голубой';
                    break;
                case 'black':
                    colorNameText = 'черный';
                    break;
                default:
                    colorNameText = '';
            }
            vivoColorNameSlider.textContent = colorNameText;
        });
    });

    // Realme
    const realmeColorCirclesSlider = document.querySelectorAll('.realme-color-circles-slider .color-circle-slider');
    const realmeColorNameSlider = document.querySelector('.swiper-slide.product-rectangle:nth-child(3) .color-name-slider');

    realmeColorCirclesSlider.forEach(function (circle) {
        circle.addEventListener('click', function () {
            const activeCircle = document.querySelector('.realme-color-circles-slider .color-circle-slider.active');
            if (activeCircle) {
                activeCircle.classList.remove('active');
            }
            this.classList.add('active');
            const selectedColor = this.getAttribute('data-color');
            let colorNameText = '';
            switch (selectedColor) {
                case 'dark-blue':
                    colorNameText = 'темно-синий';
                    break;
                case 'black':
                    colorNameText = 'черный';
                    break;
                default:
                    colorNameText = '';
            }
            realmeColorNameSlider.textContent = colorNameText;
        });
    });

    // Samsung
    const samsungColorCirclesSlider = document.querySelectorAll('.samsung-color-circles-slider .color-circle-slider');
    const samsungColorNameSlider = document.querySelector('.swiper-slide.product-rectangle:nth-child(4) .color-name-slider');

    samsungColorCirclesSlider.forEach(function (circle) {
        circle.addEventListener('click', function () {
            const activeCircle = document.querySelector('.samsung-color-circles-slider .color-circle-slider.active');
            if (activeCircle) {
                activeCircle.classList.remove('active');
            }
            this.classList.add('active');
            const selectedColor = this.getAttribute('data-color');
            let colorNameText = '';
            switch (selectedColor) {
                case 'dark-green':
                    colorNameText = 'темно-зеленый';
                    break;
                case 'black':
                    colorNameText = 'черный';
                    break;
                default:
                    colorNameText = '';
            }
            samsungColorNameSlider.textContent = colorNameText;
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const realmeSlider = new Swiper('.realme-slider', {
        spaceBetween: 20,
        loop: false,
        navigation: {
            nextEl: '.circle:last-child',
            prevEl: '.circle-left'
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    const realmeSliderMobile = new Swiper('.realme-slider-mobile', {
        spaceBetween: 16,
        slidesPerView: 'auto',
        centeredSlides: true,
    });

    function getUserCity() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
                        .then(response => response.json())
                        .then(data => {
                            const city = data.address.city || data.address.town || 'Неизвестный город';
                            document.getElementById('user-city').textContent = city;
                            selectCityInPopup(city); // Новая функция для выделения города в popup
                        })
                        .catch(error => {
                            console.error('Error fetching city:', error);
                        });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    function selectCityInPopup(city) {
        const cityItems = document.querySelectorAll('.city-list li');
        cityItems.forEach(item => {
            if (item.textContent.includes(city)) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }

    getUserCity();


    
});
