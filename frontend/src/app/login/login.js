document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Regular expression for password validation
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address.');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Invalid password. Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.');
            return;
        }
        // If both email and password satisfy the criteria, show login successful message
        alert('Login successful!');
    });
});
