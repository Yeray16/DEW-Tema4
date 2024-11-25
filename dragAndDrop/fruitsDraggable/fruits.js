const fruits = document.getElementById('fruits');
const divCategories = document.getElementById('categories');

data.forEach(fruit => {
    const span = document.createElement('span');
    span.innerHTML = '&#' + fruit.code;
    span.title = fruit.name;
    span.id = fruit.name;
    span.draggable = true;
    span.dataset.category = fruit.category;
    fruits.append(span);
})

const categories = new Set(data.map(fruit => fruit.category));
categories.forEach(category => {
    const div = document.createElement('div');
    div.classList.add('category');
    div.innerHTML = `<h2>${category}</h2>`;
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.dataset.category = category;
    panel.addEventListener('drop', drop);
    div.append(panel);
    divCategories.append(div);
})

fruits.addEventListener('dragstart', (e) => {
    if(e.target.tagName === 'SPAN'){
        e.dataTransfer.setData('text/plain', e.target.id);
        document.querySelectorAll('.panel').forEach(panel => {
            if(panel.dataset.category == e.target.dataset.category){
                panel.addEventListener('dragover', dragOver);
            } else {
                panel.removeEventListener('dragover', dragOver);
            }
        })
    }
});

function drop (e) {
    const fruit = document.getElementById(e.dataTransfer.getData('text/plain'));
    e.currentTarget.append(fruit);
}

function dragOver (e) {
    e.preventDefault();
}