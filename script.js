// Get references to our HTML elements
const loadUsersBtn = document.getElementById("load-users-btn");
const userListDiv = document.getElementById("user-list");
const errorMessageDiv = document.getElementById("error-message");

// Define our main async function
async function fetchAndDisplayUsers() {
    try {
        // Clear any previous users and error messages at the start
        userListDiv.innerHTML = '';
        errorMessageDiv.textContent = '';
        
        // Fetch the data
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // Loop through the users and display them on the screen
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add("user-card");

            const userName = document.createElement('h3'); // Changed to h3 for proper hierarchy
            const userEmail = document.createElement('p');
            const userCity = document.createElement('p');

            // Set textContent to the variable, NOT a string literal
            userName.textContent = user.name;
            userEmail.textContent = user.email;
            userCity.textContent = user.address.city;
            
            // Append the new elements to the card
            userCard.appendChild(userName);
            userCard.appendChild(userEmail);
            userCard.appendChild(userCity);

            // Append the finished card to the main user list container
            userListDiv.appendChild(userCard);
        });

        // The console log is for debugging. It works fine here.
        console.log('Fetched users:', users);

    } catch (error) {
        console.error('An error occurred:', error);
        errorMessageDiv.textContent = 'Failed to load users. Please check your internet and try again.';
    }
}
// Add the event listener to the button
loadUsersBtn.addEventListener("click", fetchAndDisplayUsers);