import React, { useEffect, useState } from 'react';
import './Support.css';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Support = () => {
  const [revenue, setRevenue] = useState(7852000); // Dummy revenue

  const barData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'Last 6 days',
        backgroundColor: '#4a6cf7',
        data: [4, 5, 6, 7, 8, 9, 7, 8, 6, 7, 9, 10]
      },
      {
        label: 'Last Week',
        backgroundColor: '#d4d4d4',
        data: [3, 4, 5, 5, 6, 6, 5, 6, 4, 5, 6, 7]
      }
    ]
  };

  const doughnutData = {
    labels: ['Afternoon', 'Evening', 'Morning'],
    datasets: [
      {
        data: [40, 32, 28],
        backgroundColor: ['#6a5acd', '#4a6cf7', '#d4d4d4']
      }
    ]
  };

  const lineData = {
    labels: ['01', '02', '03', '04', '05', '06'],
    datasets: [
      {
        label: 'Last 6 days',
        data: [300, 400, 350, 450, 500, 600],
        borderColor: '#4a6cf7',
        tension: 0.3
      },
      {
        label: 'Last Week',
        data: [200, 300, 250, 350, 400, 420],
        borderColor: '#d4d4d4',
        tension: 0.3
      }
    ]
  };

  return (
    <div className="dashboard">
      <div className="top-section">
        <div className="card revenue-card">
          <h3>Revenue</h3>
          <h2>IDR {revenue.toLocaleString('id-ID')}</h2>
          <p className="green">▲ 2.1% vs last week</p>
          <p className="subtitle">Sales from 1–12 Dec, 2020</p>
          <Bar data={barData} />
        </div>

        <div className="card donut-card">
          <h3>Order Time</h3>
          <p className="subtitle">From 1–6 Dec, 2020</p>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      <div className="bottom-section">
        <div className="card rating-card">
          <h3>Your Rating</h3>
          <div className="bubbles">
            <div className="bubble orange">85%<br />Food Taste</div>
            <div className="bubble purple">85%<br />Hygiene</div>
            <div className="bubble blue">92%<br />Packaging</div>
          </div>
        </div>

        <div className="card orders-list">
          <h3>Most Ordered Food</h3>
          <ul>
            <li><span>Fresh Salad Bowl</span> <strong>IDR 45.000</strong></li>
            <li><span>Chicken Noodles</span> <strong>IDR 75.000</strong></li>
            <li><span>Smoothie Fruits</span> <strong>IDR 45.000</strong></li>
            <li><span>Hot Chicken Wings</span> <strong>IDR 45.000</strong></li>
          </ul>
        </div>

        <div className="card line-chart">
          <h3>Order</h3>
          <h2>2.568</h2>
          <p className="red">▼ 2.1% vs last week</p>
          <p className="subtitle">Sales from 1–6 Dec, 2020</p>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Support;
