
const username= document.querySelector(`#username`);

const email= document.querySelector(`#email`);

const cnic= document.querySelector(`#cnic`);

const password= document.querySelector(`#password`);

const age = document.querySelector(`#age`);

let Usernameregex = /^[a-zA-Z0-9_]{4,16}$/;
let Emailregex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let Passwordregex= /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/;
let cnicregex = /^[0-9]{13}$/;
let Ageregex= /^(1[8-9]|[2-5][0-9]|60)$/;







const form= document.querySelector(`#form`);
 form.addEventListener( 'submit',  (event) => {
    event.preventDefault();
if (Usernameregex.test(username.value)); {console.log(username.value)  
};

if (Emailregex.test(email.value)) {console.log(email.value)  
};

if (cnicregex.test(cnic.value)) {console.log(cnic.value)  
};


if (Passwordregex.test(password.value)) {console.log(password.value) 
};

if (Ageregex.test(age.value)) {console.log(age.value)  
};
 
 });