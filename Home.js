const form = document.querySelector("form"),
  grossannual = form.querySelector(".gross-annual"),
  grossinput = grossannual.querySelector(".gross"),
  extraannual = form.querySelector(".Extra-annual"),
  extrainput = extraannual.querySelector(".extra"),
  deductfield = form.querySelector(".deduct-field"),
  deadinput = form.querySelector(".dead");
let btnClear = document.querySelector(".btnclose");
let inputs = document.querySelectorAll("input");
var age=document.getElementById("age").value;

//Form Validation
function GrossValidation() {
  checkString(grossinput.value);
  function checkString(string) {
    if (typeof string === "string") {
      if (isNaN(string)) {
        return grossannual.classList.add("invalid");
      }//adding invalid class if it is not integer
    }
    grossannual.classList.remove('invalid'); //removing invalid class if it is integer
  }
}
function ExtraValidation() {
  checkString(extrainput.value);
  function checkString(string) {
    if (typeof string === "string") {
      if (isNaN(string)) {
        return extraannual.classList.add("invalid");
      }//adding invalid class if it is not integer
    }
    extraannual.classList.remove('invalid'); //removing invalid class if it is integer
  }
}
function DeductValidation() {
  checkString(deadinput.value);
  function checkString(string) {
    if (typeof string === "string") {
      if (isNaN(string)) {
        return deductfield.classList.add("invalid");
      }//adding invalid class if it is not integer
    }
    deductfield.classList.remove('invalid'); //removing invalid class if it is integer
  }
}


//calling function on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submiting
  GrossValidation();
  ExtraValidation();
  DeductValidation();
  calculation();

  grossinput.addEventListener("keyup", GrossValidation);
  extrainput.addEventListener("keyup", ExtraValidation);
  deadinput.addEventListener("keyup", DeductValidation);

  btnClear.addEventListener("click", () => {
    inputs.forEach(input => input.value = ' ');

    grossannual.classList.remove('invalid');
    extraannual.classList.remove('invalid');
    deductfield.classList.remove('invalid');
  })
});

function calculation() {

  let Income = parseInt(grossinput.value) + parseInt(extrainput.value) - parseInt(deadinput.value);

  if (Income > 800000) {
    
    if (age < 40) {
      const tax = 0.3 * (parseInt(Income) - 8);
      document.getElementById("Answer").value = parseFloat(tax);
    }
    else if (age >= 40 && age < 60) {
      const tax = 0.4 * (parseInt(Income) - 8);

      document.getElementById("Answer").value = parseFloat(tax);
    }
    else if (age >= 60) {
      const tax = 0.1 * (parseInt(Income) - 8);
      document.getElementById("Answer").value = parseFloat(tax);
    }

  }
  else {
    document.getElementById("Answer").value = parseInt(Income);
   
  }
}

