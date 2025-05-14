function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fungsi untuk menampilkan error
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Fungsi untuk membersihkan error
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
}

// Fungsi untuk menangani submit form
function handleSubmit(event) {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMessage = document.getElementById('success-message');
    
    let isValid = true;

    // Validasi nama
    if (!name) {
        showError('name-error', 'Nama tidak boleh kosong');
        isValid = false;
    }

    // Validasi email
    if (!email) {
        showError('email-error', 'Email tidak boleh kosong');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email-error', 'Format email tidak valid');
        isValid = false;
    }

    // Validasi pesan
    if (!message) {
        showError('message-error', 'Pesan tidak boleh kosong');
        isValid = false;
    }

}