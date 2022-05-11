// FORM ELEMENTLARINI CHAQIRISH

let  elForm = document.querySelector(".js-form");
let elInputName = elForm.querySelector(".js-name-input");
let elInputSurname = elForm.querySelector(".js-surname-input");
let elInputRelation = elForm.querySelector(".form-select");
let elInputTel = elForm.querySelector(".js-number-input");

// Natijalar bo'limi

let elAddedContact = document.querySelector(".js-added-contact");


// Bo'sh array
let contacts = [];


// Formda arrayga objectni push qilish
  let addValueAddarray = function() {

  let name = elInputName.value.trim();
  let surname = elInputSurname.value.trim();
  let relation = elInputRelation.value.trim();
  let telephone = elInputTel.value.trim();

  
  if (name == "" || name.length < 3 || name.length > 20  ) {
    elInputName.style.borderColor = "red";
    return
  }
  if (telephone.length < 9 ) {
    elInputTel.style.borderColor = "red"
    return
  }
  if ( surname.length < 3 || surname.length > 20) {
    return
  }

  elInputName.style.borderColor = "black";
  elInputTel.style.borderColor = "black";
  elInputSurname.style.borderColor = "black";
  elInputTel.style.borderColor = "black";
  elInputRelation.style.borderColor = "black"

// Valuelarni abjectga yuklab arrayga push qilish
    contacts.push({
    name: name,
    surname: surname,
    relation: relation,
    telephone: telephone,
  })
}

let addResuls = function() {
    for (let i = 0; i < contacts.length; i++){
    
    let elNewLi = document.createElement("li");

    elNewLi.classList.add('list__item');
    



    elNewLi.setAttribute("class", "border  border-primary p-4 rounded-3 d-flex flex-column mb-4  shadow  bg-body ")
    elNewLi.innerHTML = `
    <p>
    <span class="d-inline-block w-25 text-primary fw-bold">Name:</span>
    <span>${contacts[i].name}</span>
  </p>
  <p>
    <span class="d-inline-block w-25 text-primary fw-bold">Surname:</span>
    <span>${contacts[i].surname}</span>
  </p>
  <p>
    <span class="d-inline-block w-25 text-primary fw-bold">Relation:</span>
    <span>${contacts[i].relation}</span>
  </p>
  <p>
    <span class="d-inline-block w-25 text-primary fw-bold">Tel:</span>
    <a class="" href="tel:${contacts[i].telephone}">${contacts[i].telephone}</a>
  </p>`;

    elAddedContact.append(elNewLi);
    console.log(contacts[i]);

  }
}

// Formni hodisasini tinglash
  elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  addValueAddarray();


  elAddedContact.innerHTML = ""
  addResuls();
  
    elInputName.value = null
    elInputSurname.value =null
    elInputTel.value = null
})










