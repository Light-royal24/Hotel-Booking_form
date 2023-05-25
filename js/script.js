const hotelSelect = document.querySelector("#hotelSelect")
const hotelSelectP = hotelSelect.querySelector('p')
const minusBtn = document.querySelector("#minus"),
      addBtn = document.querySelector("#add"),
      show = document.querySelector("#show"),
      feedingChoice = document.querySelector("#feedingChoice"),
      feedingSelect = document.querySelector("#feedingSelect"),
      amountOfGuest = document.querySelector("#amountOfGuest")

const room = {
  type: "",
  amount: ""
}

hotelSelect.addEventListener("click", () => {
  document.querySelector("#hotelType").classList.toggle('active')
  document.querySelector("#reveal").classList.toggle('open')
})

const options = document.querySelectorAll('.option')

options.forEach(option => {
  option.addEventListener('click', () => {
    const roomType = option.dataset.type
    const roomPrice = option.dataset.price
    
    hotelSelectP.innerHTML = roomType + " (NGN " + roomPrice + ")";
    
    // room.type = roomType
    // room.price = roomPrice
    
    document.querySelector("#reveal").classList.toggle('open')
    document.querySelector("#hotelType").classList.toggle('active')
  })
})

minusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = Number(amountOfGuest.value);

  if(value === 0) {
    return;
  }

  amountOfGuest.value --;
})


addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = Number(amountOfGuest.value);

  if(value === 10) {
    return;
  }

  amountOfGuest.value ++;
})


feedingSelect.addEventListener("click", () => {
  feedingChoice.classList.toggle('active')
  show.classList.toggle('shown')
})

const checkBtn = document.querySelectorAll(".checked"),
      btnLeft = document.querySelector("#btnLeft"),
      feed = document.querySelector("#feed");
 


const choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
  
  choice.addEventListener("click", () => {
   choice.classList.toggle("acted")

   const choiceType = choice.dataset.type
   const choicePrice = choice.dataset.price;
   
btnLeft.addEventListener("click", (e) => {
  e.preventDefault();

    if(choice.classList.contains('acted')) {
    
      alert(choiceType + choicePrice)
      
    }else {
      return;
    } 
    
    
  });

  })
});

  
btnLeft.addEventListener("click", (e) => {
  e.preventDefault();
  });