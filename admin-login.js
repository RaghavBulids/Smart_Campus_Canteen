// Admin credentials (hardcoded for demo - use backend authentication in production)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};

// Form submission handler
document.getElementById("adminLoginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Validate credentials
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    // Store admin session
    sessionStorage.setItem("adminLoggedIn", "true");
    sessionStorage.setItem("adminUsername", username);
    
    showToast("Login successful! Redirecting...", false);
    
    // Redirect to admin dashboard
    setTimeout(() => {
      window.location.href = "admin-dashboard.html";
    }, 1000);
  } else {
    showToast("Invalid username or password", true);
  }
});

// Toast notification function
function showToast(message, isError) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast show ${isError ? 'error' : 'success'}`;
  
  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

// Clear any existing session on page load
window.addEventListener("load", function() {
  // Optional: Clear old sessions when landing on login page
  // sessionStorage.removeItem("adminLoggedIn");
});
