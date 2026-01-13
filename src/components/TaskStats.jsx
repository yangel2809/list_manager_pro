import React from 'react';

const TaskStats = ({ tasks }) => {
  // 1. Cálculos lógicos
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  
  // Cálculo de porcentaje con protección contra división por cero (NaN)
  const progressPercentage = totalTasks > 0 
    ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Filtrado por prioridades para métricas específicas
  const highPriorityPending = tasks.filter(t => t.priority === 'Alta' && !t.completed).length;

  return (
    <div className="mb-8">
      {/* Grid Responsive: Scroll horizontal en móvil, Grid 4 columnas en desktop */}
      <div className="
        overflow-x-auto
        md:overflow-x-visible
        -mx-4 px-4
        md:mx-0 md:px-0
      ">
        <div className="
          flex gap-4 pb-2
          md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-0
          min-w-max md:min-w-0
        ">
          
          {/* Card 1: Progreso */}
          <div className="stat-card flex-shrink-0 w-64 md:w-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Progreso</span>
              <span className="text-2xl font-bold text-blue-600">{progressPercentage}%</span>
            </div>
            
            {/* Barra de Progreso */}
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            <div className="mt-2 text-xs text-gray-500">
              {completedTasks} de {totalTasks} completadas
            </div>
          </div>

          {/* Card 2: Total */}
          <div className="stat-card flex-shrink-0 w-64 md:w-auto">
            <div className="text-sm font-medium text-gray-600 mb-2">Total</div>
            <div className="text-3xl font-bold text-gray-900">{totalTasks}</div>
            <div className="mt-1 text-xs text-gray-500">Tareas registradas</div>
          </div>

          {/* Card 3: Pendientes */}
          <div className="stat-card flex-shrink-0 w-64 md:w-auto">
            <div className="text-sm font-medium text-gray-600 mb-2">Pendientes</div>
            <div className="text-3xl font-bold text-amber-600">{pendingTasks}</div>
            <div className="mt-1 text-xs text-gray-500">Por completar</div>
          </div>

          {/* Card 4: Urgentes (solo si hay) */}
          {highPriorityPending > 0 && (
            <div className="stat-card flex-shrink-0 w-64 md:w-auto border-red-200 bg-red-50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-red-700">Urgentes</span>
                <span className="text-red-600">⚠️</span>
              </div>
              <div className="text-3xl font-bold text-red-600">{highPriorityPending}</div>
              <div className="mt-1 text-xs text-red-600">Requieren atención</div>
            </div>
          )}

          {/* Card 4 Alternativo: Completadas (si no hay urgentes) */}
          {highPriorityPending === 0 && (
            <div className="stat-card flex-shrink-0 w-64 md:w-auto">
              <div className="text-sm font-medium text-gray-600 mb-2">Completadas</div>
              <div className="text-3xl font-bold text-green-600">{completedTasks}</div>
              <div className="mt-1 text-xs text-gray-500">Finalizadas</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
