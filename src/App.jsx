import React, { useState } from 'react';
import { useTasks } from './context/TaskContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import TaskStats from './components/TaskStats';

export default function App() {
  const { tasks } = useTasks();

  // Estados locales para los filtros (No necesitan estar en el Contexto)
  const [filterStatus, setFilterStatus] = useState('all'); // all, active, completed
  const [filterPriority, setFilterPriority] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // --- LÓGICA DE FILTRADO (Estado Derivado) ---
  const filteredTasks = tasks.filter(task => {
    // 1. Filtrar por texto
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 2. Filtrar por estado (Pendiente/Completada)
    const matchesStatus = 
      filterStatus === 'all' ? true : 
      filterStatus === 'completed' ? task.completed : !task.completed;
    
    // 3. Filtrar por prioridad
    const matchesPriority = 
      filterPriority === 'all' ? true : task.priority === filterPriority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      {/* Contenedor Principal - max-w-4xl centrado */}
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Gestor de Tareas Pro
          </h1>
          <p className="mt-2 text-gray-600">
            Organiza tu día con prioridades y categorías
          </p>
        </header>

        {/* Estadísticas - Responsive grid */}
        <TaskStats tasks={tasks} />

        {/* Input de Nueva Tarea */}
        <div className="mb-6">
          <TaskInput />
        </div>
        
        {/* Filtros */}
        <div className="mb-6">
          <TaskFilters 
            filterStatus={filterStatus} setFilterStatus={setFilterStatus}
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}
            filterPriority={filterPriority} setFilterPriority={setFilterPriority}
          />
        </div>

        {/* Lista de Tareas */}
        <TaskList tasks={filteredTasks} />
      </div>
    </div>
  );
}