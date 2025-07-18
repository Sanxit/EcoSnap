function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Close modal when clicking the close button (optional)
closeBtn.addEventListener("click", () => {
  document.querySelector(".auth-modal").style.display = "none";
});
// Sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Get DOM elements
const emailInput = document.getElementById("email");
const continueBtn = document.querySelector(".auth-form button");
const form = document.querySelector(".auth-form");
const closeBtn = document.querySelector(".close-btn");

// Email validation using regex
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Toggle Continue button based on email validity
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    continueBtn.disabled = false;
    continueBtn.classList.add("active");
  } else {
    continueBtn.disabled = true;
    continueBtn.classList.remove("active");
  }
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form behavior

  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    alert(`Form submitted successfully with email: ${email}`);
    // Optionally reset the form
    form.reset();
    continueBtn.disabled = true;
    continueBtn.classList.remove("active");
  } else {
    alert("Please enter a valid email address.");
  }
});

function switchTab(tab) {
  // Remove 'active' class from all
  document
    .querySelectorAll(".tab-title")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".form-page")
    .forEach((form) => form.classList.remove("active"));

  // Add 'active' to clicked tab and corresponding form
  if (tab === "photoshoot") {
    document.getElementById("photoshootForm").classList.add("active");
    document.querySelector(".tab-title:nth-child(1)").classList.add("active");
  } else {
    document.getElementById("personalForm").classList.add("active");
    document.querySelector(".tab-title:nth-child(2)").classList.add("active");
  }
}

const photoshootForm = document.getElementById("photoshootForm");
const personalForm = document.getElementById("personalForm");
const nextBtn = document.getElementById("nextToPersonal");
const backBtn = document.getElementById("backToPhotoshoot");

nextBtn.addEventListener("click", () => {
  photoshootForm.classList.remove("active");
  personalForm.classList.add("active");
});

backBtn.addEventListener("click", () => {
  personalForm.classList.remove("active");
  photoshootForm.classList.add("active");
});


