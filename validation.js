const form = document.querySelector("#form");
const btnLogin = document.querySelector("#btnSubmit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// todo : error
function handlerError(element, msg) {
    const parentElement = element.parentElement;
    const msgError = parentElement.children[1];
    parentElement.classList.add("auth-form__group-error");
    msgError.innerHTML = msg;
}
// todo : valid
function handlerValid(element) {
    const parentElement = element.parentElement;
    const msgError = parentElement.children[1];
    parentElement.classList.remove("auth-form__group-error");
    msgError.innerHTML = "";
}
//todo : check empty
function checkEmpty(element, msg) {
    if (element.value.trim() == "") {
        handlerError(element, msg);
        return false;
    } else {
        handlerValid(element);
        return true;
    }
}

// todo : check email
function checkEmail(element) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let checkEmailEmpty = checkEmpty(element, "Không được bỏ trống email");
    if (checkEmailEmpty) {
        if (!regex.test(element.value.trim())) {
            handlerError(element, "Email không hợp lệ");
        }
    }
}
// todo : check password
function checkPassword(element, length) {
    if (element.value.length < length) {
        handlerError(element, `Tối thiểu phải có ${length} ký tự`);
    } else {
        handlerValid(element);
    }
}

// todo : click submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkPassword(password, 6);
    checkEmail(email);
});
