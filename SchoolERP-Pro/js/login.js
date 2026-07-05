/**
 * SchoolERP-Pro Serverless Login Controller
 * Authenticates users using db.js localStorage simulated queries.
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const roleTabs = document.querySelectorAll('.role-tab');
    const selectedRoleInput = document.getElementById('selected-role');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('toggle-password-btn');
    const togglePasswordIcon = document.getElementById('toggle-password-icon');
    const submitBtn = document.getElementById('submit-btn');
    const submitIcon = document.getElementById('submit-icon');
    const submitSpinner = document.getElementById('submit-spinner');
    const loginAlert = document.getElementById('login-alert');
    const alertMessage = loginAlert.querySelector('.alert-message');
    const credChips = document.querySelectorAll('.cred-chip');

    // --- 1. DYNAMIC ROLE SWITCHER ---
    function selectRole(role) {
        roleTabs.forEach(tab => {
            if (tab.getAttribute('data-role') === role) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        selectedRoleInput.value = role;
        
        // Update placeholders dynamically
        if (role === 'admin') {
            usernameInput.placeholder = 'Enter admin username';
            document.documentElement.style.setProperty('--primary', 'hsl(245, 75%, 60%)');
        } else if (role === 'teacher') {
            usernameInput.placeholder = 'Enter teacher username or email';
            document.documentElement.style.setProperty('--primary', 'var(--accent)');
        } else {
            usernameInput.placeholder = 'Enter student username or admission no.';
            document.documentElement.style.setProperty('--primary', '#06b6d4');
        }
        
        hideAlert();
    }

    roleTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const role = tab.getAttribute('data-role');
            selectRole(role);
        });
    });

    // Parse URL parameter to auto-select tab on load (e.g. ?role=teacher)
    const urlParams = new URLSearchParams(window.location.search);
    const initialRole = urlParams.get('role');
    if (initialRole && ['admin', 'teacher', 'student'].includes(initialRole)) {
        selectRole(initialRole);
    } else {
        selectRole('student');
    }

    // --- 2. PASSWORD VISIBILITY TOGGLE ---
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        if (type === 'text') {
            togglePasswordIcon.classList.remove('fa-eye');
            togglePasswordIcon.classList.add('fa-eye-slash');
        } else {
            togglePasswordIcon.classList.remove('fa-eye-slash');
            togglePasswordIcon.classList.add('fa-eye');
        }
    });

    // --- 3. AUTOFILL DEMO CREDENTIALS ---
    credChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const role = chip.getAttribute('data-role-fill');
            const user = chip.getAttribute('data-user');
            const pass = chip.getAttribute('data-pass');
            
            selectRole(role);
            usernameInput.value = user;
            passwordInput.value = pass;
        });
    });

    // --- 4. ALERT HANDLERS ---
    function showAlert(message) {
        alertMessage.textContent = message;
        loginAlert.style.display = 'flex';
        loginAlert.classList.add('anim-slide-down');
    }

    function hideAlert() {
        loginAlert.style.display = 'none';
        loginAlert.classList.remove('anim-slide-down');
    }

    // --- 5. LOCAL AUTHENTICATION ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        hideAlert();

        // Show spinner animation
        submitBtn.disabled = true;
        submitIcon.style.display = 'none';
        submitSpinner.style.display = 'inline-block';

        // Simulate 400ms server lag for realistic premium feel
        setTimeout(() => {
            const username = usernameInput.value.trim();
            const password = passwordInput.value;
            const role = selectedRoleInput.value;

            if (!username || !password || !role) {
                showAlert('Please fill in all credentials fields.');
                resetSubmitButton();
                return;
            }

            const authResult = db.login(username, password, role);

            if (authResult.success) {
                // Redirect to dashboard page
                window.location.href = authResult.redirect;
            } else {
                showAlert(authResult.message || 'Invalid username, password, or portal role.');
                resetSubmitButton();
            }
        }, 400);
    });

    function resetSubmitButton() {
        submitBtn.disabled = false;
        submitIcon.style.display = 'inline-block';
        submitSpinner.style.display = 'none';
    }
});
