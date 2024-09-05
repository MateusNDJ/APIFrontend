import React, { useState } from 'react'; // Importa React e o hook useState
import api from '../services/api'; // Importa o serviço de API

const Login = () => {
  // Define o estado inicial para as credenciais de login
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Função para lidar com mudanças nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Atualiza o estado das credenciais com o novo valor
    setCredentials({ ...credentials, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    // Faz uma requisição POST para a API com as credenciais
    api.post('/login', credentials)
      .then(response => {
        // Armazena o token de autenticação no localStorage
        localStorage.setItem('token', response.data.token);
        alert('Login bem-sucedido!'); // Exibe uma mensagem de sucesso
      })
      .catch(error => console.error(error)); // Lida com erros na requisição
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login; // Exporta o componente Login como padrão
