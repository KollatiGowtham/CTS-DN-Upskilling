console.log("Portal Loaded Successfully");
function showOutput() {

    document.getElementById("outputMessage").value = "Registration Successful";
}

function checkPhone() {

    let phone = document.getElementById("phone").value;

    if (phone.length == 10) {

        document.getElementById("phoneMsg").innerHTML ="Valid Phone Number";

    } else {

        document.getElementById("phoneMsg").innerHTML ="Enter 10 Digits";
    }
}

/* Fee Display */
function showFee() {

    let fee = document.getElementById("eventSelect").value;

    document.getElementById("fee").innerHTML = "Event Fee: ₹" + fee;
}

/* Submit Message */
function submitMessage() {

    alert("Form Submitted Successfully");
}

/* Image Enlarge */
function bigImage() {

    document.getElementById("eventImage").style.width ="300px";
}

/* Character Count */
function countText() {

    let text = document.getElementById("feedback").value;

    document.getElementById("count").innerHTML = "Characters: " + text.length;
}

/* Video Ready */
function videoReady() {

    document.getElementById("videoMessage").innerHTML = "Video Ready to Play";
}

/* Before Unload */
window.onbeforeunload = function () {

    return "Your form is not completed";
};

/* Save Preference */
function savePreference() {

    let value = document.getElementById("eventSelect").value;

    localStorage.setItem("eventType", value);
}

/* Load Preference */
window.onload = function () {

    let saved = localStorage.getItem("eventType");

    if (saved) {

        document.getElementById("eventSelect").value = saved;
    }
};

/* Clear Storage */
function clearStorage() {

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}

/* Geolocation */
function findLocation() {

    navigator.geolocation.getCurrentPosition(

        function(position) {

            document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
        },

        function(error) {

            if (error.code == 1) {

                alert("Permission Denied");

            } else if (error.code == 3) {

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
}