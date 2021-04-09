// wish btn
const wishBtn = document.querySelectorAll('.wish_item');

wishBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentWishBtn = item;

        wishBtn.forEach(function(item) {
            item.classList.remove('hidden');
        });

        currentWishBtn.classList.add('hidden');
    });
});
// tab header_shoe

const tabsBtn = document.querySelectorAll('.model_box');
const tabsItems = document.querySelectorAll('.header_shoe');


tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});

//dropdown btn
const dropButton = document.querySelector('.dropbtn')
const dropMenu = document.querySelector('.dropdown_menu')

const openMenu = function() {
    dropMenu.classList.toggle('active')
}
dropButton.addEventListener('click', openMenu)

// cart

const buttonCart = document.querySelector('.button_cart');
const cardPopup = document.querySelector('.card_popup');
const cardOverlay = document.querySelector('.card_popup_background');

const openModal = function() {
    cardPopup.classList.add('active')
};
const closeModal = function() {
    cardPopup.classList.remove('active')
};

buttonCart.addEventListener('click', openModal)
cardOverlay.addEventListener('click', closeModal)

// scroll smooth

const scrollLinks = document.querySelectorAll('nav-link');

for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        const id = scrollLinks[i].getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}