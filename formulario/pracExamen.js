const formId = document.getElementById('formId');

const pFruits = document.createElement('p');
fruits.forEach(fruit => {
    const input = document.createElement('input');
    input.type = "radio";
    input.id = 'fruit_' + fruit.id;
    input.name = "fruit";
    input.value = fruit.id;
    input.required = true;
    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = fruit.name;
    pFruits.append(input, label);
});

formId.append(pFruits);

const pFruitsEat = document.createElement('p');
fruits.forEach(fruit => {
    const input = document.createElement('input');
    input.type = "checkbox";
    input.id = 'fruitEat_' + fruit.id;
    input.name = "fruitEat[]";
    input.value = fruit.id;
    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = fruit.name;
    pFruitsEat.append(input, label);
});

formId.append(pFruitsEat);

formId.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputName = formId.elements['surname'];
    console.log('surname: ', inputName.value);
    const option = formId.elements['option'];
    console.log('option: ', option.value);
    
    console.log('fruit: ', formId.elements['fruit'].value);
    console.log('fruitEat: ', [...formId.elements['fruitEat[]']].filter(fruit => fruit.checked).map(fruit => fruit.value));
    console.log('conditions: ', formId.elements['conditions'].checked);

    if([...formId.elements['fruitEat[]']].filter(fruit => fruit.checked).map(fruit => fruit.value).length > 0){
        formId.submit();
        console.log('enviando...');    
    }
    
})