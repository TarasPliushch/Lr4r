const { createApp, ref, computed, nextTick } = Vue;

createApp({
  setup() {
    const newTodo = ref('');
    const todos = ref([]);
    const editInput = ref(null);

    const addTodo = () => {
      if (newTodo.value.trim() === '') return;
      todos.value.push({ text: newTodo.value, editing: false });
      newTodo.value = '';
    };

    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const editTodo = (todo) => {
      todo.editing = true;
      nextTick(() => {
        if (editInput.value) {
          editInput.value.focus();
        }
      });
    };

    const saveEdit = (todo) => {
      todo.editing = false;
    };

    const completedTodos = computed(() => {
      return todos.value.filter(todo => todo.completed).length;
    });

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
      editTodo,
      saveEdit,
      completedTodos,
      editInput
    };
  }
}).mount('#app');
