import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários. ok
// Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos. ok
// Desabilite o botão de Login equanto você está executando o login. ok
// Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login. ok 
// Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição. ok

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(false)


  async function handleLogin() {
    try {
      setDisabled(true)
      setErrorMessage('')
      const response = await login({ email, password })
      setDisabled(false)
      alert('Login efetuado com sucesso!')
      console.log(response)
    } catch (error) {
      setDisabled(false)
      setErrorMessage(error.message)
      console.log(error)
    }
  }
  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className='errorMessage'>{errorMessage}</div>
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>

        <div className='button'>
          <button disabled={email === '' || password.length < 6 || disabled} onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
    </div>
  );
}
