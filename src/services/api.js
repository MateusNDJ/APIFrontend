import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP

// Cria uma instância do axios com uma URL base
const api = axios.create({
  baseURL: 'http://localhost:8080', // URL do seu servidor Spring Boot
});


// Adiciona um interceptor para incluir o token de autenticação em todas as requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Obtém o token do localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adiciona o token ao cabeçalho Authorization
  }
  return config; // Retorna a configuração modificada
});

export default api; // Exporta a instância do axios configurada
