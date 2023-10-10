const productsDivElem = document.querySelector('.products-middle');
console.log(productsDivElem);
console.log(hw06data);


hw06data.forEach(item =>
    productsDivElem.insertAdjacentHTML('beforeend', `
        <div class="product-card">
            <div class="product-card-content">
                <img class="product-card-image" src="${item.src}" alt="${item.alt}">
                    <div class="product-card-hover">
                        <a class="product-card-hover-cnt" href="#">
                            <img class="product-card-hover-cnt-img" src="./img/cart.svg" alt="cart image">
                            <p class="product-card-hover-cnt-txt">Add to Cart</p>
                        </a>
                    </div>
                    <div class="product-texts">
                        <h4 class="product-h4">${item.title}</h4>
                        <p class="product-p">${item.text}</p>
                        <h3 class="product-price">$${Number.parseInt(item.price).toFixed(2)}</h3>
                    </div>
                </div>
            </div>
    `)
);