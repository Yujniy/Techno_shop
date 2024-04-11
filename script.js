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
                        selectCityInPopup(city);

                        const cityLists = document.querySelectorAll('.desktop-city-list');
                        cityLists.forEach(cityList => {
                            const cityItems = cityList.querySelectorAll('li');
                            cityItems.forEach(item => {
                                item.addEventListener('click', function () {
                                    const selectedCity = this.textContent;
                                    document.getElementById('user-city').textContent = selectedCity;
                                    selectCityInPopup(selectedCity);
                                    closeDesktopPopup();
                                });
                            });
                        });

                        const mobileCityList = document.querySelector('.city-list');
                        const mobileCityItems = mobileCityList.querySelectorAll('li');
                        mobileCityItems.forEach(item => {
                            item.addEventListener('click', function () {
                                const selectedCity = this.textContent;
                                document.getElementById('user-city').textContent = selectedCity;
                                selectCityInPopup(selectedCity);
                                closeLocationPopup();
                            });
                        });
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

function closeLocationPopup() {
    const popup = document.getElementById('location-popup');
    popup.classList.remove('active');
    document.body.classList.remove('no-scroll');
    setTimeout(function () {
        popup.style.display = 'none';
    }, 500); 
}


function selectCityInPopup(city) {
    const cityItems = document.querySelectorAll('.city-list li, .desktop-city-list li');
    cityItems.forEach(item => {
        if (item.textContent.trim() === city) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });

    const selectedCityElement = document.querySelector('.city-list li.selected, .desktop-city-list li.selected');
    if (selectedCityElement) {
        selectedCityElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}



function closeDesktopPopup() {
    const desktopPopup = document.getElementById('desktop-location-popup');
    desktopPopup.style.display = 'none';
}

    getUserCity();
});

document.addEventListener('DOMContentLoaded', function () {
    const locationWrapper = document.querySelector('.navbar-location-wrapper');
    const popup = document.getElementById('location-popup');
    const popupContent = popup.querySelector('.popup-content');
    const popupHandle = popup.querySelector('.popup-handle');
    const cityList = document.querySelector('.city-list');
    let isDragging = false;
    let startY;
    let offsetY = 0;

    // Проверяем, является ли устройство мобильным
    const isMobileDevice = window.innerWidth < 768;

    if (isMobileDevice) {
locationWrapper.addEventListener('click', function () {
    popup.style.display = 'block';
    document.body.classList.add('no-scroll'); // Добавляем класс 'no-scroll' к <body>
    setTimeout(function () {
        popup.classList.add('active');
        popupContent.style.transform = 'translateY(0)';
    }, 50);
});




cityList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const selectedCity = event.target.textContent;
        document.getElementById('user-city').textContent = selectedCity;
        selectCityInPopup(selectedCity); // Добавьте эту строку
        popup.classList.remove('active');
        popupContent.style.transform = 'translateY(100%)';
        setTimeout(function () {
            popup.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 300);
    }
});



        const popupSwipeArea = document.querySelector('.popup-swipe-area');

        // Обработчик события touchstart на .popup-swipe-area
        popupSwipeArea.addEventListener('touchstart', function (event) {
            isDragging = true;
            startY = event.touches[0].clientY;
            popupHandle.style.transition = 'width 0.3s ease';
            popupHandle.style.width = '60px';

            // Блокировка перезагрузки страницы при смахивании вниз
            if (popup.classList.contains('active')) {
                event.preventDefault();
            }
        }, { passive: false });

        // Обработчик события touchmove на .popup-swipe-area
        popupSwipeArea.addEventListener('touchmove', function (event) {
            if (!isDragging) return;
            const currentY = event.touches[0].clientY;
            const deltaY = currentY - startY;
            offsetY = Math.min(Math.max(offsetY + deltaY, 0), window.innerHeight);
            popupContent.style.transform = `translateY(${offsetY}px)`;
            startY = currentY;
        });

        // Обработчик события touchend на .popup-swipe-area
popupSwipeArea.addEventListener('touchend', function () {
    isDragging = false;
    popupHandle.style.transition = 'width 0.3s ease';
    popupHandle.style.width = '40px';
    if (offsetY > 100) {
        popupContent.style.transition = 'transform 0.3s ease';
        popupContent.style.transform = 'translateY(100%)';
        popup.classList.remove('active');
        setTimeout(function () {
            popup.style.display = 'none';
            document.body.classList.remove('no-scroll'); // Удаляем класс 'no-scroll' из <body>
            offsetY = 0;
            popupContent.style.transition = '';
        }, 300);
    } else {
        popupContent.style.transition = 'transform 0.3s ease';
        popupContent.style.transform = 'translateY(0)';
        setTimeout(function () {
            offsetY = 0;
            popupContent.style.transition = '';
        }, 300);
    }
});

const popupClose = document.querySelector('.popup-close');

popupClose.addEventListener('click', function () {
  popupContent.style.transition = 'transform 0.3s ease';
  popupContent.style.transform = 'translateY(100%)';
  popup.classList.remove('active');
  setTimeout(function () {
    popup.style.display = 'none';
    document.body.classList.remove('no-scroll');
    popupContent.style.transition = '';
  }, 300);
});


        // Блокировка перезагрузки страницы при смахивании вниз по верхней части попапа
        let initialTouchY = 0;
        let currentTouchY = 0;

        const popupHandle = document.querySelector('.popup-handle');

        function isSwipeAreaOrHandle(target) {
            return target === popupSwipeArea || target === popupHandle;
        }

        popupContent.addEventListener('touchstart', function (event) {
            if (popup.classList.contains('active') && isSwipeAreaOrHandle(event.target)) {
                initialTouchY = event.touches[0].clientY;
            }
        });

        popupContent.addEventListener('touchmove', function (event) {
            if (popup.classList.contains('active') && isSwipeAreaOrHandle(event.target)) {
                currentTouchY = event.touches[0].clientY;
                const deltaY = currentTouchY - initialTouchY;

                if (deltaY > 0) {
                    event.preventDefault();
                }
            }
        }, { passive: false });



    }
});



document.addEventListener('DOMContentLoaded', function () {
    const locationWrapper = document.querySelector('.navbar-location-wrapper');
    const desktopPopup = document.getElementById('desktop-location-popup');
    const closeDesktopPopupButton = document.getElementById('close-desktop-popup');
    const desktopCityList = document.querySelector('.desktop-city-list');

locationWrapper.addEventListener('click', function () {
    desktopPopup.classList.add('active');
    document.body.classList.add('no-scroll'); // Добавляем класс 'no-scroll' к <body>
});




document.addEventListener('click', function (event) {
    if (!event.target.closest('.desktop-popup-content') && !event.target.closest('.navbar-location-wrapper')) {
        desktopPopup.classList.remove('active');
        setTimeout(function () {
            document.body.classList.remove('no-scroll');
        }, 300);
    }
});

const desktopPopupClose = document.querySelector('.desktop-popup-close');

desktopPopupClose.addEventListener('click', function () {
    desktopPopup.classList.remove('active');
    setTimeout(function () {
        document.body.classList.remove('no-scroll');
    }, 300);
});


desktopCityList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const selectedCity = event.target.textContent;
        document.getElementById('user-city').textContent = selectedCity;
        desktopPopup.classList.remove('active');
        setTimeout(function () {
            document.body.classList.remove('no-scroll');
        }, 30); 
    }
});

const cartCountTop = document.querySelector('.cart-count-top');
updateCartCountTopVisibility();



function updateCartCountTop(count) {
    cartCountTop.textContent = count;
}

function incrementCartCountTop() {
  let currentCount = parseInt(cartCountTop.textContent);
  updateCartCountTop(currentCount + 1);
  updateCartCountTopVisibility();
}

function decrementCartCountTop() {
  let currentCount = parseInt(cartCountTop.textContent);
  updateCartCountTop(currentCount - 1);
  updateCartCountTopVisibility();
}



function toggleCartButton(button) {
    if (button.classList.contains('in-cart')) {
        button.classList.remove('in-cart');
        button.textContent = 'Купить';
        decrementCartCountTop();
    } else {
        button.classList.add('in-cart');
        button.textContent = 'В корзине';
        incrementCartCountTop();
    }
}

function updateCartCountTopVisibility() {
  const count = parseInt(cartCountTop.textContent);
  if (count === 0) {
    cartCountTop.style.display = 'none';
  } else {
    cartCountTop.style.display = 'flex';
  }
}


const buyButton = document.querySelector('.buy-button');
buyButton.addEventListener('click', function () {
    toggleCartButton(this);
});

const productBuyButtons = document.querySelectorAll('.iphone-buy-button, .Vivo-buy-button, .Realme-buy-button, .Samsung-buy-button');
productBuyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        toggleCartButton(this);
    });
});

const sliderBuyButtons = document.querySelectorAll('.realme-slider .realme-buy-button');
sliderBuyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        toggleCartButton(this);
    });
});

const mobileSliderBuyButtons = document.querySelectorAll('.realme-slider-mobile .realme-buy-button');
mobileSliderBuyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        toggleCartButton(this);
    });
});

const iphoneBuyButtonSlider = document.querySelector('.iphone-buy-button-slider');
iphoneBuyButtonSlider.addEventListener('click', function () {
    toggleCartButton(this);
});

const vivoBuyButtonSlider = document.querySelector('.vivo-buy-button-slider');
vivoBuyButtonSlider.addEventListener('click', function () {
    toggleCartButton(this);
});

const realmeBuyButtonSlider = document.querySelector('.realme-buy-button-slider');
realmeBuyButtonSlider.addEventListener('click', function () {
    toggleCartButton(this);
});

const samsungBuyButtonSlider = document.querySelector('.samsung-buy-button-slider');
samsungBuyButtonSlider.addEventListener('click', function () {
    toggleCartButton(this);
});


function showNotification(message, type) {
  const notificationContainer = document.querySelector('.notification-container');
  const notification = document.createElement('div');
  notification.classList.add('notification');
  if (type === 'removed') {
    notification.classList.add('removed');
  }
  notification.textContent = message;
  notificationContainer.appendChild(notification);

  setTimeout(function () {
    notification.classList.add('show');
  }, 100);

  setTimeout(function () {
    notification.classList.remove('show');
    setTimeout(function () {
      notificationContainer.removeChild(notification);
    }, 300);
  }, 3000);
}

function updateCartCountTopVisibility() {
    const count = parseInt(cartCountTop.textContent);
    if (count === 0) {
        cartCountTop.style.display = 'none';
    } else {
        cartCountTop.style.display = 'flex';
    }
}


const buyButtons = document.querySelectorAll('.buy-button, .iphone-buy-button, .Vivo-buy-button, .Realme-buy-button, .Samsung-buy-button, .realme-slider .realme-buy-button, .realme-slider-mobile .realme-buy-button, .iphone-buy-button-slider, .vivo-buy-button-slider, .realme-buy-button-slider, .samsung-buy-button-slider');
buyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (this.classList.contains('in-cart')) {
            showNotification('Товар добавлен в корзину');
        } else {
            showNotification('Товар удален из корзины', 'removed');
        }
    });
});


});
