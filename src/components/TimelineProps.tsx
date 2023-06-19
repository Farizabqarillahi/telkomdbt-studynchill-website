'use client'
import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TimelineProps {
  tasks: Task[];
}

const Timeline: React.FC<TimelineProps> = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleCheckboxChange = (id: number) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleInputChange = (id: number, value: string) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, title: value } : task
      )
    );
  };

  const handleAddTask = () => {
    setTaskList([
      ...taskList,
      { id: taskList.length + 1, title: newTaskTitle, completed: false },
    ]);
    setNewTaskTitle('');
  };

  const handleDeleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <>
      <ul className="flex flex-col items-center">
        {taskList.map((task) => (
          <li key={task.id} className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
              className="mr-2 opacity-50"
            />
            <input
              type="text"
              value={task.title}
              onChange={(e) => handleInputChange(task.id, e.target.value)}
              className="mb-2 bg-transparent opacity-60"
            />
            <button onClick={() => handleDeleteTask(task.id)}>del</button>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add new task"
          className="my-2 bg-transparent"
        />
        <button className="opacity-50" onClick={handleAddTask}>
          add
        </button>
      </div>
    </>
  );  
};

export default Timeline;
