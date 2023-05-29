const loginButton = document.querySelector('.login-button');
const loginPopup = document.querySelector('.login-popup');
const blurEffect =  document.querySelector('.blur-effect');
const cancelPopup = document.querySelector ('.cancel-popup');



loginButton.addEventListener('click', () => {
  loginPopup.style.display = 'block';
  blurEffect.style.display = 'block';
  document.body.classList.add('popup-open');
});

blurEffect.addEventListener('click', () => {
  loginPopup.style.display = 'none';
  blurEffect.style.display = 'none';
  document.body.classList.remove('popup-open');
});


cancelPopup.addEventListener('click', () => {
    loginPopup.style.display = 'none';
    blurEffect.style.display = 'none';
    document.body.classList.remove('popup-open');
});


const myInput = document.getElementById('name_user_type');
const displayText = document.getElementById('usuario_title_fade');

const myInput2 = document.getElementById('password_user_type');
const displayText2 = document.getElementById('password_title_fade');

myInput.addEventListener('input', () => {
  if (myInput.value.trim().length > 0) {
    displayText.classList.add('show');
  } else {
    displayText.classList.remove('show');
  }
});

myInput2.addEventListener('input', () => {
  if (myInput2.value.trim().length > 0) {
    displayText2.classList.add('show');
  } else {
    displayText2.classList.remove('show');
  }
});

function redirectToPage() {
  window.location.href = "/secciones/registrarse.html";
}