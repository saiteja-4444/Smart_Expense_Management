document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission
            var emailInput = document.querySelector(".frame-child[type='text']");
            var passwordInput = document.querySelector(".frame-item[type='password']");
            if (emailInput && passwordInput) {
                var email = emailInput.value;
                var password = passwordInput.value;
                // Password validation criteria
                var minLength = 8;
                var uppercaseRegex = /[A-Z]/;
                var lowercaseRegex = /[a-z]/;
                var numberRegex = /[0-9]/;
                var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
                // Email validation criteria
                var emailRegex = /@/; 
                // Check if password meets all criteria
                var hasUppercase = uppercaseRegex.test(password);
                var hasLowercase = lowercaseRegex.test(password);
                var hasNumber = numberRegex.test(password);
                var hasSpecialChar = specialCharRegex.test(password);
                var isValidPassword = password.length >= minLength &&
                    hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
                // Check if password contains a mix of uppercase, lowercase, special character, and number
                var containsMix = hasUppercase && hasLowercase && hasSpecialChar && hasNumber;
                
                var isValidEmail = emailRegex.test(email);
                if (isValidPassword && isValidEmail) {
                    if (containsMix) {
                        
                        alert("Login successful!");
                    }
                    else {
                        
                        alert("Password must contain a mix of uppercase letter, lowercase letter, special character, and number.");
                    }
                }
                else {
                    
                    if (!isValidEmail) {
                        alert("Invalid email address.");
                    }
                    else {
                        alert("Password incorrect. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
                    }
                }
            }
        });
    }
});
