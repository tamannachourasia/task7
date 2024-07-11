import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Users from './Users';
import TaskLists from './TaskLists';
import Tasks from './Tasks';

const Dashboard = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="users">Users</Link></li>
          <li><Link to="task-lists">Task Lists</Link></li>
          <li><Link to="tasks">Tasks</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="task-lists" element={<TaskLists />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
