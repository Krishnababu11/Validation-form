document.getElementById("form").addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();

      const usernameError = document.getElementById("usernameError");
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");
      const confirmPasswordError = document.getElementById("confirmPasswordError");
      const successMessage = document.getElementById("successMessage");

      // Reset error messages
      usernameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      confirmPasswordError.textContent = "";
      successMessage.textContent = "";

      let valid = true;

      if (username === "") {
        usernameError.textContent = "Username is required";
        valid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
      } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email";
        valid = false;
      }

      if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
      } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        valid = false;
      }

      if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        valid = false;
      } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
      }

      if (valid) {
        successMessage.textContent = "Registration successful!";
        // Optionally reset form:
        // document.getElementById("registerForm").reset();
      }
    });

    