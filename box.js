const container = document.getElementById('container');
const btCreate = document.getElementById('btCreate');

btCreate.addEventListener('click', createBox);

function createBox(event) {
  let box = document.createElement('div');
  box.classList.add('box');
  container.append(box);
  if(event.ctrlKey){
    box.classList.add('azul');
  }
  if(event.altKey){
    box.classList.add('amarillo')
  }
}