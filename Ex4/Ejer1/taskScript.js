// Insertar automáticamente
// tasks.forEach(task => {
//   const states = document.querySelectorAll('.state');
//   states.forEach(state => {
//     if (state.id == task.state) {
//       const div = document.createElement('div');
//       div.classList.add("task", task.priority);
//       div.id = "task_" + task.id;
//       div.textContent = task.task;
//       div.draggable = true;
//       div.addEventListener('drop', drop);
//       state.append(div);
//     }
//   })

// });

// document.querySelectorAll('.state').addEventListener('dragstart', (e) => {
//   if(e.target.tagName === 'DIV') {
//     e.dataTransfer.setData('text/plain', e.target.id);
//     e.addEventListener('dragover', dragOver);
//   }
// })

// function dragOver(e) {
//   e.preventDefault();
// }

// function drop(e) {
//   const div = document.getElementById(e.dataTransfer.getData('text/plain'));
//   e.currentTarget.append(div);
// }


//corrección

const panels = {
  'to-do': document.getElementById('to-do'),
  'in-progress': document.getElementById('in-progress'),
  'done': document.getElementById('done'),
  'paperbin': document.getElementById('paperbin')
}

const container = document.querySelector('.container');

container.addEventListener('dragstart', (event) => {
  if(event.target.classList.contains('task')){
    event.dataTransfer.setData('text/plain', event.target.id);
  }  
})

let nextId = Math.max(task.map(task => task.id));

function addTask(task) {
  const divTask = document.createElement('div');
  divTask.classList.add('task', task.priority);
  divTask.textContent = task.task;
  divTask.id = 'task_' + task.id;
  divTask.draggable = true;
  // divTask.addEventListener('dragstart', (event) => {
  //   event.dataTransfer.setData('text/plain', divTask.id);

  // })
  // const panel = document.getElementById(task.state);
  // panel.append(divTask);
  panels[task.state].append(divTask);
}

tasks.forEach(task => addTask(task));

const form = document.forms[0];

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(form.elements.task.value);
  console.log(form.elements.priority.value);
  addTask({
    id: ++nextId,
    task: form.elements.task.value,
    priority: form.elements.priority.value,
    state: "to-do"
  })
});

//añadir que se vea la prioridad de un color al crear una nueva

form.elements.priority.addEventListener('change', (e) => {
  form.elements.priority.className = form.elements.priority.value;
})

//añadimos el dragover
Object.values(panels).forEach(panel => {
  panel.addEventListener('dragover', (event) => {
    event.preventDefault();
  })
  panel.addEventListener('drop', (event) => {
    const idTask = event.dataTransfer.getData('text/plain');
    const divTask = document.getElementById(idTask);
    event.currentTarget.append(divTask);
    //Con el if evitamos que si arrastramos uno a la papelera y lo sacamos de la papelera se borre
    if(event.currentTarget.id == 'paperbin'){
      let id = setTimeout(() => divTask.remove(), 10_000);
      divTask.dataset.timeout = id;
    } else {
      clearTimeout(divTask.dataset.timeout);
    }
  })
});

//papelera

document.querySelector('#paperbin button').addEventListener('click', (event) => {
  //conservanado la cabecera y añadiendola
  // const header = panels.paperbin.firstElementChild;
  // panels.paperbin.innerHTML = '';
  // panels.paperbin.append(header);

  //otra forma de hacerlo
  // for (let i = panels.paperbin.children.length -1; i > 0; i--){
  //   panels.paperbin.children[i].remove();
  // }

  //otra forma de hacerlo
  //const taskDivs = panels.paperbin.querySelectorAll('task');
  //const taskDivs = [...panels.paperbin.children].filter((task, i) => i!=0);
  const taskDivs = [...panels.paperbin.children];
  taskDivs.shift();
  taskDivs.forEach(task => task.remove());
})