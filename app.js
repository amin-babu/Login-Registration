function showForm(type){
  document.getElementById('registerForm').classList.add('d-none');
  document.getElementById('loginForm').classList.add('d-none');


  if (type === 'register') {
    document.getElementById('registerForm').classList.remove('d-none');
  }else if(type === 'login'){
    document.getElementById('loginForm').classList.remove('d-none');
  }
}