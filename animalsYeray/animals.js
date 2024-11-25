//Seleccionamos la división de animales
const animals = document.getElementById('animals');

//Selecionamos la división de categorias
const categories = document.getElementById('categories');

//Mostramos todos los animales
data.forEach(animal => {
    const span = document.createElement('span');
    span.innerHTML = '&#' + animal.code + ';';
    span.id = animal.code;
    span.title = animal.name;
    span.draggable = true;
    // usamos dataset para almacenar los datos y mandarlos
    span.dataset.category = animal.category;
    animals.append(span);
})

//Guardamos todas las categorías en un set
const allCategories = new Set(data.map(animal => animal.category));
//Mostramos las divisiones de las categorías
allCategories.forEach(category => {
    const div = document.createElement('div');
    div.classList.add('category');
    div.innerHTML = `<h2>${category}</h2>`;
    const panel = document.createElement('div');
    panel.classList.add('panel');
    // usamos dataset para almacenar los datos
    panel.dataset.category = category;
    //añadimos la función drop 
    panel.addEventListener('drop', drop);
    div.append(panel);
    categories.append(div);
});

//Añadimos a los animales el arrastrar y soltar
animals.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'SPAN') {
        e.dataTransfer.setData('text/plain', e.target.id);
        document.querySelectorAll('.panel').forEach(panel => {
            if (panel.dataset.category == e.target.dataset.category) {
                panel.addEventListener('dragover', dragOver);
            } else {
                panel.removeEventListener('dragover', dragOver);
            }
        });
    }
});

function dragOver(e) {
    //permite que el elemento pueda recibir la información
    e.preventDefault();
}

function drop(e) {
    //recupera el id del animal que se arrastro 
    const animal = document.getElementById(e.dataTransfer.getData('text/plain'));
    //inserta el elemento actual dentro de animal
    e.currentTarget.append(animal);
}