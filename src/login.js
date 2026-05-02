// Vetor com informações dos usuários
const usuarios = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao@example.com',
    senha: 'senha123',
    expirado: false
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria@example.com',
    senha: 'senha456',
    expirado: true
  },
  {
    id: 3,
    nome: 'Pedro Oliveira',
    email: 'pedro@example.com',
    senha: 'senha789',
    expirado: false
  }
];

// Função de login
function fazerLogin(email, senha) {
  // Busca o usuário pelo email
  const usuario = usuarios.find(u => u.email === email);

  // Se o usuário não for encontrado
  if (!usuario) {
    return 'Credenciais incorretas';
  }

  // Se a senha estiver incorreta
  if (usuario.senha !== senha) {
    return 'Credenciais incorretas';
  }

  // Se as credenciais estiverem expiradas
  if (usuario.expirado) {
    return 'Renove suas credenciais';
  }

  // Login bem-sucedido
  return 'Login realizado com sucesso';
}

export { fazerLogin, usuarios };
