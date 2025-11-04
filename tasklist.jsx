import React from 'react';
import api from '../api';

export default function TaskList({ tasks, onChange }) {
  const toggleStatus = async (task) => {
    const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
    await api.patch(`tasks/${task.id}/`, { status: newStatus });
    onChange();
  };

  const removeTask = async (id) => {
    await api.delete(`tasks/${id}/`);
    onChange();
  };

  return (
    <div className="mt-4">
      <h3>Task List</h3>
      <table className="table table-striped">
        <thead><tr><th>Title</th><th>Category</th><th>Priority</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          {tasks.map(t => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.category}</td>
              <td>{t.priority}</td>
              <td>
                <button onClick={() => toggleStatus(t)} className={`btn btn-sm ${t.status==='Completed'?'btn-success':'btn-warning'}`}>{t.status}</button>
              </td>
              <td>
                <button onClick={() => removeTask(t.id)} className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
