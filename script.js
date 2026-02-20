// ================================
// Modern Portfolio Interactivity
// ================================

document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       Mobile Navigation
    ========================== */

    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');
    const header = document.querySelector('header');

    if (navToggle && primaryNav) {

        navToggle.addEventListener('click', () => {
            const isActive = primaryNav.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive);
        });

        // Close nav on outside click
        document.addEventListener('click', (e) => {
            if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) {
                primaryNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
            }
        });

        // Close on link click (mobile)
        primaryNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                primaryNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }

    /* =========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* =========================
       Navbar Background on Scroll
    ========================== */

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(15, 23, 42, 0.95)";
        } else {
            header.style.background = "rgba(15, 23, 42, 0.7)";
        }
    });

    /* =========================
       Active Link Highlight
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* =========================
       Scroll Reveal Animation
    ========================== */

    const revealElements = document.querySelectorAll(".section, .project-card, .skill-card");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /* =========================
       Contact Form Handling
    ========================== */

    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name) return showMessage("Please enter your name.", false);
            if (!emailPattern.test(email)) return showMessage("Please enter a valid email.", false);
            if (message.length < 6) return showMessage("Message must be at least 6 characters.", false);

            showMessage("✅ Message sent successfully! (Demo only)", true);
            form.reset();
        });
    }

    function showMessage(msg, success) {
        let messageBox = document.querySelector(".form-message");

        if (!messageBox) {
            messageBox = document.createElement("div");
            messageBox.classList.add("form-message");
            form.appendChild(messageBox);
        }

        messageBox.textContent = msg;
        messageBox.style.marginTop = "15px";
        messageBox.style.padding = "10px";
        messageBox.style.borderRadius = "8px";
        messageBox.style.fontSize = "14px";
        messageBox.style.background = success ? "#16a34a" : "#dc2626";
        messageBox.style.color = "white";
    }

    /* =========================
       Footer Year Auto Update
    ========================== */

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

});