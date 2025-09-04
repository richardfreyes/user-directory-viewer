import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getUsers } from '../api/users';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types/User';

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='card'>
      <h2>User Directory</h2>
      <DataTable
        value={users}
        showGridlines
        stripedRows
        paginator
        selectionMode='single'
        onRowClick={(e) => navigate(`/users/${(e.data as User).id}`)}
        rows={10}
        size='normal'
        loading={loading}
      >
        <Column field='name' header='Name'></Column>
        <Column field='username' header='Username'></Column>
        <Column field='email' header='Email'></Column>
        <Column field='phone' header='Phone'></Column>
      </DataTable>
    </div>
  );
};