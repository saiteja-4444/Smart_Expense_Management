document.addEventListener('DOMContentLoaded', () => {
    const form: HTMLFormElement | null = document.querySelector('form');

    if (!form) {
        console.error("Form element not found.");
        return;
    }

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const emailInput: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
        const passwordInput: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;

        if (!emailInput || !passwordInput) {
            console.error("Email or password input element not found.");
            return;
        }

        const email: string = emailInput.value;
        const password: string = passwordInput.value;

        // Regular expression for email validation
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Regular expression for password validation
        const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;

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
