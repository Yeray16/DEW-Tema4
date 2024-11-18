const fruits = ['apple', 'orange', 'kiwi', 'banana', 'pinacle'];
const origin = document.querySelector('.example-origin');

fruits.forEach(fruit => {
  const div = document.createElement('div');
  div.classList.add('example-draggable');
  div.id = 'draggable-'+fruit;
  div.textContent = fruit;
  div.draggable = true;
  div.addEventListener('dragstart', onDragStart);
  origin.append(div);
})

document.querySelectorAll('.example-draggable').forEach(div => {
  div.draggable = true
  div.addEventListener('dragstart', onDragStart);
});

function onDragStart(event) {
  console.log(event.target.id);
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.classList.add('selectDrag')
}

function onDragOver(event) {
  console.log(event.target);
  event.preventDefault();
}

document.querySelectorAll('.example-dropzone').forEach(div => {
  div.addEventListener('dragover', onDragOver);
  div.addEventListener('drop', onDrop);
})

function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  console.log(id);
  const divDrag = document.getElementById(id);
  divDrag.classList.remove('selectDrag');
  event.currentTarget.append(divDrag);
}