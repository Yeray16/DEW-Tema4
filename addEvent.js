const p = document.querySelector('p');
const button = document.querySelector('button');
const check = document.getElementById('check');

function addText(){
  p.textContent += "Esto es contenido";
}

// button.addEventListener('click', addText);
check.addEventListener('change', function(){
  console.log('cambiando...', check.checked);
  if (check.checked) {
    button.addEventListener('click', addText);
  } else {
    button.removeEventListener('click', addText);
  }
});