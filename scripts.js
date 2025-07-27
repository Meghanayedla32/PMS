// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const supportForm = document.getElementById("supportForm");
    if (supportForm) {
        supportForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const type = document.getElementById("issueType").value;
            const desc = document.getElementById("issueDescription").value;
            document.getElementById("supportMessage").innerText =
                `Support ticket submitted for '${type}'. We will contact you soon.`;
            supportForm.reset();
        });
    }
});
//logout
function logout() {
    alert("You have been logged out.");
    localStorage.removeItem("username");
    window.location.href = "index.html";
}
//displaying name
const user = localStorage.getItem("username");
if (user) {
document.getElementById("displayUser").textContent = user;
} else {
document.getElementById("displayUser").textContent = "Guest";
}
//getting the credit/debit card
const card = localStorage.getItem("card");
if (card && typeof card === 'string' && card.length > 0) {
let capitalized = card.charAt(0).toUpperCase() + card.slice(1);
document.getElementById("displaycard").textContent = capitalized;
} else {
document.getElementById("displaycard").textContent = "None";
}
//scripts.js
