import { updateQuantity, modal } from "./modal.js";
import { handlerCartIcon, updateQuantityIcon } from "./cart-icon.js";

modal();
updateQuantityIcon();
handlerCartIcon();
const btnClearIconCart = document.querySelectorAll(".header__cart-item-remove");
// btnClearIconCart.forEach((btn) => {
//     btn.addEventListener("click", function () {
//         let cart_item = btn.parentElement.parentElement.parentElement;
//         let id_item = cart_item.id;
//         let id_search = id_item.slice(18);
//         console.log(id_search);
//         cart_item.remove();
//         let basket = JSON.parse(localStorage.getItem("data")) || [];
//         basket = basket.filter((item) => {
//             return item.id !== id_search;
//         });

//         localStorage.setItem("data", JSON.stringify(basket));
//         updateQuantity();
//         updateQuantityIcon();
//     });
// });
