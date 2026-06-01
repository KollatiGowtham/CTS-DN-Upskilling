console.log("Welcome to the Community Event Dashboard");
window.onload = function () {
    alert("Community Event Dashboard Loaded Successfully!");
};
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("Button Clicked: " + button.innerText);
    });

});

let registrationCount = 0;
function registerUser() {
    registrationCount++;
    console.log("Total Registrations: " + registrationCount);
}
const eventName = "Music Festival";
const eventDate = "15-Aug-2026";
let availableSeats = 100;

console.log(
    `Event: ${eventName} | Date: ${eventDate} | Seats: ${availableSeats}`
);

function bookSeat() {
    if (availableSeats > 0) {
        availableSeats--;
        console.log("Seat Booked");
        console.log("Remaining Seats: " + availableSeats);
    } else {
        console.log("No Seats Available");
    }
}

const events = [
    "Music Festival",
    "Sports Meet",
    "Skill Workshop"
];
events.forEach(function (event) {
    console.log("Event: " + event);
});
const musicEvents = events.filter(function (event) {
    return event.includes("Music");
});

console.log("Filtered Events:", musicEvents);
const formattedEvents = events.map(function (event) {
    return "Upcoming: " + event;
});

console.log(formattedEvents);

const communityEvent = {
    name: "Music Festival",
    location: "Community Hall",
    seats: 100
};

console.log(Object.entries(communityEvent));
try {
    let result = 10 / 2;
    console.log(result);
} catch (error) {
    console.log("Error Occurred");
}

const heroSection = document.querySelector(".hero");

if (heroSection) {

    console.log("Hero Section Found");

}
const modalButton = document.querySelector(
    '[data-bs-target="#eventModal"]'
);
if (modalButton) {

    modalButton.addEventListener("click", function () {

        console.log("Opening Modal");

    });
}
const searchBox = document.querySelector('input[type="search"]');

if (searchBox) {

    searchBox.addEventListener("keydown", function () {

        console.log("Typing in Search Box");

    });

}
const selectBox = document.querySelector(".form-select");

if (selectBox) {

    selectBox.addEventListener("change", function () {

        console.log(
            "Selected Event: " + selectBox.value
        );

    });

}

const eventPromise = new Promise(function (resolve) {

    setTimeout(function () {

        resolve("Event Data Loaded");

    }, 2000);

});

eventPromise.then(function (message) {
    console.log(message);
});
async function loadEvents() {

    return "Events Loaded Successfully";

}
loadEvents().then(function (message) {

    console.log(message);

});
const icons = document.querySelectorAll(".bi");

icons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        console.log("Social Icon Clicked");

    });

});
console.log("JavaScript Loaded Successfully");