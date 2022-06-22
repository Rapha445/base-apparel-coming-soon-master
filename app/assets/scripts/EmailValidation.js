class EmailValidation {
    constructor() {
        this.submit = document.querySelector(".form__button");
        this.email = document.querySelector(".form__input").value;
        this.regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.errorMsg = document.querySelector(".form__errortext");
        this.errorImg = document.querySelector(".form__erroricon");
        this.emailInput = document.querySelector(".form__input");
        this.events();
    }
    events() {
        this.submit.addEventListener("click", () => this.validate());
    }
    validate() {
        if (this.regx.test(this.email)) {
            this.errorMsg.classList.remove("form__errortext--visible");
            this.emailInput.classList.remove("form__input--visible");
            this.errorImg.classList.remove("form__erroricon--visible");
            return true;
        } else {
            this.errorMsg.classList.add("form__errortext--visible");
            this.emailInput.classList.add("form__input--visible");
            this.errorImg.classList.add("form__erroricon--visible")
            return false;
        }
    }
}

export default EmailValidation;
