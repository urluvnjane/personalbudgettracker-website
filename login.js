// Get the login form and attach a submit event listener
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validateLogin);

function validateLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if email and password are valid (example validation)
  if (email === 'example@gmail.com' && password === 'password') {
    // Redirect to budgettracker.html
    window.location.href = 'budgettracker.html';
  } else {
    // Clear the form
    loginForm.reset();
    window.location.href = 'budgettracker.html';
  }
}
