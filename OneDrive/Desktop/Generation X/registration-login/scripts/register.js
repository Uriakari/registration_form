//Get form element by id
const registerForm = document.getElementById('register');

// define function by name and {}
// function registerUser() {

// }
// Handle form submit event
// registerForm.onsubmit = registerUser;

// }

registerForm.onsubmit = function(event) {
    event.preventDefault();
    console.log(event);
}