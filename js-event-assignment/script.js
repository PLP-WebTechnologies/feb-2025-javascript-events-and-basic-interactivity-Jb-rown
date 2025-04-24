// Buy button changes text & color
function changeButtonText(button) {
    button.textContent = "Added to Cart!";
    button.style.backgroundColor = "#28a745";
  }
  
  // Real-time form validation
  const signupForm = document.getElementById('signupForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailFeedback = document.getElementById('emailFeedback');
  const passwordFeedback = document.getElementById('passwordFeedback');
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  emailInput.addEventListener('input', () => {
    if (!emailPattern.test(emailInput.value)) {
      emailFeedback.textContent = "Please enter a valid email address.";
    } else {
      emailFeedback.textContent = "";
    }
  });
  
  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
      passwordFeedback.textContent = "Password must be at least 8 characters.";
    } else {
      passwordFeedback.textContent = "";
    }
  });
  
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
  
    if (emailValue === "" || passwordValue === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!emailPattern.test(emailValue)) {
      alert("Invalid email address.");
      return;
    }
  
    if (passwordValue.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
  
    alert("Successfully signed up!");
    signupForm.reset();
  });
  