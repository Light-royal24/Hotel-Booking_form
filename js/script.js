const show = document.querySelector("#show");
const feedingChoice = document.querySelector("#feedingChoice");
const feedingSelect = document.querySelector("#feedingSelect");
const feedingP = document.querySelector("#feed");

feedingSelect.addEventListener("click", () => {
  feedingChoice.classList.toggle("active");
  show.classList.toggle("shown");
});

const choices = document.querySelectorAll(".choice");
const myDiv = document.querySelector("#feedingChoice");
const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");
const submitForm = document.querySelector("#submitForm");
const myDivChildren = myDiv.children;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choice.classList.toggle("acted");

    const choiceType = choice.dataset.type;
    const choicePrice = choice.dataset.price;

    btnLeft.addEventListener("click", (e) => {
      e.preventDefault();

      if (myDiv.children.item(0).classList.contains("acted")) {
        choice1.innerHTML = `${choiceType} ${choicePrice}`;
        feedingP.innerHTML = `${choiceType}`;
        return;
      } else if (myDiv.children.item(1).classList.contains("acted")) {
        choice2.innerHTML = `${choiceType} ${choicePrice}`;
        feedingP.innerHTML = `${choiceType}`;
        return;
      } else if (myDiv.children.item(2).classList.contains("acted")) {
        choice3.innerHTML = `${choiceType} ${choicePrice}`;
        feedingP.innerHTML = `${choiceType}`;
        return;
      }
      if ((feedingP.innerHTML.length = 1)) {
        feedingP.innerHTML = choice.classList.contains("active");
      }
      if ((feedingP.innerHTML.length = 2)) {
        feedingP.innerHTML = "2 selected";
      }
      return;
    });
  });
});

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
