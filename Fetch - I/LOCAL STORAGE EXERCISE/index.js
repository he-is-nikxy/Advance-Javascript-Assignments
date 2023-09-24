



const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const retrieveDataButton = document.getElementById("retrieveData");
const dataRows = document.getElementById("dataRows");

userForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    if (name && age) {
        
        localStorage.setItem("userName", name);
        localStorage.setItem("userAge", age);
        nameInput.value = "";
        ageInput.value = "";
    }
});

retrieveDataButton.addEventListener("click", function () {
    const storedName = localStorage.getItem("userName");
    const storedAge = localStorage.getItem("userAge");
    if (storedName && storedAge) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${storedName}</td>
            <td>${storedAge}</td>
        `;
        dataRows.appendChild(newRow);
    }
});








