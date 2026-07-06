const inp = document.querySelector('input');
const addbtn = document.querySelector('button');
const todoList = document.querySelector('.todo-list');

// ADD TODO
addbtn.addEventListener('click', function () {
  let value = inp.value;
  if (value.trim() === '') return;

  let h2 = document.createElement('h2');
  let task = document.createElement('div');
  let btns = document.createElement('div');
  let edit = document.createElement('button');
  let del = document.createElement('button');

  task.classList.add('task');
  edit.classList.add('edit');
  del.classList.add('del');
  btns.classList.add('btns');

  h2.textContent = value;
  edit.textContent = 'Edit';
  del.textContent = 'Delete';

  btns.append(edit, del);
  task.append(h2, btns);

  todoList.append(task);
  inp.value = '';
});

// EDIT & DELETE (Event Delegation)
todoList.addEventListener('click', function (e) {
  const targetBtn = e.target;
  const parentTask = targetBtn.closest('.task');

  if (!parentTask) return;

  if (targetBtn.closest('.del')) {
    parentTask.remove();
  } 
  else if (targetBtn.closest('.edit')) {
    let h2 = parentTask.querySelector('h2');
    let oldText = h2.textContent;
    let newText = prompt('Update Your Task', oldText);

    if (!newText || newText.trim() === '') return;

    h2.textContent = newText;
  }
});