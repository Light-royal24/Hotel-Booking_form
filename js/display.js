function getReservations() {
  const reservationsStr = localStorage.getItem("hotel_reservations");
  const reservationsArray = JSON.parse(reservationsStr) || [];

  return reservationsArray;
}

function saveReservationData(reservationData) {
  const allReservations = getReservations();

  const id = allReservations.length + 1;
  reservationData.id = id;

  allReservations.push(reservationData);
  const reservationsStr = JSON.stringify(allReservations);

  localStorage.setItem("hotel_reservations", reservationsStr);
}

function updateReservations(reservations) {
  const reservationsStr = JSON.stringify(reservations);

  localStorage.setItem("hotel_reservations", reservationsStr);
}

function displayReservations() {
  const reservations = getReservations();

  const reservationsHTML = reservations.map((reservation) => {
    return `
      <div class="reservation">
      <div class="button-row">
        <button data-id="${
          reservation.id
        }" class="remove-reservation">x</button>
      </div>

        <div class="info-row">
          <div class="info">
            <div class="info-label">Name:</div>

            <div class="info-value" id="name">
              ${reservation.name}
            </div>
          </div>

          <div class="info">
            <div class="info-label">Email:</div>

            <div class="info-value" id="allEmail">
              ${reservation.email}
            </div>
          </div>
        </div>

        <div class="info-row">
          <div class="info">
            <div class="info-label">Room type:</div>

            <div class="info-value" id="room-info">
              ${reservation.room.type}
            </div>
          </div>

          <div class="info">
            <div class="info-label">Number of guests:</div>

            <div class="info-value" id="guest-amount">
              ${reservation.noOfGuests}
            </div>
          </div>

          <div class="info">
            <div class="info-label">Arrival date:</div>

            <div class="info-value" id="date-arrived">
              ${reservation.arrivalDate}
            </div>
          </div>

          <div class="info">
            <div class="info-label">Departure date:</div>

            <div class="info-value" id="date-depart">
              ${reservation.departureDate}
            </div>
          </div>
        </div>

        <div class="info-row">
          <div class="info">
            <div class="info-label">Room Price:</div>

            <div class="info-value" id="room-amount">
              NGN${reservation.room.price}
            </div>
          </div>

          <div class="info">
            <div class="info-label">Feeding:</div>

            <div class="info-value" id="Feeding-price">
              ${Object.keys(reservation.feeding).join(", ")}
            </div>
          </div>

          <div class="info">
            <div class="info-label">Total price:</div>

            <div class="info-value" id="total-amount">
              NGN${
                reservation.totalCost.accommodation +
                reservation.totalCost.feeding
              }
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector(".form-data").innerHTML = reservationsHTML;
}

function deleteReservation(id) {
  const allReservations = getReservations();

  const updatedReservations = allReservations.filter(
    (reservation) => reservation.id != id
  );

  updateReservations(updatedReservations);
  displayReservations();
}

const removeBtns = Array.from(document.querySelectorAll(".remove-reservation"));

document.addEventListener("click", (e) => {
  if (e.target.className.includes("remove-reservation")) {
    const id = e.target.dataset.id;

    deleteReservation(id);
  }
});

removeBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log("remove btn clicked");
  })
);

displayReservations();
