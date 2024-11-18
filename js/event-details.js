document.addEventListener("DOMContentLoaded", function () {
    const selectedEvent = JSON.parse(sessionStorage.getItem("selectedEvent"));
    if (selectedEvent) {
        const eventDetailsSection = document.getElementById("event-details");
        eventDetailsSection.className = "eventDetails";
        eventDetailsSection.innerHTML = `
            <a href="../index.html"><img src="../img/back.png">&nbsp;Go Back</a>
            <img src="${selectedEvent.image}">
            <h1>${selectedEvent.title}</h1>
            <div class="keyDes">
            <p><img src="../img/cal.png">&ensp; ${selectedEvent.date}</p>
            <p><img src="../img/loc.png">&ensp; ${selectedEvent.location}</p>
            <p><img src="../img/cash.png">&ensp; ${selectedEvent.cost}</p>
            <p><img src="../img/person.png">&ensp; ${selectedEvent.organiser}</p>
            </div>
            <p>${selectedEvent.description}</p>
        `;
    } else {
        document.getElementById("event-details").innerHTML = `<p>Event details not found.</p>`;
    }
});
