// Interactive functionallity

function showForm(type){
  document.getElementById('registerForm').classList.add('d-none');
  document.getElementById('loginForm').classList.add('d-none');


  if (type === 'register') {
    document.getElementById('registerForm').classList.remove('d-none');
  }else if(type === 'login'){
    document.getElementById('loginForm').classList.remove('d-none');
  }
}


// Register functionallity

function register(){
  const fullName = document.getElementById('regFullname').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  if (!fullName){
    alert('Please enter your name.');
    return;
  }
  if (!email){
    alert('Please enter your email.');
    return;
  }
  if (!password){
    alert('Please enter your password.');
    return;
  }
}