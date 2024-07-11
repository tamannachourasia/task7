import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DataGrid } from '@mui/x-data-grid';

const TaskLists = () => {
  const [taskLists, setTaskLists] = useState([]);

  useEffect(() => {
    const fetchTaskLists = async () => {
      const taskListsCollection = await getDocs(collection(db, 'taskLists'));
      setTaskLists(taskListsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchTaskLists();
  }, []);

  const columns = [
    { field: 'title', headerName: 'Task List Title', width: 200 },
    { field: 'createdBy', headerName: 'Created By', width: 200 },
    { field: 'numberOfTasks', headerName: 'Number of Tasks', width: 200 },
    { field: 'creationTime', headerName: 'Creation Time', width: 200 },
    { field: 'lastUpdated', headerName: 'Last Updated', width: 200 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={taskLists} columns={columns} pageSize={5} />
    </div>
  );
};

export default TaskLists;
