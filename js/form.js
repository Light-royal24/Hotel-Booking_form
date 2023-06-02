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

function validateArrivalDate(arrivalDate) {
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

  const arrivalDate = arrivalDateInput.value;

  validateArrivalDate(arrivalDate);

  return arrivalDate;
}

function validateDepartedDate(arrivalDate, departureDate) {
  // YYYY/MM/DD
  const [YYYY, MM, DD] = departureDate.split("-");
  const [YYYY1, MM1, DD1] = arrivalDate.split("-");
  // MM/DD/YYYY
  const formattedDate = `${MM}/${DD}/${YYYY}`;
  const formattedArrivalDate = `${MM1}/${DD1}/${YYYY1}`;

  const departureDateTimestamp = new Date(formattedDate).getTime();
  const arrivalDateTimestamp = new Date(formattedArrivalDate).getTime();

  if (departureDateTimestamp < arrivalDateTimestamp) {
    alert("Departure date cannot be earlier than arrival date");
    return;
  }
}

function getDepartureDate() {
  const departureDateInput = document.querySelector("#dateDepart");
  const arrivalDateInput = document.querySelector("#dateArrived");

  const arrivalDate = arrivalDateInput.value;
  const departureDate = departureDateInput.value;

  validateDepartedDate(arrivalDate, departureDate);

  return departureDate;
}

function getFeeding() {
  const feedingCheckboxes = Array.from(
    document.querySelectorAll(".feeding-checkbox")
  );

  const feeding = {};

  feedingCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const dataType = checkbox.dataset.type;

      feeding[dataType] = +checkbox.value;
    }
  });

  return feeding;
}

const durationDays = (date_1, date_2) => {
  let difference = new Date(date_1).getTime() - new Date(date_2).getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

  return TotalDays;
};

function calculatePrice(reservationData) {
  const noOfDays = durationDays(
    reservationData.departureDate,
    reservationData.arrivalDate
  );

  const accommodationPrice = reservationData.room.price * noOfDays;
  let dailyFeeding = 0;

  Object.entries(reservationData.feeding).forEach(([key, value]) => {
    dailyFeeding += value;
  });

  const totalFeeding = dailyFeeding * noOfDays;

  return {
    accommodation: accommodationPrice,
    feeding: totalFeeding,
  };
}

function getReservations() {
  const reservationsStr = localStorage.getItem("hotel_reservations");
  const reservationsArray = JSON.parse(reservationsStr) || [];

  return reservationsArray;
}

function saveReservationData(reservationData) {
  const allReservations = getReservations();

  allReservations.push(reservationData);
  const reservationsStr = JSON.stringify(allReservations);

  localStorage.setItem("hotel_reservations", reservationsStr);
}

function displayReservations() {
  const reservations = getReservations();
  console.log(reservations);
}

const allNames = document.querySelector("#allNames");
const allEmail = document.querySelector("#allEmail");
const roomSelected = document.querySelector("#roomSelected");
const numOfGuest = document.querySelector("#numOfGuest");
const ArivalDateAndTime = document.querySelector("#ArivalDateAndTime");
const departureDateandTime = document.querySelector("#departureDateandTime");

function formSubmit(e) {
  e.preventDefault();

  const { firstName, lastName } = getNamesFromInput();
  const email = getEmailFromInput();
  const { room, price } = getRoomTypeFromInput() || { room: null, price: 0 };
  const noOfGuests = getNumberOfGuests();

  const arrivalDate = getArrivalDate() || null;
  const departureDate = getDepartureDate() || null;

  const feeding = getFeeding();

  const reservationData = {
    name: `${firstName} ${lastName}`,
    email,
    noOfGuests,
    arrivalDate,
    departureDate,
    feeding,
    room: {
      type: room,
      price,
    },
  };

  reservationData.totalCost = calculatePrice(reservationData);

  saveReservationData(reservationData);
  displayReservations();
}

hotelForm.addEventListener("submit", formSubmit);
displayReservations();
