// Get references to the elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

// Show login form when "Login" button is clicked
loginBtn.addEventListener('click', function() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';  // Hide signup form
});

// Show signup form when "Sign Up" button is clicked
signupBtn.addEventListener('click', function() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';  // Hide login form
});

// Show signup form when "Sign Up" link is clicked inside login form
showSignup.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent link's default behavior
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});

// Show login form when "Login" link is clicked inside signup form
showLogin.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent link's default behavior
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});
