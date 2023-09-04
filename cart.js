import listProductsDetail from "./data.js";
let basket = JSON.parse(localStorage.getItem("data")) || [];
// todo : generalProduct
function generalProduct() {
    const cart_empty = document.querySelector(".cart__empty");
    const cart_has_product = document.querySelector(".cart--has-products");
    if (basket.length === 0) {
        cart_has_product.innerHTML = "";
        cart_empty.innerHTML = `   
        <img
            src="./assets/img/cart_empty.png"
            alt=""
            class="cart__empty-img"
            width="240"
            height="240"
        />
        <h3 class="cart__empty-heading">
            Giỏ hàng của bạn còn trống
        </h3>
        <a class="cart__empty-btn" href="./index.html">
            MUA NGAY
        </a>
        `;
    } else {
        cart_empty.innerHTML = "";
        cart_has_product.innerHTML = `<!-- ! FreeShip -->
        <div class="freeShip">
            <img src="./assets/img/freeShip.png" alt="" class="freeShip__img" />
            <p class="freeShip__desc">
                Nhấn vào mục Mã giảm giá ở cuối divang để hưởng miễn phí vận chuyển bạn
                nhé!
            </p>
        </div>
        
        <!-- ! table head -->
        <div class="table" id="table"></div>
        <!-- ! table footer -->
        <div class="table__footer">
            <div class="table__footer-voucher">
                <svg
                    fill="#ee4d2d"
                    viewBox="0 -2 23 22"
                    width="21"
                    height="20"
                    class="shopee-svg-icon icon-voucher-line"
                >
                    <g filter="url(#voucher-filter0_d)">
                        <mask id="a" fill="#fff">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                            ></path>
                        </mask>
                        <path
                            d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                            mask="url(#a)"
                        ></path>
                    </g>
                    <path
                        clip-rule="evenodd"
                        d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                    ></path>
                    <defs>
                        <filter
                            id="voucher-filter0_d"
                            x="0"
                            y="1"
                            width="20"
                            height="16"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                                in="SourceAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                            ></feColorMatrix>
                            <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow"
                            ></feBlend>
                            <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow"
                                result="shape"
                            ></feBlend>
                        </filter>
                    </defs>
                </svg>
                <span>Shopee Voucher</span>
                <a href="#!">Chọn Hoặc Nhập Mã</a>
            </div>
            <div class="table__footer-choose">
                <div class="table__head-title table__data-checkbox">
                    <input
                        type="checkbox"
                        name="head-btn"
                        id="footer-choose-btn"
                        class="table__data-checkbox-btn"
                    />
                    <label for="footer-choose-btn"></label>
                </div>
                <svg
                    fill="none"
                    viewBox="0 0 18 18"
                    width="18"
                    height="18"
                    class="shopee-svg-icon hpZGIt icon-coin-line"
                >
                    <path
                        stroke="#FFA600"
                        stroke-width="1.3"
                        d="M17.35 9A8.35 8.35 0 11.65 9a8.35 8.35 0 0116.7 0z"
                    ></path>
                    <path
                        fill="#FFA600"
                        fill-rule="evenodd"
                        stroke="#FFA600"
                        stroke-width=".2"
                        d="M6.86 4.723c-.683.576-.998 1.627-.75 2.464.215.725.85 1.258 1.522 1.608.37.193.77.355 1.177.463.1.027.2.051.3.08.098.03.196.062.294.096.06.021.121.044.182.067.017.006.107.041.04.014-.07-.028.071.03.087.037.286.124.56.27.82.44.114.076.045.024.151.111a2.942 2.942 0 01.322.303c.087.093.046.042.114.146.18.275.245.478.235.8-.01.328-.14.659-.325.867-.47.53-1.232.73-1.934.696a4.727 4.727 0 01-1.487-.307c-.45-.182-.852-.462-1.242-.737-.25-.176-.643-.04-.788.197-.17.279-.044.574.207.75.753.532 1.539.946 2.474 1.098.885.144 1.731.124 2.563-.224.78-.326 1.416-.966 1.607-1.772.198-.838-.023-1.644-.61-2.29-.683-.753-1.722-1.17-2.706-1.43a4.563 4.563 0 01-.543-.183c.122.048-.044-.02-.078-.035a4.77 4.77 0 01-.422-.212c-.594-.338-.955-.722-.872-1.369.105-.816.757-1.221 1.555-1.28.808-.06 1.648.135 2.297.554.614.398 1.19-.553.58-.947-1.33-.86-3.504-1.074-4.77-.005z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <span>Shoppe Xu</span>
                2000₫
            </div>
        
            <div class="table__footer-control">
                <div class="table__footer-control-left">
                    <div class="table__head-title table__data-checkbox">
                        <input
                            type="checkbox"
                            name="head-btn"
                            id="all-btn"
                            class="table__data-checkbox-btn"
                        />
                        <label for="all-btn"></label>
                    </div>
                    <button type="button" class="table__footer-all">
                        Chọn Tất Cả (${basket.length})
                    </button>
                    <button type="button" class="table__footer-delete">Xóa Tất Cả</button>
                </div>
                <div class="table__footer-control-right">
                    <div class="table__footer-control-pay">
                        Tổng thanh toán (${basket.length} Sản phẩm) :
                        <span class="table__footer-price color-primary">₫0</span>
                    </div>
                    <button type="button" class="table__footer-control-pay-btn">
                        Mua Hàng
                    </button>
                </div>
            </div>
        </div>`;
        const table = document.getElementById("table");

        table.innerHTML = basket
            .map((item) => {
                let { id, quantity } = item;
                let search = listProductsDetail.find((x) => {
                    return x.id === item.id;
                });
                let { name, discount, image, old_price, new_price } = search;
                return `
                <div class="table__data-product" id="${id}">
                <div class="table__head">
                    <div class="table__head-title table__data-checkbox">
                        <input
                            type="checkbox"
                            name="head-btn"
                            id="head-btn-${id}"
                            class="table__data-checkbox-btn"
                        />
                        <label for="head-btn-${id}"></label>
                    </div>
                    <div class="table__head-title table__data-name">Sản Phẩm</div>
                    <div class="table__head-title table__data-price">Đơn Giá</div>
                    <div class="table__head-title table__data-quantity">Số Lượng</div>
                    <div class="table__head-title table__data-money">Số Tiền</div>
                    <div class="table__head-title table__data-clear">Thao Tác</div>
                </div>
                <div class="table__body">
                    <div class="table__row">
                        <div class="table__head-title table__data-checkbox">
                            <input
                                type="checkbox"
                                name="head-btn"
                                id="row-btn"
                                class="table__data-checkbox-btn"
                            />
                            <label for="row-btn"></label>
                        </div>
                        <div class="table__data table__data-name">
                            <img src="${image}" alt="" class="table__data-img" />
                            <div class="table__data-detail">
                                <span class="data-name"
                                    >mô hình ${name} chat luong cao sieu dep size 70cm
                                    Figure</span
                                >
                                <img
                                    src="./assets/img/sale1.png"
                                    alt=""
                                    class="data-sale"
                                />
                            </div>
                        </div>
                        <div class="table__data table__data-price">
                            <p class="data-price-old">₫${old_price}.000</p>
                            <p class="data-price-new">₫${new_price}.000</p>
                        </div>
                        <div class="table__data table__data-quantity">
                            <div class="table__data-quantity-wrap">
                                <button
                                    type="button"
                                    class="table__data-quantity-btn table__data-quantity-btn--minus"
                                >
                                    <i
                                        class="fa-solid fa-minus table__data-quantity-icon"
                                    ></i>
                                </button>
                                <span class="data-number">${quantity}</span>
                                <button
                                    type="button"
                                    class="table__data-quantity-btn table__data-quantity-btn--plus"
                                   
                                >
                                    <i
                                        class="fa-solid fa-plus table__data-quantity-icon"
                                    ></i>
                                </button>
                            </div>
                        </div>
                        <div class="table__data table__data-money color-primary">
                            ₫${quantity * new_price}.000
                        </div>
                        <div class="table__data table__data-clear">
                            <button type="button" class="table__data-clear-btn">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            })
            .join("");
    }
}
generalProduct();

// todo : getParent
function getParentElement(element, selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement;
        }

        element = element.parentElement;
    }
}

// todo : increment product
const btnIncrement = document.querySelectorAll(
    ".table__data-quantity-btn--plus"
);

btnIncrement.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const itemProduct = getParentElement(btn, ".table__data-product");
        let search = basket.find((item) => {
            return item.id == itemProduct.id;
        });
        search.quantity += 1;
        updateQuantity(itemProduct.id);
        localStorage.setItem("data", JSON.stringify(basket));
        totalPrice();
    });
});

// todo : decrement product
const btnDecrement = document.querySelectorAll(
    ".table__data-quantity-btn--minus"
);
btnDecrement.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const itemProduct = getParentElement(btn, ".table__data-product");
        let search = basket.find((item) => {
            return item.id == itemProduct.id;
        });
        if (search.quantity === 1) {
            return;
        } else {
            search.quantity -= 1;
        }
        updateQuantity(itemProduct.id);
        localStorage.setItem("data", JSON.stringify(basket));
        totalPrice();
    });
});

// todo : update quantity
function updateQuantity(id) {
    const itemProduct = document.getElementById(id);
    const data_num = itemProduct.querySelector(".data-number");
    let search = basket.find((item) => {
        return item.id === id;
    });
    data_num.textContent = search.quantity;
}

// todo : clear
const btnClear = document.querySelectorAll(".table__data-clear-btn");
btnClear.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const itemProduct = getParentElement(btn, ".table__data-product");
        basket = basket.filter((item) => {
            return item.id !== itemProduct.id;
        });
        localStorage.setItem("data", JSON.stringify(basket));
        generalProduct();
        totalPrice();
    });
});

// todo : clear all
const btnClearAll = document.querySelector(".table__footer-delete");
btnClearAll.addEventListener("click", function (e) {
    basket = [];
    localStorage.setItem("data", JSON.stringify(basket));
    generalProduct();
});

// todo : totalPrice
function totalPrice() {
    const total_price = document.querySelector(".table__footer-price");
    let price = basket
        .map((item) => {
            let search = listProductsDetail.find((x) => {
                return x.id === item.id;
            });

            return item.quantity * search.new_price;
        })
        .reduce((total, item) => {
            return total + item;
        }, 0);
    total_price.innerHTML = `${price}.000₫`;
}
totalPrice();
