import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Analytics({ analytics }) {
  if (!analytics) return <p>Loading analytics...</p>;

  const statusLabels = analytics.status.map(s => s.status);
  const statusData = analytics.status.map(s => s.count);
  const catLabels = analytics.categories.map(c => c.category);
  const catData = analytics.categories.map(c => c.count);

  return (
    <div className="mt-4">
      <h3>Analytics</h3>
      <div className="row">
        <div className="col-md-6"><Pie data={{ labels: statusLabels, datasets:[{ data: statusData }] }} /></div>
        <div className="col-md-6"><Bar data={{ labels: catLabels, datasets:[{ label:'Tasks per Category', data: catData }] }} /></div>
      </div>
    </div>
  );
}
