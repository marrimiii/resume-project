// 1. Prompt personalization
let userName = prompt("Enter your name:");
if (userName) {
    document.getElementById("welcomeText").innerText = "Welcome, " + userName;
}

// 2. Toggle About
function toggleAbout() {
    let text = document.getElementById("aboutText");

    if (text.innerText.includes("Fresh graduate")) {
        text.innerText += " Skilled in web development and eager to learn.";
    } else {
        text.innerText = "Fresh graduate with a Bachelor's degree in Information Technology...";
    }
}

// 3. Load Projects
document.getElementById("loadProjects").addEventListener("click", function () {
    let projects = ["Online Billing System", "Resume Website", "Game Project"];
    let list = document.getElementById("projectList");

    list.innerHTML = "";
    projects.forEach(p => {
        let li = document.createElement("li");
        li.textContent = p;
        list.appendChild(li);
    });
});

// 4. Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("formFeedback").innerText = "Please fill all fields!";
    } else {
        document.getElementById("formFeedback").innerText = "Message sent successfully!";
    }
});

// ================= jQuery =================
$(document).ready(function () {

    // Toggle skills
    $("#skills h2").on("click", function () {
        $("#skillList").toggle();
    });

    // Search filter
    $("#searchSkill").on("keyup", function () {
        let value = $(this).val().toLowerCase();

        $("#skillList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

});