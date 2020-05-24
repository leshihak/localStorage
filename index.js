const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const email = document.getElementById('email');
const emailIn = document.getElementById('email-in');
const number = document.getElementById('number');
const password = document.getElementById('password');
const passwordIn = document.getElementById('password-in');
const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');
const warning = document.querySelector('.warning-txt');
const warningIn = document.querySelector('.warning-txt-in');
const warningEmptyStorage = document.querySelector('.warning-txt-storage');
const warningEmailStorage = document.querySelector('.warning-email-storage');
const tick = document.querySelectorAll('.tick');
const cross = document.querySelectorAll('.cross');
const tickIn = document.querySelectorAll('.tickIn');
const crossIn = document.querySelectorAll('.crossIn');
const p = document.getElementsByTagName('p');
const signInTxt = document.querySelector('.signIn-txt');
const signUpTxt = document.querySelector('.signUp-txt');
const signUpForm = document.forms['signUpForm'];
const signInForm = document.forms['signInForm'];
const userBlock = document.querySelector('.block-user');
const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const userBtn = document.querySelector('.user-btn-sign-up');


// regex 
const validName = /^[a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
const validEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6})$/;
const validPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

// btns
let arrUsers = [];
const objLogInUser = {};
let everyKey;
let getKey;
let arrLocal;

signUp.addEventListener('click', () => {
  if ((password.value.match(validPassword)) && (firstName.value.match(validName)) && (secondName.value.match(validName)) && (email.value.match(validEmail))) {
    password.style.border = '3px double green';
    password.style.borderRadius = '10px';
    tick[3].style.display = 'block';
    firstName.style.border = '3px double green';
    firstName.style.borderRadius = '10px';
    tick[0].style.display = 'block';
    secondName.style.border = '3px double green';
    secondName.style.borderRadius = '10px';
    tick[1].style.display = 'block';
    email.style.border = '3px double green';
    email.style.borderRadius = '10px';
    tick[2].style.display = 'block';
    cross[0].style.display = 'none';
    cross[1].style.display = 'none';
    warning.style.display = 'none';
    warningEmailStorage.style.display = 'none';
    usersModule.getLocalStorage()
  } else {
    warning.style.display = 'block';
    email.style.border = '3px double rgb(241, 24, 144)';
    email.style.borderRadius = '10px';
    password.style.border = '3px double rgb(241, 24, 144)';
    password.style.borderRadius = '10px';
    cross[0].style.display = 'block';
    cross[1].style.display = 'block';
    tick[2].style.display = 'none';
    tick[3].style.display = 'none';
  }
});

firstName.addEventListener('input', (e) => {
  e.target.value != 0 ? p[0].style.display = 'block': p[0].style.display = 'none';
})

secondName.addEventListener('input', (e) => {
  e.target.value != 0 ? p[1].style.display = 'block': p[1].style.display = 'none';
})

email.addEventListener('input', (e) => {
  e.target.value != 0 ? p[2].style.display = 'block': p[2].style.display = 'none';
})

password.addEventListener('input', (e) => {
  e.target.value != 0 ? p[3].style.display = 'block': p[3].style.display = 'none';
})

signInTxt.addEventListener('click', () => {
  signUpForm.classList.add('hide');
  signUpForm.classList.remove('flex');
  signInForm.classList.add('flex');
  signInForm.classList.remove('hide');

  warning.style.display = 'none';
  email.style.border = 'none';
  email.style.borderRadius = 'none';
  password.style.border = 'none';
  password.style.borderRadius = 'none';
  cross[0].style.display = 'none';
  cross[1].style.display = 'none';
  tick[2].style.display = 'none';
  tick[3].style.display = 'none';
  signInForm.reset()
})

signUpTxt.addEventListener('click', () => {
  signUpForm.classList.add('flex');
  signUpForm.classList.remove('hide');
  signInForm.classList.add('hide');
  signInForm.classList.remove('flex');

  warningIn.style.display = 'none';
  emailIn.style.border = 'none';
  emailIn.style.borderRadius = 'none';
  crossIn[0].style.display = 'none';
  tickIn[0].style.display = 'none';
  passwordIn.style.border = 'none';
  passwordIn.style.borderRadius = 'none';
  crossIn[1].style.display = 'none';
  tickIn[1].style.display = 'none';
  firstName.style.border = 'none';
  firstName.style.borderRadius = 'none';
  tick[0].style.display = 'none';
  secondName.style.border = 'none';
  secondName.style.borderRadius = 'none';
  tick[1].style.display = 'none';
  signUpForm.reset()
})

signIn.addEventListener('click', () => {
  if ((emailIn.value.match(validEmail)) && (passwordIn.value.match(validPassword))) {
    usersModule.notRegisterUser()
    usersModule.validLocalStorage()
    signInForm.reset()
  } else {
    warningIn.style.display = 'block';
    emailIn.style.border = '3px double rgb(241, 24, 144)';
    emailIn.style.borderRadius = '10px';
    crossIn[0].style.display = 'block';
    tickIn[0].style.display = 'none';
    passwordIn.style.border = '3px double rgb(241, 24, 144)';
    passwordIn.style.borderRadius = '10px';
    crossIn[1].style.display = 'block';
    tickIn[1].style.display = 'none';
  };
})

userBtn.addEventListener('click', () => {
  userBlock.classList.add('hide');
  userBlock.classList.remove('flex');
  signInForm.classList.add('flex');
  signInForm.classList.remove('hide');
  userName.innerText = '';
  userEmail.innerText = '';
  warningEmptyStorage.classList.add('hide');
  warningEmptyStorage.classList.remove('show');
  warningIn.style.display = 'none';
  passwordIn.style.border = 'none';
  passwordIn.style.borderRadius = 'none';
  emailIn.style.border = 'none';
  emailIn.style.borderRadius = 'none';
  tickIn[0].style.display = 'none';
  crossIn[0].style.display = 'none';
  tickIn[1].style.display = 'none';
  crossIn[1].style.display = 'none';
})


const usersModule = (function() {
  function signUpUser() {
    userBlock.classList.add('flex');
    signInForm.classList.add('hide');
    signInForm.classList.remove('flex');
    warningEmptyStorage.classList.add('hide');
  }
  
  function notRegisterUser() {
    warningEmptyStorage.classList.add('show');
    warningEmptyStorage.classList.remove('hide');
    warningIn.style.display = 'none';
    passwordIn.style.border = '3px double rgb(241, 24, 144)';
    passwordIn.style.borderRadius = '10px';
    emailIn.style.border = '3px double rgb(241, 24, 144)';
    emailIn.style.borderRadius = '10px';
    tickIn[0].style.display = 'none';
    crossIn[0].style.display = 'block';
    tickIn[1].style.display = 'none';
    crossIn[1].style.display = 'block';
  }
  
  
  function getLocalStorage() {
    const objSignInUser = {};
    objSignInUser.firstName = firstName.value;
    objSignInUser.secondName = secondName.value;
    objSignInUser.email = email.value;
    objSignInUser.password = password.value;
  
     if(arrUsers.find(user => user.email === objSignInUser.email)) {
       warningEmailStorage.style.display = 'block';
       email.style.border = '3px double rgb(241, 24, 144)';
       email.style.borderRadius = '10px';
       cross[0].style.display = 'block';
     } else {
       arrUsers = [...arrUsers, objSignInUser];
       signUpForm.reset()
     }
  
    let key = 'users';
    let item = JSON.stringify(arrUsers);
    localStorage.setItem(key, item);
  
    for(let i = 0; i < localStorage.length; i++) {
      everyKey = localStorage.key(i);
      getKey = localStorage.getItem(everyKey);
      objLocal = JSON.parse(getKey);
    }
  }
  
  function validLocalStorage() {
    objLogInUser.email = emailIn.value;
    objLogInUser.password = passwordIn.value;
  
    for(let i = 0; i < localStorage.length; i++) {
      everyKey = localStorage.key(i);
      getKey = localStorage.getItem(everyKey);
      arrLocal = JSON.parse(getKey);
    }
  
    arrLocal.forEach(element => {
      if((element.email === objLogInUser.email) && (element.password === objLogInUser.password)) {
        userName.innerText = `${element.firstName} ${element.secondName}`;
        userEmail.innerText = `${element.email}`;
        usersModule.signUpUser()
      } else usersModule.notRegisterUser()
    });
  }  

  return {
    validLocalStorage: validLocalStorage,
    getLocalStorage: getLocalStorage,
    notRegisterUser: notRegisterUser,
    signUpUser: signUpUser
  }
})()