import React, { useEffect, useState } from 'react'; // Importa React e os hooks useEffect e useState
import { useParams } from 'react-router-dom'; // Importa o hook useParams do react-router-dom para acessar parâmetros da URL
import api from '../services/api'; // Importa o serviço de API

const DeviceDetails = () => {
  const { id } = useParams(); // Extrai o parâmetro 'id' da URL
  const [device, setDevice] = useState(null); // Define o estado inicial para o dispositivo

  useEffect(() => {
    // Faz uma requisição GET para a API para obter os detalhes do dispositivo
    api.get(`/devices/${id}`)
      .then(response => setDevice(response.data)) // Atualiza o estado com os dados do dispositivo
      .catch(error => console.error(error)); // Lida com erros na requisição
  }, [id]); // O array [id] faz com que o useEffect execute novamente se o 'id' mudar

  // Exibe uma mensagem de carregamento enquanto os dados do dispositivo não são carregados
  if (!device) return <div>Loading...</div>;

  return (
    <div>
      <h2>Detalhes do Dispositivo</h2>
      <p>Nome: {device.name}</p>
      <p>Status: {device.status}</p>
      <p>Último Ping: {device.lastPing}</p>
      <p>Localização: {device.location}</p>
    </div>
  );
};

export default DeviceDetails; // Exporta o componente DeviceDetails como padrão
