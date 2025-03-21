<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { todoStore } from '../store/todoStore'

const router = useRouter()
const newTodo = ref('')
const todos = todoStore.todos
const editingIndex = ref(-1)
const editText = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.push({
      text: newTodo.value,
      completed: false
    })
    newTodo.value = ''
  }
}

const deleteTodo = (index) => {
  todos.splice(index, 1)
}

const startEditing = (index) => {
  editingIndex.value = index
  editText.value = todos[index].text
}

const saveEdit = () => {
  if (editText.value.trim()) {
    todos[editingIndex.value].text = editText.value
  }
  cancelEdit()
}

const cancelEdit = () => {
  editingIndex.value = -1
  editText.value = ''
}

const goToPrintView = () => {
  router.push('/print')
}
</script>

<template>
  <div class="todo-list">
    <header>
      <h1>Tasks</h1>
      <button @click="goToPrintView" class="print-button">
        Print View
      </button>
    </header>
    
    <div v-if="editingIndex === -1" class="add-todo">
      <input 
        v-model="newTodo" 
        placeholder="Add new task..."
        @keyup.enter="addTodo"
        class="task-input"
      />
      <button @click="addTodo" class="add-button">Add</button>
    </div>
    
    <div v-if="editingIndex !== -1" class="edit-form">
      <input 
        v-model="editText" 
        placeholder="Edit task..." 
        @keyup.enter="saveEdit"
        class="task-input"
      />
      <div class="edit-actions">
        <button @click="saveEdit" class="confirm-button">Save</button>
        <button @click="cancelEdit" class="cancel-button">Cancel</button>
      </div>
    </div>
    
    <div class="task-list">
      <div v-for="(todo, index) in todos" 
           :key="index" 
           class="task-item"
           :class="{ 'task-completed': todo.completed }">
        <div class="task-content">
          <label class="checkbox-container">
            <input 
              type="checkbox" 
              v-model="todo.completed"
            />
            <span class="checkmark"></span>
          </label>
          <span class="task-text">{{ todo.text }}</span>
        </div>
        <div class="task-actions">
          <button @click="startEditing(index)" class="icon-button edit-button">Edit</button>
          <button @click="deleteTodo(index)" class="icon-button delete-button">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #000;
  background: #fff;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1.5rem;
}

h1 {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  margin: 0;
}

.print-button {
  background: none;
  border: 1px solid #000;
  color: #000;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.print-button:hover {
  background: #000;
  color: #fff;
}

.add-todo {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.edit-actions {
  display: flex;
  gap: 1rem;
}

.task-input {
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  background: #fff;
  transition: border-color 0.2s;
}

.task-input:focus {
  outline: none;
  border-color: #000;
}

button {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.add-button {
  background: #000;
  color: #fff;
}

.add-button:hover {
  background: #333;
}

.confirm-button {
  background: #000;
  color: #fff;
}

.confirm-button:hover {
  background: #333;
}

.cancel-button {
  background: none;
  border: 1px solid #000;
  color: #000;
}

.cancel-button:hover {
  background: #f5f5f5;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.task-item:hover {
  background: #fafafa;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.checkbox-container {
  display: block;
  position: relative;
  padding-left: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #000;
  border-radius: 2px;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #000;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.task-text {
  font-size: 1rem;
  line-height: 1.5;
}

.task-actions {
  display: flex;
  gap: 0.5rem;
}

.icon-button {
  background: none;
  border: none;
  font-size: 0.75rem;
  padding: 0.4rem 0.6rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.icon-button:hover {
  color: #000;
}

.edit-button:hover {
  color: #000;
}

.delete-button:hover {
  color: #000;
}

.task-completed {
  background: #f9f9f9;
}

.task-completed .task-text {
  text-decoration: line-through;
  color: #888;
}
</style> 