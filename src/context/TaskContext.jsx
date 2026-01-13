import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // Estado inicial: Intenta cargar de LocalStorage o empieza vacío
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  

  // Persistencia: Cada vez que 'tasks' cambie, guardamos
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // --- FUNCIONES CORE ---
  const addTask = (text, category, priority, dueDate) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      category,
      priority,
      dueDate: dueDate || null,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const updateTask = (id, updatedFields) => {
  setTasks(tasks.map(task => 
   
    task.id === id ? { ...task, ...updatedFields } : task
  ));
};

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);