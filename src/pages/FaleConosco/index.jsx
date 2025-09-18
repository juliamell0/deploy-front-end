// pagina-usuarios\src\pages\FaleConosco\index.jsx
import './style.css';

function FaleConosco() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
  }

  return (
    <>
      <h1>Fale Conosco</h1>
      <p>Envie suas dúvidas e peça um orçamento sem compromisso.</p>
      <form className='form' onSubmit={handleSubmit}>
        <div className="grid-cols-3">
          <label className="field">
            <span>Nome</span>
            <input type="text" placeholder="Seu nome" required />
          </label>
          <label className='field'>
            <span>Email</span>
            <input type="email" placeholder="email" required />
          </label>
          <label className='field'>
            <span>Telefone</span>
            <input type="tel" placeholder="(00) 00000-0000" required />
            </label>
        </div>
            <label className='field'>
            <span>Assunto</span>
            <input type="text" required placeholder="Abertura para empresa" />
            </label>
            <label className='field'>
            <span>Mensagem</span>
            <textarea placeholder="Escreva sua mensagem aqui..." required></textarea>
            </label>
            <button className='btn primary' type='submit'>Enviar Mensagem</button>
        </form>
    </>
    );
}

export default FaleConosco;
