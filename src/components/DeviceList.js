import React, { useEffect, useState } from 'react';
import api from '../services/api';

const DeviceList = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Dispositivo 1', status: 'Ativo' },
    { id: 2, name: 'Dispositivo 2', status: 'Inativo' },
    { id: 3, name: 'Dispositivo 3', status: 'Ativo' },
    { id: 4, name: 'Dispositivo 4', status: 'Inativo' },
    { id: 5, name: 'Dispositivo 5', status: 'Ativo' }
  ]);

  useEffect(() => {
    api.get('/devices')
      .then(response => setDevices(response.data))
      .catch(error => console.error('Erro ao buscar dispositivos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Dispositivos</h2>
      
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            {device.name} - {device.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
