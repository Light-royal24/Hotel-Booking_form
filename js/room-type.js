const hotelSelect = document.querySelector("#hotelSelect");
const hotelSelectP = hotelSelect.querySelector("p");

const room = {
  type: "",
  amount: "",
};

hotelSelect.addEventListener("click", () => {
  document.querySelector("#hotelType").classList.toggle("active");
  document.querySelector("#reveal").classList.toggle("open");
});

const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", () => {
    const roomType = option.dataset.type;
    const roomPrice = option.dataset.price;

    hotelSelectP.innerHTML = roomType + " (NGN " + roomPrice + ")";
    hotelSelectP.dataset.room = roomType;
    hotelSelectP.dataset.price = roomPrice;

    // room.type = roomType
    // room.price = roomPrice

    document.querySelector("#reveal").classList.toggle("open");
    document.querySelector("#hotelType").classList.toggle("active");
  });
});
