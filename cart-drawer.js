// ? Suy nghĩ sau
function addToCart() {
    const modal__checked = document.querySelector(".modal__checked");
    const modal__container = document.querySelector(".modal-container");
    let check_temple = `
            <img src="./assets/img/check.png" alt="" class="modal__checked-img" />
            <p class="modal__checked-desc">Sản phẩm đã được thêm vào Giỏ Hàng</p>
    `;
    const element = document.createElement("div");
    if (handlerError) {
        element.innerHTML = check_temple;
        element.classList.add("modal__checked");
        modal__container.appendChild(element);
    } else {
        element.classList.remove("modal__checked");
        element.remove();
    }
}

function checkQuantity() {
    const quantity_number = document.querySelector(
        "#modal__quantity-number-js"
    ).innerHTML;

    if (parseInt(quantity_number) === 0) {
        return false;
    } else {
        return true;
    }
}

function handlerBtnBuyNow() {
    const btn_buy_now = document.querySelector(".modal__buy-btn--now");
    btn_buy_now.addEventListener("click", function (e) {
        let isTrue = checkQuantity();
        if (!isTrue) {
            return;
        } else {
            window.location.href = "./cart.html";
        }
    });
}

function handlerErrorQuantity() {
    const btn_add_to_cart = document.querySelector(".modal__buy-btn--addBag");
    const quantity_error = document.querySelector(".modal__error-quantity ");
    btn_add_to_cart.addEventListener("click", function () {
        let isTrue = checkQuantity();
        if (!isTrue) {
            quantity_error.classList.add("modal__error-quantity-has--error");
        } else {
            quantity_error.classList.remove("modal__error-quantity-has--error");
        }
    });
}

export { handlerErrorQuantity, handlerBtnBuyNow };
