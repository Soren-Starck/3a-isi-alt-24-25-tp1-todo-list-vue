<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { todoStore } from '../store/todoStore'

const router = useRouter()
const todos = todoStore.todos

const totalTasks = computed(() => todos.length)
const incompleteTasks = computed(() => todos.filter(todo => !todo.completed).length)

const goToTodoList = () => {
  router.push('/')
}
</script>

<template>
  <div class="print-view">
    <h1>Liste de Tâches - Vue d'Impression</h1>
    
    <div class="actions">
      <button @click="goToTodoList" class="back-button">Retour à la liste</button>
    </div>
    
    <div class="summary">
      <p>Total des tâches: <strong>{{ totalTasks }}</strong></p>
      <p>Tâches à faire: <strong>{{ incompleteTasks }}</strong></p>
    </div>
    
    <ul class="todos">
      <li v-for="(todo, index) in todos" :key="index" :class="{ completed: todo.completed }">
        <span class="todo-text">{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.print-view {
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

.back-button {
  background-color: #3498db;
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.back-button:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.summary {
  margin-bottom: 30px;
  padding: 25px;
  background-color: #f8f9fa;
  border-radius: 8px;
  font-size: 1.3rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.summary p {
  margin: 10px 0;
}

.todos {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 20px;
  border-bottom: 1px solid #eee;
  font-size: 1.3rem;
  transition: background-color 0.2s ease;
}

li:hover {
  background-color: #f9f9f9;
}

li:last-child {
  border-bottom: none;
}

.todo-text {
  font-size: 1.3rem;
}

.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

@media print {
  .actions {
    display: none;
  }
  
  body {
    background-color: white;
    font-size: 14pt;
  }
  
  .print-view {
    box-shadow: none;
    padding: 0;
  }
  
  .summary {
    border: 1px solid #ddd;
  }
  
  h1 {
    font-size: 24pt;
  }
  
  li {
    padding: 10pt 0;
    page-break-inside: avoid;
  }
}
</style> 