function handleStudentLogin() {
  const username = document.getElementById('usernameInput').value.trim();

  // Check if name is empty
  if (username === '') {
    document.getElementById('errorMsg').classList.add('show');
    return;
  }

  // Hide error if it was shown before
  document.getElementById('errorMsg').classList.remove('show');

  // Save the username so menu page can use it
  localStorage.setItem('studentName', username);

  // Go to menu page
  window.location.href = 'student-menu.html';
}

// Press Enter to continue
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') handleStudentLogin();
});

// Hide error when user starts typing
document.getElementById('usernameInput').addEventListener('input', function() {
  document.getElementById('errorMsg').classList.remove('show');
});