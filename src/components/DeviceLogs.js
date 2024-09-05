import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const DeviceLogs = () => {
  const { id } = useParams();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get(`/devices/${id}/logs`)
      .then(response => setLogs(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h2>Logs do Dispositivo</h2>
      <ul>
        {logs.map(log => (
          <li key={log.timestamp}>
            {log.timestamp} - {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceLogs;
