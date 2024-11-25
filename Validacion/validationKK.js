document.getElementById('registrationForm').addEventListener('input', (e)  => {
  if (e.target.tagName == 'INPUT') {
    console.log(e.target, e.target.checkValidity());
    if (e.target.checkValidity()) {
      e.target.setCustomValidity('');
      e.target.nextElementSibling.textContent = '';
    } else {
      //e.target.setCustomValidity('');
      e.target.nextElementSibling.textContent = e.target.validationMessage;
    }
  }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;

  // Validación del nombre de usuario
  const username = document.getElementById('username');
  const usernameError = document.getElementById('usernameError');
  if (username.value.length < 5) {
      username.setCustomValidity('El nombre de usuario debe tener al menos 5 caracteres.');
      usernameError.textContent = username.validationMessage;
      isValid = false;
  } else {
      username.setCustomValidity('');
      usernameError.textContent = '';
  }

  // Validación del correo electrónico
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value)) {
      email.setCustomValidity('Por favor, introduce un correo electrónico válido.');
      emailError.textContent = email.validationMessage;
      isValid = false;
  } else {
      email.setCustomValidity('');
      emailError.textContent = '';
  }

  // Validación de la edad
  const age = document.getElementById('age');
  const ageError = document.getElementById('ageError');
  if (age.value < 18 || age.value > 100) {
      age.setCustomValidity('La edad debe estar entre 18 y 100 años.');
      ageError.textContent = age.validationMessage;
      isValid = false;
  } else {
      age.setCustomValidity('');
      ageError.textContent = '';
  }

  // Validación de la fecha de nacimiento
  const dob = document.getElementById('dob');
  const dobError = document.getElementById('dobError');
  const today = new Date();
  const birthDate = new Date(dob.value);
  if (birthDate >= today) {
      dob.setCustomValidity('La fecha de nacimiento no puede ser en el futuro.');
      dobError.textContent = dob.validationMessage;
      isValid = false;
  } else {
      dob.setCustomValidity('');
      dobError.textContent = '';
  }

  if (isValid) {
      alert('Formulario enviado con éxito.');
      // Aquí puedes enviar el formulario al servidor
      // this.submit();
  }
});
