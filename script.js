// Store events
let events = [];


// Add New Event
document.getElementById("eventForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventCategory = document.getElementById("eventCategory").value;
    const eventLocation = document.getElementById("eventLocation").value;


    // Create new event
    const newEvent = {

        name: eventName,
        date: eventDate,
        category: eventCategory,
        location: eventLocation

    };


    // Add event to array
    events.push(newEvent);


    // Clear form
    document.getElementById("eventForm").reset();


    // Display events
    displayEvents();

});



// Display Events
function displayEvents() {

    const eventList = document.getElementById("eventList");

    eventList.innerHTML = "";


    events.forEach(function(event, index) {

        const li = document.createElement("li");

        li.className = "event-item";


        li.innerHTML = `

            <div class="event-info">

                <h3>
                    ${event.name}
                </h3>

                <p>
                    <i class="fa-solid fa-calendar"></i>
                    ${event.date}
                </p>

                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    ${event.location}
                </p>

                <p>
                    <i class="fa-solid fa-tag"></i>
                    ${event.category}
                </p>

            </div>


            <div class="event-actions">

                <button
                    class="register-btn"
                    onclick="openRegistration(${index})">

                    <i class="fa-solid fa-user-plus"></i>
                    Register

                </button>

            </div>

        `;


        eventList.appendChild(li);

    });

}



// Open Registration Form
function openRegistration(index) {

    const selectedEvent = events[index];


    // Set event name
    document.getElementById("selectedEvent").value =
        selectedEvent.name;


    document.getElementById("selectedEventText").innerHTML =

        `You are registering for:
        <strong>${selectedEvent.name}</strong>`;


    // Scroll to registration form
    document.getElementById("registrationSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// Student Registration
document.getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const studentName =
            document.getElementById("studentName").value;

        const studentId =
            document.getElementById("studentId").value;

        const studentEmail =
            document.getElementById("studentEmail").value;

        const selectedEvent =
            document.getElementById("selectedEvent").value;


        // Show success message
        document.getElementById("registrationMessage").innerHTML = `

            <div class="success-message">

                <i class="fa-solid fa-circle-check"></i>

                <h3>Registration Successful!</h3>

                <p>
                    <strong>${studentName}</strong>
                    has successfully registered for
                    <strong>${selectedEvent}</strong>.
                </p>

                <p>
                    Student ID: ${studentId}
                </p>

                <p>
                    Email: ${studentEmail}
                </p>

            </div>

        `;


        // Clear registration form
        document.getElementById("registrationForm").reset();

});



// Search Events
document.getElementById("searchInput")
    .addEventListener("input", function() {

        const searchValue =
            this.value.toLowerCase();


        const eventItems =
            document.querySelectorAll(".event-item");


        eventItems.forEach(function(item) {

            const eventName =
                item.querySelector("h3")
                    .textContent
                    .toLowerCase();


            if (eventName.includes(searchValue)) {

                item.style.display = "flex";

            } else {

                item.style.display = "none";

            }

        });

});



// Filter Events
document.getElementById("filterCategory")
    .addEventListener("change", function() {

        const selectedCategory = this.value;


        const eventItems =
            document.querySelectorAll(".event-item");


        eventItems.forEach(function(item) {

            const category =
                item.querySelector("p:nth-of-type(3)")
                    .textContent;


            if (
                selectedCategory === "All" ||
                category.includes(selectedCategory)
            ) {

                item.style.display = "flex";

            } else {

                item.style.display = "none";

            }

        });

});
