function register(eventName) {

    alert("Successfully registered for " + eventName);

}

function searchEvent() {

    let search = document.getElementById("search").value.toLowerCase();

    let events = document.querySelectorAll(".event");

    events.forEach(event => {

        let title = event.querySelector("h3").innerText.toLowerCase();

        if(title.includes(search)) {

            event.style.display = "block";

        } else {

            event.style.display = "none";

        }

    });

}

document.getElementById("regForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Registration Successful.");

    document.getElementById("regForm").reset();
});
