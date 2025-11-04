import React, { useEffect, useState } from 'react';
import api from '../api';
import TaskForm from './taskform';
import TaskList from './TaskList';
import Analytics from './analytics';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  const fetchData = async () => {
    const res = await api.get('tasks/');
    setTasks(res.data);
    const ana = await api.get('analytics/');
    setAnalytics(ana.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TaskForm onAdd={fetchData} />
      <Analytics analytics={analytics} />
      <TaskList tasks={tasks} onChange={fetchData} />
    </div>
  );
}
