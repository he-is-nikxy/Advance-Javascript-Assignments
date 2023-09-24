


const fetchUsersButton = document.getElementById("fetchUsers");
const userContainer = document.getElementById("userContainer");

fetchUsersButton.addEventListener("click", () => {
    // Fetch user data from the Reqres API
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => {
            // Clear existing user cards
            userContainer.innerHTML = "";

            // Display user data
            data.data.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("userCard");

                const userAvatar = document.createElement("img");
                userAvatar.classList.add("userAvatar");
                userAvatar.src = user.avatar;
                userAvatar.alt = `${user.first_name} ${user.last_name}`;

                const userName = document.createElement("p");
                userName.textContent = `${user.first_name} ${user.last_name}`;

                const userEmail = document.createElement("p");
                userEmail.textContent = user.email;

                userCard.appendChild(userAvatar);
                userCard.appendChild(userName);
                userCard.appendChild(userEmail);

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
});











