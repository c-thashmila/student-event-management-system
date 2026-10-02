document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const location = document.getElementById('eventLocation').value;

    const eventList = document.getElementById('eventList');
    const li = document.createElement('li');

    li.innerHTML = `
        <div>
            <strong>${name}</strong> - ${date} (${location})
        </div>
        <button class="delete-btn" onclick="deleteEvent(this)">Delete</button>
    `;

    eventList.appendChild(li);


    document.getElementById('eventForm').reset();
});

function deleteEvent(element) {
    element.parentElement.remove();
}
  
