import listProductsDetail from "./data.js";
const list_product = document.getElementById("list-product-js");
const category_kind = document.querySelectorAll(".category-item-kind-js");
function generalProducts() {
    list_product.innerHTML = listProductsDetail
        .map((item) => {
            let {
                name,
                discount,
                image,
                old_price,
                new_price,
                make_country,
                manufacturer,
                data_category,
            } = item;
            return `
    <div class="col m-4 c-6 l-2-4" data-kind="${data_category}" >
        <a
            href="#!"
            class="home-product-item"
        >
            <div
                class="home-product-item-img"
                style="
                    background-image: url(${image});
                "
            ></div>
            <h4
                class="home-product-item__name"
            >
            ${name}
            </h4>
            <div
                class="home-product-item__price"
            >
                <span
                    class="home-product-item__price-old"
                    >${old_price} ₫</span
                >
                <span
                    class="home-product-item__price-current"
                    >${new_price} ₫</span
                >
            </div>

            <div
                class="home-product-item__action"
            >
                <span
                    class="home-product-item__like"
                >
                    <!--home-product-item__like--liked -->
                    <i
                        class="home-product-item__like--fil fa-solid fa-heart"
                    ></i>
                    <i
                        class="home-product-item__like--empty fa-regular fa-heart"
                    ></i>
                </span>
                <div
                    class="home-product-item__rating"
                >
                    <i
                        class="home-product-item__start--gold fa-solid fa-star"
                    ></i>
                    <i
                        class="home-product-item__start--gold fa-solid fa-star"
                    ></i>
                    <i
                        class="home-product-item__start--gold fa-solid fa-star"
                    ></i>
                    <i
                        class="home-product-item__start--gold fa-solid fa-star"
                    ></i>
                    <i
                        class="home-product-item__start--empty fa-regular fa-star"
                    ></i>
                </div>
                <span
                    class="home-product-item__sold"
                    >88 đã bán</span
                >
            </div>
            <div
                class="home-product-item__origin"
            >
                <span
                    class="home-product-item__brand"
                    >${manufacturer}
                </span>
                <span
                    class="home-product-item__origin-name"
                    >${make_country}</span
                >
            </div>
            <div
                class="home-product-item__favourite"
            >
                <i
                    class="fa-solid fa-check"
                ></i>
                <span>Yêu thích</span>
            </div>
            <div
                class="home-product-item__sale-off"
            >
                <span
                    class="home-product-item__sale-off-percent"
                    >${discount}</span
                >
                <span
                    class="home-product-item__sale-off-label"
                    >GIẢM</span
                >
            </div>
        </a>
    </div>

    `;
        })
        .join("");
}
category_kind.forEach((item) => {
    item.addEventListener("click", (e) => {});
});

export { generalProducts };
