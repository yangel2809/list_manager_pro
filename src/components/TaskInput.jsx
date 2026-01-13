import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskInput = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Personal');
  const [priority, setPriority] = useState('Media');
  const [dueDate, setDueDate] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Por favor, escribe una tarea");
      return;
    }
    
    addTask(text, category, priority, dueDate);
    
    // Resetear el formulario
    setText('');
    setDueDate('');
    setCategory('Personal');
    setPriority('Media');
  };

  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Nueva Tarea</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Principal */}
        <div>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="¿Qué hay que hacer?"
            className="input-field text-base"
            autoFocus
          />
        </div>

        {/* Grid Responsive para los selectores */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Fecha de Vencimiento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vencimiento
            </label>
            <input 
              type="date" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
              className="input-field text-sm"
            />
          </div>

          {/* Selector de Categoría */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoría
            </label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="select-field w-full text-sm"
            >
              <option value="Personal">👤 Personal</option>
              <option value="Trabajo">💼 Trabajo</option>
              <option value="Gym">🏋️ Gym</option>
              <option value="Medicina">🏥 Medicina</option>
              <option value="hogar">🏠 Hogar</option>
            </select>
          </div>

          {/* Selector de Prioridad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prioridad
            </label>
            <select 
              value={priority} 
              onChange={(e) => setPriority(e.target.value)}
              className="select-field w-full text-sm"
            >
              <option value="Baja">🟢 Baja</option>
              <option value="Media">🟡 Media</option>
              <option value="Alta">🔴 Alta</option>
            </select>
          </div>
        </div>

        {/* Botón de Agregar */}
        <div className="pt-2">
          <button 
            type="submit" 
            className="btn-primary w-full sm:w-auto"
          >
            ➕ Agregar Tarea
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
