import React, { useState } from 'react';
import api from '../api';

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState({
    title: '', description: '', category: 'General', priority: 'Medium', deadline: '', status: 'Pending'
  });

  const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('tasks/', task);
    setTask({ title: '', description: '', category: 'General', priority: 'Medium', deadline: '', status: 'Pending' });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row mb-2">
        <div className="col"><input name="title" value={task.title} onChange={handleChange} placeholder="Title" className="form-control" required /></div>
        <div className="col"><input name="category" value={task.category} onChange={handleChange} placeholder="Category" className="form-control" /></div>
      </div>
      <textarea name="description" value={task.description} onChange={handleChange} className="form-control mb-2" placeholder="Description"></textarea>
      <div className="row mb-2">
        <div className="col"><select name="priority" value={task.priority} onChange={handleChange} className="form-select"><option>Low</option><option>Medium</option><option>High</option></select></div>
        <div className="col"><input name="deadline" type="date" value={task.deadline} onChange={handleChange} className="form-control" /></div>
      </div>
      <button className="btn btn-primary">Add Task</button>
    </form>
  );
}
