function animatedForm() {
  const arrow = document.querySelectorAll('.fa-arrow-down');

  arrow.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;
      //   console.log(nextForm);
      if ((input.type = 'text' && validateUser(input))) {
        nextSlide(parent, nextForm);
      } else if ((input.type = 'email' && validEmail(input))) {
        nextSlide(parent, nextForm);
      } else if ((input.type = 'password' && validateUser(input))) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = 'shake 0.5s ease';
      }
      parent.addEventListener('animationend', () => {
        parent.style.animation = '';
      });
    });
  });
}
function nextSlide(parent, nextForm) {
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}
function validateUser(user) {
  if (user.value.length < 6) {
    console.log('Not enough characters');
    error('rgb(189,87,87)');
  } else {
    error('rgba(62, 77, 116, 0.692)');
    return true;
  }
}
function validEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+s/;
  if (validation.test(email.value)) {
    error('rgba(62, 77, 116, 0.692)');
    return true;
  } else {
    error('rgb(189,87,87)');
  }
}
function error(color) {
  document.body.style.backgroundColor = color;
}
animatedForm();
