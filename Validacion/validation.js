const form = document.forms['registrationForm'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  // Comprobaciones avanzadas. 
  if ([...form.elements['topic[]']].filter(t => t.checked).length < 2 ) {
    isValid = false;
   document.getElementById('topicError').textContent = 'Tienes que elegir al menos 2';
  }

  if (isValid) {
    console.log("enviando el formulario...");
    //form.submit();
  }

});

form.addEventListener('input', (e) => {
  if (e.target.tagName === 'INPUT' ) {
    if (e.target.checkValidity()) {
      e.target.nextElementSibling.textContent = 'valido';
    } else {
      e.target.nextElementSibling.textContent = e.target.validationMessage;
    }
  }
});

document.getElementById('email').addEventListener('input', (e) => {
  let mail = form.elements['email'].value;
  let domain = mail.split('@')[1] ?? '';
  console.log(domain, domain.length);
  if (domain.length <= 3) {
    isValid = false;
    form.elements['email'].setCustomValidity('el dominio debe tener 3 o más caracteres');
    document.getElementById('emailError').textContent = 'el dominio debe tener 3 o más caracteres';
  } else {
    form.elements['email'].setCustomValidity('');
  }
})