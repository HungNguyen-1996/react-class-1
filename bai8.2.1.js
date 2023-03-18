

function saveLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
  
    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
  
    // Chuyển hướng đến trang đăng nhập thành công
    window.location.href = "login-success.html";
  }
  





























































































  
  