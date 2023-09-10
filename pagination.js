const list_product = document.getElementById("list-product-js");
const category_kind = document.querySelectorAll(".category-item-kind-js");
let array_length = 0;
let table_size = 5;
let start_index = 1;
let end_index = 0;
let current_index = 1;
let max_index = 10;
let array = [];
let ascOrder = true;
let dataSetKind = "";

// todo : filterKind
let filterKind = function () {
    if (dataSetKind === "") {
        array;
    } else {
        array = array.filter((item) => {
            return item.data_category === dataSetKind;
        });
    }
};

//todo : filterList
let searchList = function () {
    const inputSearch = document.querySelector(".header__search-input").value;
    if (inputSearch !== "") {
        let tmp_array = listProductsDetail.filter((item) => {
            return (
                item.name.toUpperCase().includes(inputSearch.toUpperCase()) ||
                item.old_price.toString().includes(inputSearch) ||
                item.new_price.toString().includes(inputSearch) ||
                item.make_country
                    .toUpperCase()
                    .includes(inputSearch.toUpperCase()) ||
                item.manufacturer
                    .toUpperCase()
                    .includes(inputSearch.toUpperCase())
            );
        });
        array = tmp_array;
    } else {
        array = listProductsDetail;
    }
};

// todo : sortList
let sortList = function () {
    array = array.sort(function (a, b) {
        if (ascOrder) {
            return a.new_price - b.new_price;
        } else {
            return b.new_price - a.new_price;
        }
    });
    displayIndexButtons();
};

//todo : prevLoadCalculation
let prevLoadCalculation = function () {
    searchList();
    filterKind();
    array_length = array.length;
    max_index = array_length / table_size;
    if (array_length % table_size > 0) {
        max_index++;
    }
};

//todo : hightLightButton
let hightLightButton = function () {
    start_index = (current_index - 1) * table_size + 1;
    end_index = start_index + table_size - 1;
    if (end_index > array_length) {
        end_index = array_length;
    }

    const btnNumber = document.querySelectorAll(".pagination-item__link-btn");
    btnNumber.forEach((btn) => {
        btn.classList.remove("pagination-item--active");
    });

    const activeBtn = document.querySelector(
        `.pagination-item__link-btn[index="${current_index}"]`
    );
    activeBtn.classList.add("pagination-item--active");
    generalProducts();
};

// todo : displayIndexButtons
let displayIndexButtons = function () {
    prevLoadCalculation();
    const pagination = document.querySelector(".home-product__pagination");
    pagination.innerHTML = `
    <li class="pagination-item"  onclick="prev()">
        <a href="#!" class="pagination-item__link" >
            <i
                class="pagination-item-icon fa-solid fa-chevron-left"
            ></i>
        </a>
    </li>
    `;

    //index="${i}" ${i}
    for (var i = 1; i <= max_index; i++) {
        pagination.innerHTML += `
        <li class="pagination-item" >
        <a href="#!" class="pagination-item__link pagination-item__link-btn" onclick="indexPagination(${i})" index="${i}" > 
            ${i}
        </a>
    </li>
        `;
    }

    hightLightButton();
    pagination.innerHTML += `
    <li class="pagination-item" onclick="next()">
        <a href="#!" class="pagination-item__link">
            <i
                class="pagination-item-icon fa-solid fa-chevron-right"
            ></i>
        </a>
    </li>
    `;
};

// todo : prev()
let prev = function () {
    if (current_index > 1) {
        current_index--;
        hightLightButton();
    }
};
// todo : next()
let next = function () {
    if (current_index > max_index - 1) {
        return;
    } else {
        current_index++;
        hightLightButton();
    }
};
// todo : indexPagination()
let indexPagination = function (index) {
    current_index = parseInt(index);
    hightLightButton();
};

// todo : generalProducts
let generalProducts = function () {
    let product_start = start_index - 1;
    let product_end = end_index;
    list_product.innerHTML = "";
    for (var i = product_start; i < product_end; i++) {
        let product_item = array[i];
        let {
            name,
            discount,
            image,
            old_price,
            new_price,
            make_country,
            manufacturer,
            data_category,
        } = product_item;
        let product = document.createElement("div");
        product.classList.add("col", "m-4", "c-6", "l-2-4");
        product.setAttribute("data-kind", `${data_category}`);
        product.innerHTML = `
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

            `;
        list_product.appendChild(product);
    }
};

displayIndexButtons();

// todo : tableSizeSelector
const tableSizeSelector = document.querySelector(
    ".home-filter__show-entries-select"
);
tableSizeSelector.addEventListener("change", function () {
    table_size = parseInt(tableSizeSelector.value);
    start_index = 1;
    current_index = 1;
    displayIndexButtons();
});

// todo : handlerSameProducts
/*const kindProducts = document.querySelectorAll(".category-item");
kindProducts.forEach(item=>{
    item.addEventListener('click', function(){
        
    })
})*/

// todo : searchProduct
const btnSearch = document.querySelector(".header__search-btn");
btnSearch.addEventListener("click", function () {
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
});

//todo : sortProduct
const btnSelectSort = document.querySelectorAll(".seclect-input__link");
const sortLabel = document.querySelector(".seclect-input__label");
btnSelectSort.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        sortLabel.innerHTML = e.target.innerHTML;
        sortLabel.classList.add("color-primary");
        ascOrder = e.target.dataset.order == "1";
        current_index = 1;
        start_index = 1;
        sortList();
    });
});

// todo : chooseKind

const kindProducts = document.querySelectorAll(".category-item");
const kindProductsLink = document.querySelectorAll(".category-item__link");
kindProducts.forEach((item) => {
    item.addEventListener("click", function (e) {
        dataSetKind = e.target.dataset.kind;
        kindProductsLink.forEach((item) => {
            item.classList.remove("color-primary");
        });
        e.target.classList.add("color-primary");
        displayIndexButtons();
    });
});
