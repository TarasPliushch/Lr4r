document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const pendingTasksList = document.getElementById('pendingTasksList');
    const completedTasksList = document.getElementById('completedTasksList');
    const completeSelectedBtn = document.getElementById('completeSelectedBtn');

    // Завантаження завдань з локального сховища
    loadTasks();

    // Додавання нового завдання
    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Виконання вибраних завдань
    completeSelectedBtn.addEventListener('click', completeSelectedTasks);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        saveTask(task);
        renderTask(task);
        newTaskInput.value = '';
    }

    function saveTask(task) {
        let tasks = getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    function loadTasks() {
        const tasks = getTasks();
        tasks.forEach(task => renderTask(task));
    }

    function renderTask(task) {
        const li = document.createElement('li');
        li.dataset.id = task.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', toggleTaskStatus);

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        if (task.completed) {
            taskText.classList.add('completed-task');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        if (task.completed) {
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    }

    function toggleTaskStatus(e) {
        const taskId = parseInt(e.target.parentElement.dataset.id);
        let tasks = getTasks();
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = e.target.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            
            // Переміщення завдання між списками
            if (e.target.checked) {
                completedTasksList.appendChild(e.target.parentElement);
                e.target.nextElementSibling.classList.add('completed-task');
            } else {
                pendingTasksList.appendChild(e.target.parentElement);
                e.target.nextElementSibling.classList.remove('completed-task');
            }
        }
    }

    function completeSelectedTasks() {
        const checkboxes = pendingTasksList.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change'));
        });
    }

    function deleteTask(e) {
        const taskId = parseInt(e.target.parentElement.dataset.id);
        let tasks = getTasks();
        tasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        e.target.parentElement.remove();
    }
});
