function validateEmail() {
    const email = document.querySelector(".newsletter__email").value;
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    const errorMsg = document.querySelector(".newsletter__invalid");
    if (regx.test(email)) {
        errorMsg.classList.remove("active");
        return true;
    } else {
        errorMsg.classList.add("active");
        return false;
    }
}