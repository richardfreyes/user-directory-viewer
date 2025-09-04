import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../api/users';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Spinner } from './Spinner';
import type { User } from '../types/User';

export const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const data = await getUserById(id);
          setUser(data);
        } catch (error) {
          console.error('Failed to fetch user:', error);
          setUser(null);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <Spinner/>;
  if (!user) return <div className='align-content-center flex justify-content-center'>User not found.</div>;

  const header = (
    <div className='flex justify-content-end align-items-center p-3 surface-200'>
      <Button className='p-button-text' severity='secondary' icon='pi pi-arrow-left' label='Back to List' onClick={() => navigate('/users')} />
    </div>
  );

  return (
    <div className='flex justify-content-center p-5'>
      <Card title='User Details' style={{ width: '40rem' }} header={header}>
        <div>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>User Name:</strong> {user?.username}</p>
          <p><strong>Phone:</strong> {user?.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target='_blank' rel='noopener noreferrer'>{user?.website}</a></p>
          <p><strong>Company:</strong> {user?.company.name}</p>
          <p><strong>Address:</strong> {user?.address.street}, {user?.address.suite}, {user?.address.city}, {user?.address.zipcode}</p>
        </div>
      </Card>
    </div>
  );
};