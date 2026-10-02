document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');
    const searchInput = document.getElementById('searchInput');
    const filterCategory = document.getElementById('filterCategory');

    let events = JSON.parse(localStorage.getItem('events')) || [];

    function saveAndRender() {
        localStorage.setItem('events', JSON.stringify(events));
        renderEvents();
    }

    function renderEvents() {
        eventList.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = filterCategory.value;

        const filteredEvents = events.filter(event => {
            const matchesSearch = event.name.toLowerCase().includes(searchTerm) || event.location.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        if (filteredEvents.length === 0) {
            eventList.innerHTML = '<p style="text-align:center; color: var(--text-muted);">No events found.</p>';
            return;
        }

        filteredEvents.forEach((event, index) => {
            const li = document.createElement('li');
            li.className = 'event-item';
            li.innerHTML = `
                <div class="event-details">
                    <h3>${event.name} <span class="badge">${event.category}</span></h3>
                    <div class="event-meta">
                        <span><i class="fa-regular fa-calendar"></i> ${event.date}</span>
                        <span><i class="fa-solid fa-location-dot"></i> ${event.location}</span>
                    </div>
                </div>
                <button class="btn-delete" onclick="deleteEvent(${index})"><i class="fa-solid fa-trash"></i></button>
            `;
            eventList.appendChild(li);
        });
    }

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEvent = {
            name: document.getElementById('eventName').value,
            date: document.getElementById('eventDate').value,
            category: document.getElementById('eventCategory').value,
            location: document.getElementById('eventLocation').value
        };

        events.push(newEvent);
        saveAndRender();
        eventForm.reset();
    });

    searchInput.addEventListener('input', renderEvents);
    filterCategory.addEventListener('change', renderEvents);

    window.deleteEvent = (index) => {
        events.splice(index, 1);
        saveAndRender();
    };

    renderEvents();
});
