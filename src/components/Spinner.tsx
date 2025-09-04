import React from 'react';

export const Spinner: React.FC = () => {
  return (
    <div className='align-content-center flex justify-content-center'>
      <i className='pi pi-spin pi-spinner' style={{ fontSize: '2rem' }}></i>
    </div>
  );
};