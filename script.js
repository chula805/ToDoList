document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                tasksList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);
            taskItem.addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });

            tasksList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    });

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
