class EmailValidation {
    constructor() {
        this.submit = document.querySelector(".form__button");
        this.email = document.querySelector(".form__input").value;
        this.regx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|
\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|
\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:
(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
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
