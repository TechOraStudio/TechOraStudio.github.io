//==========================
// DARK MODE
//==========================

const root = document.documentElement;
const toggleBtn = document.getElementById("darkModeToggle");
const toggleLabel = document.getElementById("toggleLabel");
const toggleIcon = document.getElementById("toggleIcon");

function applyTheme(theme) {
    const safeTheme = theme === "light" ? "light" : "dark";

    root.setAttribute("data-theme", safeTheme);
    localStorage.setItem("portfolio-theme", safeTheme);

    if (toggleLabel) {
        toggleLabel.textContent = safeTheme === "dark" ? "Light Mode" : "Dark Mode";
    }

    if (toggleIcon) {
        toggleIcon.textContent = safeTheme === "dark" ? "☀️" : "🌙";
    }

    if (toggleBtn) {
        toggleBtn.setAttribute("aria-pressed", String(safeTheme === "dark"));
    }
}

const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme || root.getAttribute("data-theme") || "dark";
applyTheme(initialTheme);

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark");
    });
}

//==========================
// LEARNING JOURNEY
//==========================

const items = document.querySelectorAll(".t-item");

if (items.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.20
    });

    items.forEach((item) => {
        observer.observe(item);
    });
}

//==========================
// SMOOTH SCROLL
//==========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

//==========================
// CONTACT FORM
//==========================

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank You!\n\nYour message has been submitted successfully.");
        form.reset();
    });
}
