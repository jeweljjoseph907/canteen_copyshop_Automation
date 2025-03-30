import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip, Select, MenuItem } from '@mui/material';
import { getOrders, updateOrderStatus } from '../api';

const AdminView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };
    
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders(orders.map(order => 
        order._id === orderId ? { ...order, status: newStatus } : order
      ));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const columns = [
    { field: '_id', headerName: 'Order ID', width: 200 },
    { field: 'studentName', headerName: 'Student', width: 150 },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 150,
      renderCell: (params) => (
        <Chip 
          label={params.value} 
          color={
            params.value === 'completed' ? 'success' : 
            params.value === 'ready' ? 'primary' : 'default'
          } 
        />
      )
    },
    { 
      field: 'actions', 
      headerName: 'Change Status', 
      width: 200,
      renderCell: (params) => (
        <Select
          value={params.row.status}
          onChange={(e) => handleStatusChange(params.row._id, e.target.value)}
          size="small"
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="accepted">Accepted</MenuItem>
          <MenuItem value="printing">Printing</MenuItem>
          <MenuItem value="ready">Ready for Pickup</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      )
    },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default AdminView;