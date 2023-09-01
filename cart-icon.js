import listProductsDetail from "./data.js";
function updateQuantityIcon() {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    let lengthProduct = document.querySelector(".header__cart-notice");
    basket = basket.filter((item) => {
        return item.quantity > 0;
    });
    lengthProduct.innerHTML = basket.length > 0 ? basket.length : 0;
}

function handlerCartIcon() {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    basket = basket.filter((item) => {
        return item.quantity > 0;
    });
    const header__cart_list = document.querySelector(".header__cart-list");
    if (basket.length < 1) {
        header__cart_list.innerHTML = `
        <img
            src="./assets/img/no_cart.png"
            alt=""
            class="header__cart--no-cart-img"
        />
        <span class="header__cart-list--no-cart-msg"
            >Chưa có sản phẩm</span  >
        `;
    } else {
        header__cart_list.innerHTML = `
        <h3 class="header__cart-heading">
            Sản phẩm đã thêm
        </h3>
        <ul class="header__cart--list-item">
            
        </ul>
        <a
            href="./cart.html"
            class="btn btn--primary header__cart-view-cart"
            >Xem giỏ hàng
        </a>
        `;

        const cart_list_item = document.querySelector(
            ".header__cart--list-item"
        );
        cart_list_item.innerHTML = basket
            .map(function (x) {
                let search = listProductsDetail.find((item) => {
                    return item.id === x.id;
                });
                let { name, image, new_price } = search;
                let { id, quantity } = x;
                return `
            <li class="header__cart-item" id="header__cart-item-${id}">
                <img
                    src="${image}"
                    class="header__cart-img"
                    alt=""
                />
                <div
                    class="header__cart-item-info"
                >
                    <div
                        class="header__cart-item-head"
                    >
                        <h5
                            class="header__cart-item-name"
                        >
                            ${name}
                        </h5>
                        <div
                            class="header__cart-item-price-wrap"
                        >
                            <span
                                class="header__cart-item-price"
                                >${new_price}</span
                            >
                            <span
                                class="header__cart-item-muntiple"
                                >x</span
                            >
                            <span
                                class="header__cart-item-amount"
                                >
                                ${quantity}
                            </span
                            >
                        </div>
                    </div>
                    <div
                        class="header__cart-item-body"
                    >
                        <span
                            class="header__cart-item-description"
                            >Hight : 36cm</span
                        >
                        <span
                            class="header__cart-item-remove"
                        
                            >Xóa</span
                        >
                    </div>
                </div>
            </li>           
            `;
            })
            .join("");
    }
}

export { handlerCartIcon, updateQuantityIcon };
