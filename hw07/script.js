'use strict';

const productsDivElem = document.querySelector('.products__middle');

hw07data.forEach(item => productsDivElem.insertAdjacentHTML('beforeend', `   
<div class="products__middle-card">
    <div class="products__middle-card-content">
        <img class="products__middle-card-image" src="${item.src}" alt="${item.alt}">
        <div class="products__middle-card-hover">
            <div class="products__middle-card-hover-cnt" data-prod = "${item.id}">
                <img class="products__middle-card-hover-cnt-img" src="./img/cart.svg" alt="cart image">
                <p class="products__middle-card-hover-cnt-txt">Add to Cart</p>
            </div>
        </div>
        <div class="products__middle-texts">
            <h4 class="products__middle-h4">${item.title}</h4>
            <p class="products__middle-p">${item.text}</p>
            <h3 class="products__middle-price">$${Number.parseInt(item.price).toFixed(2)}</h3>
        </div>
    </div>
</div>
    `)
);

productsDivElem.addEventListener('click', (e) => {
    if (e.target.attributes.class.nodeValue.startsWith('products__middle-card-hover-cnt')){
        let productId = 0;
        if (e.target.attributes.class.nodeValue === 'products__middle-card-hover-cnt') {
            productId = +e.target.dataset['prod']-1;
        } else {
            productId = +e.target.parentElement.dataset['prod']-1;
        }
        const item  = hw07data[productId];
        const cartDivElem = document.querySelector('.cart');
        if (!cartDivElem.firstElementChild) {
                cartDivElem.insertAdjacentHTML('beforeend', '<h3 class="cart__title-h3">Cart items</h3><div class="cart__cart">\
            <div class="cart__cart-items"></div></div>');
            cartDivElem.style.display = 'block';
        }
        const newCartItem = document.createElement('div');
        newCartItem.innerHTML = `<div class="cart__item">
        <img src="${item.src}" alt="${item.alt}" class="cart__item-img">
        <div class="cart__item-details" data-id="${item.id}">   
            <h3 class="cart__item-name">${item.title}</h3>
            <p class="cart__item-price">Price:<span class="cart__item-price-number">$${Number.parseInt(item.price).toFixed(2)}</span></p>
            <p class="cart__item-color">Color:<span class="cart__item-color-name">${item.color}</span></p>
            <p class="cart__item-size">Size:<span class="cart__item-size-name">${item.size}</span></p>
            <label class="cart__item-quantity">Quantity:<span></span><input class="cart__item-quantity-numbers" type="text" inputmode="numeric" minlength="1" maxlength="2" size="2" value="${item.quantity}"></label>
            <div class="cart__item-close">
                <div><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.25 9 17.53 2.72C17.83 2.42 18 2.01 18 1.59 18 1.17 17.83.77 17.53.47 17.23.17 16.83 0 16.41 0 15.99 0 15.58.17 15.28.47L9 6.75 2.72.47C2.42.17 2.01 0 1.59 0 1.17 0 .76.17.47.47.17.76 0 1.17 0 1.59 0 2.01.17 2.42.47 2.72L6.75 9 .47 15.28C.17 15.58 0 15.99 0 16.41 0 16.83.17 17.24.47 17.53.76 17.83 1.17 18 1.59 18 2.01 18 2.42 17.83 2.72 17.53L9 11.25 15.28 17.53C15.58 17.83 15.99 18 16.41 18 16.83 18 17.24 17.83 17.53 17.53 17.83 17.24 18 16.83 18 16.41 18 15.99 17.83 15.58 17.53 15.28L11.25 9Z"
                        fill="#575757" />
                </svg>
                </div></div>
            </div>
        </div>`;
        // cartItemsElem.insertAdjacentHTML('beforeend',``);
        newCartItem.querySelector('.cart__item-close').addEventListener('click', cartItemCloseHandler);
        document.querySelector('.cart__cart-items').append(newCartItem);
    }
});

function cartItemCloseHandler(event) {
    event.target.closest('.cart__item').remove();
    if (!document.querySelector('.cart__item')) {
        document.querySelector('.cart__cart').remove();
        document.querySelector('.cart__title-h3').remove();
        document.querySelector('.cart').style.display = 'none';
    }
}