class Validation {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
    }
    validateEmail(email) {
        const em = email.trim();
        if(em.length < 6 || em.length > 30) {
            console.log("You email is to long or to short")
        }
        if(! new RegExp("/*@*/").test(em)) {
            
        }
    }
}

const form = $("form")
if(form) {
    const validator = new Validation(form, ["email","password"])
}

