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
    <header>
      <h1>Tasks</h1>
      <button @click="goToTodoList" class="back-button">
        <span>←</span> Return
      </button>
    </header>
    
    <div class="summary">
      <div class="stat">
        <span class="value">{{ totalTasks }}</span>
        <span class="label">Total</span>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <span class="value">{{ incompleteTasks }}</span>
        <span class="label">Remaining</span>
      </div>
    </div>
    
    <div class="task-list">
      <div v-for="(todo, index) in todos" 
           :key="index" 
           class="task-item"
           :class="{ 'task-completed': todo.completed }">
        <span class="task-marker">{{ todo.completed ? '✓' : '○' }}</span>
        <span class="task-text">{{ todo.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.print-view {
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

.back-button {
  background: none;
  border: 1px solid #000;
  color: #000;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.back-button:hover {
  background: #000;
  color: #fff;
}

.summary {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 6px;
}

.stat {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
}

.value {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #666;
}

.divider {
  width: 1px;
  height: 3rem;
  background: #e0e0e0;
  margin: 0 2rem;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.task-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.task-item:hover {
  background: #fafafa;
}

.task-marker {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1rem;
}

.task-text {
  font-size: 1rem;
  line-height: 1.5;
}

.task-completed {
  background: #f9f9f9;
}

.task-completed .task-text {
  text-decoration: line-through;
  color: #888;
}

@media print {
  .back-button {
    display: none;
  }
  
  .print-view {
    padding: 0;
  }
  
  .task-item {
    page-break-inside: avoid;
    border-color: #ddd;
  }
  
  .summary {
    border: 1px solid #eaeaea;
  }
}
</style> 