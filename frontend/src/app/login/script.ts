document.addEventListener("DOMContentLoaded", function() {
    const form: HTMLFormElement | null = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event: Event) {
            event.preventDefault(); 

            const emailInput: HTMLInputElement | null = document.querySelector(".frame-child[type='text']");
            const passwordInput: HTMLInputElement | null = document.querySelector(".frame-item[type='password']");

            if (emailInput && passwordInput) {
                const email: string = emailInput.value;
                const password: string = passwordInput.value;

                
                const minLength: number = 8;
                const uppercaseRegex: RegExp = /[A-Z]/;
                const lowercaseRegex: RegExp = /[a-z]/;
                const numberRegex: RegExp = /[0-9]/;
                const specialCharRegex: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

                
                const emailRegex: RegExp = /@/; 

                
                const hasUppercase: boolean = uppercaseRegex.test(password);
                const hasLowercase: boolean = lowercaseRegex.test(password);
                const hasNumber: boolean = numberRegex.test(password);
                const hasSpecialChar: boolean = specialCharRegex.test(password);

                const isValidPassword: boolean = password.length >= minLength &&
                    hasUppercase && hasLowercase && hasNumber && hasSpecialChar;

                
                const containsMix: boolean = hasUppercase && hasLowercase && hasSpecialChar && hasNumber;

                
                const isValidEmail: boolean = emailRegex.test(email);

                if (isValidPassword && isValidEmail) {
                    if (containsMix) {
                        
                        alert("Login successful!");
                    } else {
                        
                        alert("Password must contain a mix of uppercase letter, lowercase letter, special character, and number.");
                    }
                } else {
                    
                    if (!isValidEmail) {
                        alert("Invalid email address.");
                    } else {
                        alert("Password incorrect. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
                    }
                }
            }
        });
    }
});
