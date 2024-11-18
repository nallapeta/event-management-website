document.addEventListener("DOMContentLoaded", function () {
    const addEventForm = document.getElementById("addEventForm");

    if (addEventForm) {
        addEventForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload on form submission

            // Capture form input values
            const title = document.getElementById("title").value;
            const organiser = document.getElementById("organiser").value;
            const description = document.getElementById("description").value;
            const date = document.getElementById("date").value;
            const location = document.getElementById("location").value;
            const cost = document.getElementById("cost").value;
            const image = document.getElementById("image").value;

            // Create a new event object with the image property
            const newEvent = { title, organiser, description, date, location, cost, image };

            // Retrieve existing events from localStorage or initialize an empty array
            let events = JSON.parse(localStorage.getItem("events")) || [];
            
            // Add the new event to the array
            events.push(newEvent);
            
            // Save the updated events array back to localStorage
            localStorage.setItem("events", JSON.stringify(events));

            // Display a success message
            const message = document.getElementById("addEventMessage");
            message.textContent = "Event added successfully!";
            message.style.color = "green";

            // Clear the form fields
            addEventForm.reset();
        });
    } else {
        console.error("Add Event form not found. Check HTML for id='addEventForm'.");
    }
});
