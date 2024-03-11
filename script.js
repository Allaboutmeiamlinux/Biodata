function showPage(pageId) {
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
      if (pages[i].id === pageId) {
          pages[i].style.display = 'block';
      } else {
          pages[i].style.display = 'none';
      }
  }
}
function validateForm(event) {
  event.preventDefault(); // Prevent form submission for now
  
  // Fetching input values
  var username = document.getElementById("u_name").value;
  var password = document.getElementById("passWord").value;
  
  // Simple validation
  if (username.trim() === "") {
      alert("Please enter a username");
      return false; // Prevent form submission
  }
  
  if (password.trim() === "") {
      alert("Please enter a password");
      return false; // Prevent form submission
  }
  
  // If validation passes, allow form submission
  document.getElementById("loginForm").submit();
}
function validateSignUp(event) {
  event.preventDefault(); // Prevent form submission for now
  
  // Fetching input values
  var username = document.getElementById("u_name").value;
  var password = document.getElementById("passWord").value;
  var confirmPassword = document.getElementById("C_password").value;
  
  // Simple validation
  if (username.trim() === "") {
      alert("Please enter a username");
      return false; // Prevent form submission
  }
  
  if (password.trim() === "") {
      alert("Please enter a password");
      return false; // Prevent form submission
  }
  
  if (confirmPassword.trim() === "") {
      alert("Please confirm your password");
      return false; // Prevent form submission
  }
  
  if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false; // Prevent form submission
  }
  
  // If validation passes, navigate to page 3
  showPage('page3');
}
function validateLoginForm(event) {
  event.preventDefault(); // Prevent form submission for now
  
  // Fetching input values
  var username = document.getElementById("u_name").value;
  var password = document.getElementById("passWord").value;
  
  // Simple validation
  if (username.trim() === "") {
      alert("Please enter a username");
      return false; // Prevent form submission
  }
  
  if (password.trim() === "") {
      alert("Please enter a password");
      return false; // Prevent form submission
  }
  
  // If validation passes, navigate to page 3
  showPage('page3');
}
function submitForm(event) {
  event.preventDefault();
  var form = event.target;
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Handle successful form submission, if needed
      console.log(xhr.responseText);
    }
  };
  xhr.send(new URLSearchParams(formData).toString());
}
