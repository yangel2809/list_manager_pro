import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask, updateTask } = useTasks();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    text: task.text,
    category: task.category,
    priority: task.priority,
    dueDate: task.dueDate || ''
  });
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    deleteTask(task.id);
    setShowConfirm(false);
  };

  const handleSave = () => {
    if (editValues.text.trim() === "") {
      alert("El texto de la tarea no puede estar vacío");
      return;
    }
    updateTask(task.id, editValues);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValues({
      text: task.text,
      category: task.category,
      priority: task.priority,
      dueDate: task.dueDate || ''
    });
    setIsEditing(false);
  };

  const isOverdue = () => {
    if (!task.dueDate || task.completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(task.dueDate);
    due.setHours(0, 0, 0, 0);
    return due < today;
  };

  // Colores según prioridad
  const getPriorityColor = () => {
    switch(task.priority) {
      case 'Alta': return 'border-red-200 bg-red-50';
      case 'Media': return 'border-amber-200 bg-amber-50';
      case 'Baja': return 'border-green-200 bg-green-50';
      default: return 'border-gray-200';
    }
  };

  const getPriorityBadge = () => {
    switch(task.priority) {
      case 'Alta': return 'bg-red-100 text-red-700';
      case 'Media': return 'bg-amber-100 text-amber-700';
      case 'Baja': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`
      card transition-all duration-200
      ${task.completed ? 'opacity-60' : ''}
      ${!isEditing ? getPriorityColor() : ''}
      ${isOverdue() ? 'border-red-300' : ''}
    `}>
      {isEditing ? (
        /* MODO EDICIÓN */
        <div className="space-y-4">
          {/* Input de texto */}
          <div>
            <input 
              type="text" 
              value={editValues.text} 
              onChange={(e) => setEditValues({...editValues, text: e.target.value})}
              className="input-field text-base"
              autoFocus
            />
          </div>

          {/* Grid para selectores */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Fecha</label>
              <input 
                type="date"
                value={editValues.dueDate}
                onChange={(e) => setEditValues({...editValues, dueDate: e.target.value})}
                className="input-field text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Categoría</label>
              <select 
                value={editValues.category} 
                onChange={(e) => setEditValues({...editValues, category: e.target.value})}
                className="select-field w-full text-sm"
              >
                <option value="Personal">👤 Personal</option>
                <option value="Trabajo">💼 Trabajo</option>
                <option value="Gym">🏋️ Gym</option>
                <option value="Medicina">🏥 Medicina</option>
                <option value="hogar">🏠 Hogar</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Prioridad</label>
              <select 
                value={editValues.priority} 
                onChange={(e) => setEditValues({...editValues, priority: e.target.value})}
                className="select-field w-full text-sm"
              >
                <option value="Baja">🟢 Baja</option>
                <option value="Media">🟡 Media</option>
                <option value="Alta">🔴 Alta</option>
              </select>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-2 pt-2">
            <button onClick={handleSave} className="btn-primary">
              ✅ Guardar
            </button>
            <button onClick={handleCancel} className="btn-secondary">
              ❌ Cancelar
            </button>
          </div>
        </div>
      ) : (
        /* MODO VISTA */
        <div className="flex items-start gap-4">
          {/* Checkbox */}
          <div className="flex-shrink-0 pt-1">
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 
                       focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       cursor-pointer transition-all"
            />
          </div>

          {/* Contenido de la tarea */}
          <div className="flex-1 min-w-0">
            {/* Texto principal */}
            <div className={`
              text-base font-medium mb-2
              ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}
              ${isOverdue() ? 'text-red-600' : ''}
            `}>
              {task.text}
            </div>

            {/* Metadatos */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {/* Badge de Prioridad */}
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${getPriorityBadge()}`}>
                {task.priority}
              </span>

              {/* Badge de Categoría */}
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                {task.category}
              </span>

              {/* Fecha de vencimiento */}
              {task.dueDate && (
                <span className={`
                  px-2 py-1 rounded-md text-xs
                  ${isOverdue() 
                    ? 'bg-red-100 text-red-700 font-medium' 
                    : 'bg-blue-50 text-blue-700'}
                `}>
                  📅 {new Date(task.dueDate).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'short' 
                  })}
                </span>
              )}

              {/* Indicador de vencida */}
              {isOverdue() && (
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-md text-xs font-bold">
                  ⚠️ VENCIDA
                </span>
              )}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex-shrink-0 flex gap-2">
            {showConfirm ? (
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                <span className="text-xs text-red-600 font-medium whitespace-nowrap">¿Eliminar?</span>
                <button 
                  onClick={handleDelete}
                  className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700 transition-colors"
                >
                  Sí
                </button>
                <button 
                  onClick={() => setShowConfirm(false)}
                  className="px-2 py-1 bg-white text-gray-600 rounded text-xs hover:bg-gray-50 transition-colors border"
                >
                  No
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  title="Editar tarea"
                >
                  📝
                </button>
                <button 
                  onClick={() => setShowConfirm(true)}
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                  title="Eliminar tarea"
                >
                  🗑️
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
