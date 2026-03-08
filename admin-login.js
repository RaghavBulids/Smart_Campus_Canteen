document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const ADMIN_USER = "admin";
    const ADMIN_PASS = "canteen123";

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        showToast("Login Successful! Redirecting...", false);
        
        sessionStorage.setItem("adminLoggedIn", "true");

        setTimeout(() => {
            window.location.href = "admin-dashboard.html";
        }, 1500);
    } else {
        showToast("Invalid Username or Password", true);
    }
});

function showToast(message, isError) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = isError ? "toast error show" : "toast show";
    
    setTimeout(() => {
        toast.className = "toast";
    }, 3000);
}