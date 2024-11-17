import eventsData from './events.js';

document.addEventListener("DOMContentLoaded", function () {
    let currentFilterType = ""; // Start with no filter (all events displayed)
    let allEvents = []; // This will store the combined list of events

    

    function loadEvents() {
        const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        allEvents = [...eventsData, ...storedEvents];
        displayEvents(allEvents); // Display all events initially
    }

    function displayEvents(events) {
        const eventsContainer = document.getElementById("events-container");
        eventsContainer.innerHTML = ""; // Clear existing content

        events.forEach(event => {
            const card = document.createElement("div");
            card.className = "event-card";
            card.innerHTML = `
                <img src="${event.img}">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><img src="cal.png">&ensp; ${event.date}</p>
                <p><img src="loc.png">&ensp; ${event.location}</p>
            `;
            eventsContainer.appendChild(card);
        });
    }

    //localStorage.clear();
    loadEvents(); // Load and display events on page load

    // Search and filter functionality
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            filterEvents(searchInput.value, currentFilterType);
        });
    }

    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.addEventListener("click", (e) => {
            const filterType = e.target.getAttribute("data-filter");
            currentFilterType = filterType === "all" ? "" : filterType;
            filterEvents(searchInput.value, currentFilterType);
        });
    });

    // Helper functions to check dates
    function isEventToday(eventDate) {
        const today = new Date();
        return eventDate.toDateString() === today.toDateString();
    }

    function isEventTomorrow(eventDate) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return eventDate.toDateString() === tomorrow.toDateString();
    }

    function isEventThisWeek(eventDate) {
        const today = new Date();
        const endOfWeek = new Date();
        endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
        return eventDate >= today && eventDate <= endOfWeek;
    }

    function isEventThisWeekend(eventDate) {
        const today = new Date();
        const startOfWeekend = new Date(today);
        startOfWeekend.setDate(today.getDate() + (6 - today.getDay() - 1));
        const endOfWeekend = new Date(startOfWeekend);
        endOfWeekend.setDate(startOfWeekend.getDate() + 1);
        return eventDate >= startOfWeekend && eventDate <= endOfWeekend;
    }

    function isEventThisMonth(eventDate) {
        const today = new Date();
        return eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear();
    }

    // Function to filter events based on search text and filter type
    function filterEvents(searchText = "", filterType = "") {
        const filteredEvents = allEvents.filter(event => {
            const titleMatch = event.title.toLowerCase().includes(searchText.toLowerCase());
            const descriptionMatch = event.description.toLowerCase().includes(searchText.toLowerCase());
            const locationMatch = event.location.toLowerCase().includes(searchText.toLowerCase());
            const dateMatch = event.date.toLowerCase().includes(searchText.toLowerCase());

            const eventDate = new Date(event.date);
            let dateFilterMatch = true;

            if (filterType === "today") dateFilterMatch = isEventToday(eventDate);
            else if (filterType === "tomorrow") dateFilterMatch = isEventTomorrow(eventDate);
            else if (filterType === "this-week") dateFilterMatch = isEventThisWeek(eventDate);
            else if (filterType === "this-weekend") dateFilterMatch = isEventThisWeekend(eventDate);
            else if (filterType === "this-month") dateFilterMatch = isEventThisMonth(eventDate);

            return (titleMatch || descriptionMatch || locationMatch || dateMatch) && dateFilterMatch;
        });

        displayEvents(filteredEvents); // Display the filtered events
    }
});
