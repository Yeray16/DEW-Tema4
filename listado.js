const fruits = document.querySelectorAll('li');
const cart = document.getElementById('cart');
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
  fruits.forEach(fruit => {
    // fruit.removeEventListener('dblclick', removeLi);
    fruit.addEventListener('dblclick', addCart);
  })
});

fruits.forEach(fruit => {
  fruit.addEventListener('click', select);
  fruit.addEventListener('dblclick', removeLi);
});

function select() {
  console.log('seleccionando...', this);
  this.classList.toggle('selected');
}

function removeLi() {
  this.remove();
}

function addCart() {
  cart.append(this);
}