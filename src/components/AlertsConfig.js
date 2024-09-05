import React, { useState } from 'react';
import api from '../services/api';

const AlertsConfig = () => {
  const [alertConfig, setAlertConfig] = useState({
    deviceId: '',
    condition: '',
    threshold: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlertConfig({ ...alertConfig, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/alerts', alertConfig)
      .then(response => alert('Alerta configurado com sucesso!'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Configurar Alertas</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID do Dispositivo:
          <input type="text" name="deviceId" value={alertConfig.deviceId} onChange={handleChange} />
        </label>
        <label>
          Condição:
          <input type="text" name="condition" value={alertConfig.condition} onChange={handleChange} />
        </label>
        <label>
          Limite:
          <input type="text" name="threshold" value={alertConfig.threshold} onChange={handleChange} />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AlertsConfig;
