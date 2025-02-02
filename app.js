// Interactive functionallity

function showForm(type) {
  document.getElementById('registerForm').classList.add('d-none');
  document.getElementById('loginForm').classList.add('d-none');


  if (type === 'register') {
    document.getElementById('registerForm').classList.remove('d-none');
  } else if (type === 'login') {
    document.getElementById('loginForm').classList.remove('d-none');
  }
}


// Register functionallity

function register() {
  const fullName = document.getElementById('regFullname').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  if (!fullName) {
    alert('Please enter your name.');
    return;
  }
  if (!email) {
    alert('Please enter your email.');
    return;
  }
  if (!password) {
    alert('Please enter your password.');
    return;
  }

  const user = { fullName, email, password };
  localStorage.setItem(email, JSON.stringify(user))

  alert('Registration Successfull.')

  document.getElementById('regFullname').value = '';
  document.getElementById('regEmail').value = '';
  document.getElementById('regPassword').value = '';

  showForm('login')
}

// Login Functionality

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email) {
    alert('Please enter your email.');
    return;
  }
  if (!password) {
    alert('Please enter your password.');
    return;
  }

  const user = localStorage.getItem(email);
  console.log('Str value of local storage',user)

  if(!user){
    alert('User not exist!');
    return;
  }

  const perseUser = JSON.parse(user);

  if (password != perseUser.password){
    alert('Password is incorrect!');
    return;
  }

  alert('Login Successfull. Welcome '+ perseUser.fullName);

  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}