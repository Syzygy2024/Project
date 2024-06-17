document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const registerButton = document.getElementById('registerButton');
    const messageDiv = document.getElementById('message');

    // Basic validation
    if (!name || !email || !password) {
        // Move the button to the right if form is not filled
        registerButton.classList.add('moved');
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.classList.add('error');
        return;
    }

    // Reset button position and message
    registerButton.classList.remove('moved');
    messageDiv.textContent = '';
    messageDiv.classList.remove('error', 'success');

    // Disable the button and show loading state
    registerButton.disabled = true;
    registerButton.classList.add('loading');
    messageDiv.textContent = 'Registering...';

    try {
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Show success message
            messageDiv.textContent = data.message;
            messageDiv.classList.add('success');
        } else {
            // Show error message
            messageDiv.textContent = data.message || 'Registration failed!';
            messageDiv.classList.add('error');
        }
    } catch (error) {
        // Show error message for network issues or other unexpected errors
        messageDiv.textContent = 'An error occurred. Please try again later.';
        messageDiv.classList.add('error');
    }

    // Re-enable the button and reset loading state
    registerButton.disabled = false;
    registerButton.classList.remove('loading');
});

// Add event listeners to input fields to move the button back if user starts typing
document.getElementById('name').addEventListener('input', resetButtonPosition);
document.getElementById('email').addEventListener('input', resetButtonPosition);
document.getElementById('password').addEventListener('input', resetButtonPosition);

function resetButtonPosition() {
    const registerButton = document.getElementById('registerButton');
    if (registerButton.classList.contains('moved')) {
        registerButton.classList.remove('moved');
    }
}
