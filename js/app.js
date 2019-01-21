const addCircle = document.querySelector('.add-circle');
const closeBtn = document.querySelector('.close-btn');
const inputForm = document.querySelector('.input-form');

addCircle.addEventListener('click', function() {
  inputForm.classList.toggle('active');
});
closeBtn.addEventListener('click', function() {
  inputForm.classList.remove('active');
});
