// const show = document.querySelector("#show")
// const feedingChoice = document.querySelector("#feedingChoice")
// const feedingSelect = document.querySelector("#feedingSelect")

// minusBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const value = Number(amountOfGuest.value);

//   if(value === 0) {
//     return;
//   }

//   amountOfGuest.value --;
// })

// addBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const value = Number(amountOfGuest.value);

//   if(value === 10) {
//     return;
//   }

//   amountOfGuest.value ++;
// })

// feedingSelect.addEventListener("click", () => {
//   feedingChoice.classList.toggle('active')
//   show.classList.toggle('shown')
// })

// const checkBtn = document.querySelectorAll(".checked"),
//       btnLeft = document.querySelector("#btnLeft"),
//       feed = document.querySelector("#feed");

// const choices = document.querySelectorAll(".choice");
// const myDiv = document.querySelector("#feedingChoice");
// const choice1 = document.querySelector(".choice1");
// const choice2 = document.querySelector(".choice2");
// const choice3 = document.querySelector(".choice3");
// const submitForm = document.querySelector("#submitForm");
// const myDivChildren = myDiv.children;

// choices.forEach(choice => {

//   choice.addEventListener("click", () => {
//    choice.classList.toggle("acted")

//    const choiceType = choice.dataset.type
//    const choicePrice = choice.dataset.price;

// btnLeft.addEventListener("click", (e) => {
//   e.preventDefault();

//   if(myDiv.children.item(0).classList.contains("acted")){
//     choice1.innerHTML = choicePrice;
//     choice.classList.remove("acted");
//     return;
//   }

//   if(myDiv.children.item(1).classList.contains("acted")){
//     choice2.innerHTML = choicePrice;
//     choice.classList.remove("acted");
//     return;
//   }

//   if(myDiv.children.item(2).classList.contains("acted")){
//     choice3.innerHTML = choicePrice;
//     choice.classList.remove("acted");
//     return;
//   }

//   });

//   })
// });

// btnLeft.addEventListener("click", (e) => {
//   e.preventDefault();
//   });

//   submitForm.addEventListener('click', (e) => {
//     e.preventDefault();

//     ValidateEmail(Email);

//     if(hotelSelectP.innerHTML != options) {
//      alert("pls select room type")
//      hotelSelect.focus();
//     }

//   })

//   function ValidateEmail(inputText)
//   {
//   const mailformat =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if(Email.value.match(mailformat))
//   {
//   // alert("You have entered a valid email address!");
//   // Email.focus();
//   return true;
//   }
//   else
//   {
//   alert("You have entered an invalid email address!");
//   Email.focus();
//   return false;
//   }
//   }
