// FORM ELEMENTLARINI CHAQIRISH
let  elForm = $(".js-form");
let elInputName = $(".js-name-input", elForm);
let elInputSurname = $(".js-surname-input", elForm);
let elInputRelation = $(".form-select", elForm);
let elInputTel = $(".js-number-input", elForm);

// Natijalar bo'limi
let elAddedContact = document.querySelector(".js-added-contact");


// Bo'sh array
let contacts = [];
borderColors();

// Formda arrayga objectni push qilish
  let addValueAddarray = function() {

  let name = elInputName.value.trim();
  let surname = elInputSurname.value.trim();
  let relation = elInputRelation.value.trim();
  let telephone = elInputTel.value.trim();

  
  if (name == "" || name.length < 3 || name.length > 20  ) {
    elInputName.style.borderColor = "red";
    return;
  }
  if (telephone.length < 9 ) {
    elInputTel.style.borderColor = "red";
    return;
  }
  if ( surname.length < 3 || surname.length > 20) {
    return;
  }

  borderColors();

// Valuelarni abjectga yuklab arrayga push qilish
    contacts.push({
    name: name,
    surname: surname,
    relation: relation,
    telephone: telephone,
  })
}

let addResuls = function() {

  contacts.forEach(function(contactts) 
  {
    let elNewLi = document.createElement("li");
    elNewLi.classList.add('list__item');
    elNewLi.setAttribute("class", "border  border-primary p-4 rounded-3 d-flex flex-column mb-4  shadow  bg-body ");
    
        let elContactName = createElement("p", "", contactts.name)
        let elContactSurname = createElement("p", "", contactts.surname)
        let elContactRelation = createElement("p", "", contactts.relation)
        let elContactNumber = createElementA("a", contactts.telephone, contactts.telephone)
        
        elNewLi.append(elContactName, elContactSurname, elContactRelation, elContactNumber)
        elAddedContact.append(elNewLi);

  })
}

// Formni hodisasini tinglash
  elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  addValueAddarray();

  elAddedContact.innerHTML = ""
  addResuls();  
  clearList();
})
