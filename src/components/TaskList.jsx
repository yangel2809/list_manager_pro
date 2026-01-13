import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <div className="space-y-3">
      {tasks.length > 0 ? (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      ) : (
        <div className="card text-center py-12">
          <div className="text-gray-400 text-5xl mb-4">📭</div>
          <p className="text-gray-600 text-lg">No hay tareas que coincidan con los filtros</p>
          <p className="text-gray-500 text-sm mt-2">Prueba ajustando los filtros o crea una nueva tarea</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
