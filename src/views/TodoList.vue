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
    <h1>Ma Liste de Tâches</h1>
    
    <div class="actions">
      <button @click="goToPrintView" class="print-button">Vue d'impression</button>
    </div>
    
    <div v-if="editingIndex === -1" class="add-todo">
      <input 
        v-model="newTodo" 
        placeholder="Nouvelle tâche..."
        @keyup.enter="addTodo"
      />
      <button @click="addTodo">Ajouter</button>
    </div>
    
    <div v-if="editingIndex !== -1" class="edit-todo">
      <input 
        v-model="editText" 
        placeholder="Modifier la tâche..." 
        @keyup.enter="saveEdit"
      />
      <div class="edit-buttons">
        <button @click="saveEdit">Confirmer</button>
        <button @click="cancelEdit">Annuler</button>
      </div>
    </div>
    
    <ul class="todos">
      <li v-for="(todo, index) in todos" :key="index" :class="{ completed: todo.completed }">
        <div class="todo-content">
          <input 
            type="checkbox" 
            v-model="todo.completed"
          />
          <span class="todo-text">{{ todo.text }}</span>
        </div>
        <div class="todo-actions">
          <button @click="startEditing(index)" class="edit">Modifier</button>
          <button @click="deleteTodo(index)" class="delete">Supprimer</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-list {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
}

.print-button {
  background-color: #4caf50;
  color: white;
  font-size: 1.2rem;
  padding: 12px 24px;
}

.add-todo, .edit-todo {
  display: flex;
  margin-bottom: 30px;
}

.edit-todo {
  flex-direction: column;
  gap: 15px;
}

.edit-buttons {
  display: flex;
  gap: 15px;
}

input[type="text"], input {
  flex: 1;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1.2rem;
}

button {
  padding: 15px 25px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

button:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.todos {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s ease;
}

li:hover {
  background-color: #f9f9f9;
}

li:last-child {
  border-bottom: none;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.todo-content input[type="checkbox"] {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.todo-actions {
  display: flex;
  gap: 15px;
}

.todo-text {
  font-size: 1.3rem;
  color: #333;
}

.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.edit {
  background: #f39c12;
}

.edit:hover {
  background: #e67e22;
}

.delete {
  background: #e74c3c;
}

.delete:hover {
  background: #c0392b;
}
</style> 