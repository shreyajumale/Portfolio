// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Typing Animation
const textArray = [
    "Web Developer",
    "Frontend Developer",
    "Creator of Duo Connectify"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let typingElement = document.querySelector(".typing");

function typeEffect() {
    if (index >= textArray.length) index = 0;

    currentText = textArray[index];
    typingElement.textContent = currentText.slice(0, charIndex++);

    if (charIndex > currentText.length) {
        index++;
        charIndex = 0;
        setTimeout(typeEffect, 1000);
    } else {
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        formMessage.textContent = "Please fill all fields!";
        formMessage.style.color = "red";
        return;
    }

    if(!email.includes("@")){
        formMessage.textContent = "Enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "lightgreen";
    this.reset();
});
