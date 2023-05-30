const minusBtn = document.querySelector("#minus");
const addBtn = document.querySelector("#add");

minusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = Number(amountOfGuest.value);

  if (value === 1) {
    return;
  }

  amountOfGuest.value--;
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = Number(amountOfGuest.value);

  if (value === 10) {
    return;
  }

  amountOfGuest.value++;
});

feedingSelect.addEventListener("click", () => {
  feedingChoice.classList.toggle("active");
  show.classList.toggle("shown");
});
