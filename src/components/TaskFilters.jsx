import React from 'react';

const TaskFilters = ({ 
  filterStatus, 
  setFilterStatus, 
  searchTerm, 
  setSearchTerm, 
  filterPriority, 
  setFilterPriority 
}) => {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h2>
      
      <div className="space-y-4">
        {/* Búsqueda por texto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buscar
          </label>
          <input 
            type="text" 
            placeholder="Buscar tarea..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field text-sm"
          />
        </div>

        {/* Grid para los filtros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Filtro por Estado */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estado
            </label>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="select-field w-full text-sm"
            >
              <option value="all">📋 Todas</option>
              <option value="active">⏳ Pendientes</option>
              <option value="completed">✅ Completadas</option>
            </select>
          </div>

          {/* Filtro por Prioridad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prioridad
            </label>
            <select 
              value={filterPriority} 
              onChange={(e) => setFilterPriority(e.target.value)}
              className="select-field w-full text-sm"
            >
              <option value="all">⭐ Todas</option>
              <option value="Alta">🔴 Alta</option>
              <option value="Media">🟡 Media</option>
              <option value="Baja">🟢 Baja</option>
            </select>
          </div>
        </div>

        {/* Indicador de filtros activos */}
        {(searchTerm || filterStatus !== 'all' || filterPriority !== 'all') && (
          <div className="pt-2 flex items-center gap-2 text-sm text-gray-600">
            <span>Filtros activos:</span>
            {searchTerm && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                Búsqueda: "{searchTerm}"
              </span>
            )}
            {filterStatus !== 'all' && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                {filterStatus === 'active' ? 'Pendientes' : 'Completadas'}
              </span>
            )}
            {filterPriority !== 'all' && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">
                Prioridad: {filterPriority}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskFilters;
