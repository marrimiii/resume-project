// 1. Ask name first
let userName = prompt("Enter your name:");

if (userName) {
    document.getElementById("welcomeText").innerText = "Welcome, " + userName + "!";
} else {
    document.getElementById("welcomeText").innerText = "Welcome!";
}


// 2. View More Projects
function toggleProjects() {
    let more = document.getElementById("moreProjects");
    let btn = document.getElementById("viewBtn");

    if (more.style.display === "none") {
        more.style.display = "block";
        btn.innerText = "View Less";
    } else {
        more.style.display = "none";
        btn.innerText = "View More";
    }
}


// 3. Form Validation
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
$("#contactForm").on("submit", function () {
    $("#contactNote").show();
});
    // Search filter
    $("#searchSkill").on("keyup", function () {
        let value = $(this).val().toLowerCase();

        $(".skillList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

});