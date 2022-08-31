const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(Occupied)");
const count = document.querySelector(".count");
const total = document.querySelector(".total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

//Seat and total update
function updateSeatCount() {
  const selected = document.querySelectorAll(".row .seat.selected");
  //   console.log(selected);
  const selectedSeats = selected.length;
  //   console.log(selectedSeats);
  count.innerText = selectedSeats;
  total.innerText = selectedSeats * ticketPrice;
}
//movie change event
movieSelect.addEventListener("change", function (e) {
  ticketPrice = +movieSelect.value;
  updateSeatCount();
});

container.addEventListener("click", function (e) {
  //   console.log(e.target);

  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("Occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSeatCount();
  }
});
