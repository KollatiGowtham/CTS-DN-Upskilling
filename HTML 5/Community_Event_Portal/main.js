console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Loaded Successfully");
    loadSavedPreference();
    displayEvents();
    fetchEvents();
};

const portalName = "Community Portal";
const eventDate = "2026-06-01";
let availableSeats = 50;
console.log(`${portalName} Event Date: ${eventDate}`);

class Event {
    constructor(name, category, seats) {
        this.name = name;
        this.category = category;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

const events = [
    new Event("Music Festival", "Music", 25),
    new Event("Sports Day", "Sports", 15),
    new Event("Baking Workshop", "Workshop", 20)
];

function addEvent(name, category, seats = 10) {
    const event = new Event(name, category, seats);
    events.push(event);
}

function registerUser() {
    try {
        if (availableSeats <= 0) {
            throw new Error("No Seats Available");
        }
        availableSeats--;
        console.log("Registration Successful");
    } catch (error) {
        console.log(error.message);
    }
}

function filterEventsByCategory(category, callback) {
    const filtered = events.filter(event => event.category === category);
    callback(filtered);
}

function registrationTracker() {
    let total = 0;
    return function () {
        total++;
        return total;
    };
}

const countRegistrations = registrationTracker();

Object.entries(events[0]).forEach(entry => {
    console.log(entry);
});

addEvent("Art Workshop", "Workshop", 10);
const musicEvents = events.filter(event => event.category === "Music");
console.log(musicEvents);
const displayNames = events.map(event => `Workshop on ${event.name}`);
console.log(displayNames);

function displayEvents() {
    const container = document.querySelector("#eventContainer");
    container.innerHTML = "";
    events.forEach(event => {
        if (event.checkAvailability()) {
            const card = document.createElement("div");
            card.className = "eventCard";
            card.innerHTML = `<h3>${event.name}</h3><p>Category: ${event.category}</p><p>Seats: ${event.seats}</p>`;
            container.appendChild(card);
        }
    });
}

const form = document.querySelector("#registrationForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.elements["username"].value;
    const email = form.elements["email"].value;
    const selectedEvent = form.elements["eventType"].value;
    if (name === "" || email === "" || selectedEvent === "") {
        document.getElementById("outputMessage").value = "Please fill all fields";
        return;
    }
    document.getElementById("outputMessage").value = "Registration Successful";
    registerUser();
    console.log("Form Submitted");
});

document.getElementById("phone").onblur = function () {
    let phone = this.value;
    if (phone.length === 10) {
        document.getElementById("phoneMsg").innerHTML = "Valid Number";
    } else {
        document.getElementById("phoneMsg").innerHTML = "Enter 10 Digits";
    }
};

document.getElementById("eventSelect").onchange = function () {
    let selected = this.value;
    document.getElementById("fee").innerHTML = "Selected: " + selected;
    savePreference();
};

document.getElementById("feedbackText").onkeydown = function () {
    document.getElementById("charCount").innerHTML = "Characters: " + this.value.length;
};

document.getElementById("feedbackBtn").onclick = function () {
    document.getElementById("feedbackMessage").innerHTML = "Feedback Submitted";
};

document.getElementById("eventImage").ondblclick = function () {
    this.style.width = "300px";
};

document.getElementById("promoVideo").oncanplay = function () {
    document.getElementById("videoMessage").innerHTML = "Video Ready To Play";
};

function savePreference() {
    const value = document.getElementById("eventSelect").value;
    localStorage.setItem("eventType", value);
}

function loadSavedPreference() {
    const saved = localStorage.getItem("eventType");
    if (saved) {
        document.getElementById("eventSelect").value = saved;
    }
}

document.getElementById("clearBtn").onclick = function () {
    localStorage.clear();
    sessionStorage.clear();
    alert("Preferences Cleared");
};

document.getElementById("locationBtn").onclick = function () {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            document.getElementById("coordinates").innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
        },
        function (error) {
            if (error.code === 1) {
                alert("Permission Denied");
            } else if (error.code === 3) {
                alert("Request Timed Out");
            } else {
                alert("Location Error");
            }
        },
        {
            enableHighAccuracy: true,
            timeout: 5000
        }
    );
};

function fetchEvents() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log("Fetched Data", data))
        .catch(error => console.log(error));
}

async function loadEvents() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

function sendRegistration() {
    const user = {
        name: "Resident",
        event: "Music Festival"
    };
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }, 2000);
}

const [firstEvent] = events;
const { name, category } = firstEvent;
console.log(name, category);
const copiedEvents = [...events];

filterEventsByCategory("Music", function (filtered) {
    console.log(filtered);
});

window.onbeforeunload = function () {
    return "Unsaved changes may be lost.";
};

$("#registerBtn").click(function () {
    $(".eventCard").fadeOut(500).fadeIn(500);
});
