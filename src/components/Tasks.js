import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DataGrid } from '@mui/x-data-grid';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksCollection = await getDocs(collection(db, 'tasks'));
      setTasks(tasksCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchTasks();
  }, []);

  const columns = [
    { field: 'title', headerName: 'Task Title', width: 200 },
    { field: 'description', headerName: 'Task Description', width: 200 },
    { field: 'taskListTitle', headerName: 'Task List Title', width: 200 },
    { field: 'createdBy', headerName: 'Created By', width: 200 },
    { field: 'creationTime', headerName: 'Creation Time', width: 200 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={tasks} columns={columns} pageSize={5} />
    </div>
  );
};

export default Tasks;
