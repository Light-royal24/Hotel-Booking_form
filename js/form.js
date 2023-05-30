const hotelForm = document.querySelector(".form");

function validateNames(firstNameInput, lastNameInput) {
  // Get the value that has been typed in the firstName input element
  const firstName = firstNameInput.value.trim();

  // Get the value that has been typed in the lastName input element
  const lastName = lastNameInput.value.trim();

  // Validate first and last names
  // Should not be empty
  if (firstName === "") {
    alert("Enter a first name");
    firstNameInput.focus();
    return;
  }
  if (lastName === "") {
    alert("Enter a last name");
    lastNameInput.focus();
    return;
  }

  // Should be longer than 2 characters
  if (firstName.length < 2) {
    alert("First name is too short");
    firstNameInput.focus();
    return;
  }
  if (lastName.length < 2) {
    alert("Last name is too short");
    lastNameInput.focus();
    return;
  }

  // Should be shorter than 24 characters
  if (firstName.length > 24) {
    alert("First name is too long");
    firstNameInput.focus();
    return;
  }
  if (lastName.length > 24) {
    alert("Last name is too long");
    lastNameInput.focus();
    return;
  }

  return { firstName, lastName };
}

function getNamesFromInput() {
  // Get the firstName input element using the ID
  const firstNameInput = document.querySelector("#firstName");

  // Get the lastName input element using the ID
  const lastNameInput = document.querySelector("#lastName");

  return validateNames(firstNameInput, lastNameInput);
}

function getEmailFromInput() {
  const emailInput = document.querySelector("#Email");

  if (emailInput.value.trim() == "") {
    alert("Email cannot be empty");
    emailInput.focus();
  }
  return emailInput.value;
}

function getRoomTypeFromInput() {
  const hotelSelectP = hotelSelect.querySelector("p");

  const { room, price } = hotelSelectP.dataset;

  if (!room || !price) {
    alert("Select a type of room");
    hotelSelectP.scrollIntoView();
    return;
  }

  return { room, price: Number(price) };
}

function getNumberOfGuests() {
  const amountOfGuestInput = document.querySelector("#amountOfGuest");

  const numberOfGuests = amountOfGuestInput.value;

  if (numberOfGuests <= 0) {
    alert("Number of guest cant be 0");
    amountOfGuest.focus();

    return;
  } else if (numberOfGuests > 10) {
    alert("Number of guest cant be greater than 10");
    amountOfGuest.focus();

    return;
  }

  return numberOfGuests;
}

function validateArrivalDate(arrivalDate, arrivalTime) {
  // YYYY/MM/DD
  const [YYYY, MM, DD] = arrivalDate.split("-");
  // MM/DD/YYYY
  const formattedDate = `${MM}/${DD}/${YYYY}`;
  const arrivalDateTimestamp = new Date(formattedDate).getTime();

  const currentDate = new Date().getTime();

  if (arrivalDateTimestamp < currentDate) {
    alert("you cannot select past date");
    return;
  }
}

function getArrivalDate() {
  const arrivalDateInput = document.querySelector("#dateArrived");
  const arrivalTimeInput = document.querySelector("#hourArrived");

  const arrivalDate = arrivalDateInput.value;
  const arrivalTime = arrivalTimeInput.value;

  validateArrivalDate(arrivalDate, arrivalTime);

  return { arrivalDate, arrivalTime };
}

function validatedepartDate(arrivalDate, departDate, departTime) {
  // YYYY/MM/DD
  const [YYYY, MM, DD] = departDate.split("-");
  const [YYYY1, MM1, DD1] = arrivalDate.split("-");
  // MM/DD/YYYY
  const formattedDate = `${MM}/${DD}/${YYYY}`;
  const formattedArrivalDate = `${MM1}/${DD1}/${YYYY1}`;

  const departureDateTimestamp = new Date(formattedDate).getTime();
  const arrivalDateTimestamp = new Date(formattedArrivalDate).getTime();

  if (departureDateTimestamp < arrivalDateTimestamp) {
    alert("date cannot be below arrival date");
    return;
  }
}

function getDepartureDate() {
  const departureDateInput = document.querySelector("#dateDepart");
  const departureTimeInput = document.querySelector("#hourDepart");
  const arrivalDateInput = document.querySelector("#dateArrived");

  const arrivalDate = arrivalDateInput.value;
  const departureDate = departureDateInput.value;
  const departureTime = departureTimeInput.value;

  validateArrivalDate(arrivalDate, departureDate, departureTime);

  return { departureDate, departureTime };
}

function formSubmit(e) {
  e.preventDefault();

  const email = getEmailFromInput();
  const noOfGuests = getNumberOfGuests();
  const { firstName, lastName } = getNamesFromInput();
  // const { room, price } = getRoomTypeFromInput() || { room: null, price: 0 };

  const { arrivalDate, arrivalTime } = getArrivalDate() || {
    arrivalDate: null,
    arrivalTime: null,
  };

  const { DepartDate, departTime } = getArrivalDate() || {
    departDate: null,
    departTime: null,
  };

  // if (!room || !arrivalDate || !arrivalTime) return;

  // console.log(firstName, lastName);
  // console.log({ email });
  // console.log(noOfGuests);
  // console.log({ arrivalDate, arrivalTime });
}

hotelForm.addEventListener("submit", formSubmit);
