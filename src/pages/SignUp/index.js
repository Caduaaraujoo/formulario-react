import './style.css';
import Background from '../../assets/background.jpg'
import Sucesso from '../../assets/woman-success.png'
import { useState } from 'react';
import OlhoFechado from '../../assets/close-eye.svg'
import OlhoAberto from '../../assets/open-eye.svg'

function SignUp() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [error, setError] = useState('');
  const [sucesso, setSucesso] = useState(null);
  const [olho, setOlho] = useState(OlhoFechado);
  const [type, setType] = useState(false);


  function clearForm() {
    setSucesso('');
    setEmail('');
    setNome('');
    setSenha('');
    setOlho(OlhoFechado);
    setType(false);
    setError('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError('');
    setSucesso('');

    if (!nome && !email && !senha) {
      setError('Todos os campos devem ser preenchidos');
      return;
    }

    if (!nome) {
      setError("O campo nome é obrigatório");
      return;
    }

    if (!email) {
      setError("O campo e-mail é obrigatório");
      return;
    }


    if (!senha) {
      setError("o campo senha é obrigatório");
      return;
    }

    if (senha.length < 8) {
      setError("a senha deve ter no mínimo 8 caracteres");
      return;
    }

    setSucesso(Sucesso);
  }

  function handleOlho() {
    if (olho === OlhoFechado) {
      setOlho(OlhoAberto)
      setType(true)
    } else {
      setOlho(OlhoFechado)
      setType(false)
    }
  }

  return (
    <div className='container'>
      {sucesso && <div className='sucesso-class'>
        <img src={sucesso} alt='' />
        <p>Cadastro efetuado com sucesso!</p>
      </div>}
      {!sucesso && <div className='container-input'>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Nome'
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <input
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type={type === false ? 'password' : 'text'}
            placeholder='Senha'
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <img className='olho'
            src={olho}
            alt='olho'
            onClick={() => handleOlho()}
          />
          <p>{error}</p>
          <button
            type='submit'
            className='cadastrar'>
            CADASTRAR
          </button>
          <button
            className='cancelar'
            type='button'
            onClick={() => clearForm()}
          >
            CANCELAR
          </button>
        </form>
        <h4>Já tem cadastro? Clique aqui!</h4>
      </div>}
      <div className='cubos-academy'>
        <img src={Background} alt='cubos' />
      </div>
    </div>
  );
}

export default SignUp;
