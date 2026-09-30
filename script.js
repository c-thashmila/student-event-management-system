document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form inputs ලබා ගැනීම
    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const location = document.getElementById('eventLocation').value;

    // නව List item එකක් සෑදීම
    const eventList = document.getElementById('eventList');
    const li = document.createElement('li');

    li.innerHTML = `
        <div>
            <strong>${name}</strong> - ${date} (${location})
        </div>
        <button class="delete-btn" onclick="deleteEvent(this)">Delete</button>
    `;

    eventList.appendChild(li);

    // Form එක Clear කිරීම
    document.getElementById('eventForm').reset();
});

// Event එකක් Remove කිරීමේ Function එක
function deleteEvent(element) {
    element.parentElement.remove();
}
