/**
 * @format
 */
//
import "react-native";
import { signInWithEmail } from "../api/Auth.tsx";
import { describe, expect, it } from "@jest/globals";
describe('signInWithEmail', () => {
  it('deve retornar um objeto com dados quando o login for bem-sucedido', async () => {
    // Suponha que sua função de autenticação retorne dados ao fazer login bem-sucedido
    const email: string = 'teste2@teste.com';
    const password: string = '123456';
    const result = await signInWithEmail(email, password);

    expect(result).toHaveProperty('data');
    expect(result.error).toBeUndefined();
  });

  it('deve retornar um objeto com erro quando o login falhar', async () => {
    // Suponha que sua função de autenticação retorne um erro ao fazer login falhar
    const email: string = 'emailInvalido@example.com';
    const password: string = 'senhaInvalida';
    const result = await signInWithEmail(email, password);

    expect(result).toHaveProperty('error');
    expect(result.data).toBeUndefined();
  });
});
