import { expect } from 'chai';
import { fazerLogin } from '../src/login.js';

describe('Função fazerLogin', () => {
  // Teste 1: Sucesso
  it('Deve retornar "Login realizado com sucesso" com email e senha corretos', () => {
    const resultado = fazerLogin('joao@example.com', 'senha123');
    expect(resultado).to.equal('Login realizado com sucesso');
  });

  // Teste 2: Credencial expirada
  it('Deve retornar "Renove suas credenciais" quando as credenciais estão expiradas', () => {
    const resultado = fazerLogin('maria@example.com', 'senha456');
    expect(resultado).to.equal('Renove suas credenciais');
  });

  // Teste 3: Usuário não encontrado
  it('Deve retornar "Credenciais incorretas" quando o usuário não é encontrado', () => {
    const resultado = fazerLogin('inexistente@example.com', 'qualquerSenha');
    expect(resultado).to.equal('Credenciais incorretas');
  });

  // Teste 4: Senha incorreta
  it('Deve retornar "Credenciais incorretas" quando a senha está incorreta', () => {
    const resultado = fazerLogin('joao@example.com', 'senhaErrada');
    expect(resultado).to.equal('Credenciais incorretas');
  });
});
