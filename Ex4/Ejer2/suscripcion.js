//guardar el formulario entero en una variable
const form = document.getElementById('suscripcionForm');

//Comprobar que se envian los temas necesarios
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  if(form.elements['tipo'].checked){
    let cantidadTemas = [...form.elements['tema[]']].filter(tema => tema.checked);
    if(form.elements['tipo'].checked.value == 'basico' && cantidadTemas.length != 1){
      isValid = false;
    } else if(form.elements['tipo'].checked.value == 'estandar' && cantidadTemas.length != 3){
      isValid = false;
    } else if(form.elements['tipo'].checked.value == 'premium' && cantidadTemas.length != 6){
      isValid = false;
    } else if(form.elements['tipo'].checked.value == 'elite' && cantidadTemas.length != 6){
      isValid = false;
    }
  }

  if(isValid){
    form.submit();
  }
})

//verificar que el nombre tiene minimo 3 caracteres
document.getElementById('nombre').addEventListener('input', (e) => {
  let name = form.elements['nombre'].value;
  console.log(name);
  if (name.length < 3) {
    form.elements['nombre'].setCustomValidity('El nombre debe tener 3 o más caracteres');
    document.getElementById('nameError').textContent = 'El nombre debe tener 3 o más caracteres';
  } else {
    form.elements['nombre'].setCustomValidity('');
    document.getElementById('nameError').textContent = '';
  }
})

//verificar DNI tiene 8 caracteres
document.getElementById('dni').addEventListener('input', (e) => {
  let dni = form.elements['dni'].value;
  console.log(dni);
  if (dni.length != 10) {
    form.elements['dni'].setCustomValidity('El dni debe contener 10 caracteres');
    document.getElementById('dniError').textContent = 'El dni debe contener 10 caracteres';
  } else {
    form.elements['dni'].setCustomValidity('');
    document.getElementById('dniError').textContent = '';
  }
})

//precios
document.getElementById('basico').addEventListener('change', () => {
  document.getElementById('priceBasic').hidden = false;
});
document.getElementById('estandar').addEventListener('change', () => {
  document.getElementById('priceEstandar').hidden = false;
});
document.getElementById('premium').addEventListener('change', () => {
  document.getElementById('pricePremium').hidden = false;
});
document.getElementById('elite').addEventListener('change', () => {
  document.getElementById('priceElite').hidden = false;
});

//Insertar todos los temas
const themes = document.getElementById('temasContainer');

TEMAS.forEach(theme => {
  const input = document.createElement('input');
  input.type = "checkbox";
  input.name = "tema[]";
  input.id = ''+theme;
  input.value = theme;
  const label = document.createElement('label');
  label.htmlFor = input.id;
  label.textContent = theme;

  themes.append(input, label);
});