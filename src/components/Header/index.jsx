// pagina-usuarios\src\components\Header\index.jsx
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className='header'>
      <div className='header_wrap'>
        <Link to="/" className='brand'>
          <img src={logo} alt="Logo da Contabilidade" />
          <span>Contabilidade Dendezeiros</span>
        </Link>
        <nav className='nav'>
          <NavLink to="/servicos" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Serviços</NavLink>
          <NavLink to="/sobre-nos" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Sobre Nós</NavLink>
          <NavLink to="/fale-conosco" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Contato</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

