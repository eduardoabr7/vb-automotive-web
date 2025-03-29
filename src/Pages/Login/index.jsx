import { useState, useRef, useEffect } from 'react';
import './index.css';
import logo from '../../assets/logo.png';
import animatedIconLogin from '../../assets/login-animate.svg';

function LoginPage() {
  
  // Header
  const [exibirHeader, setExibirHeader] = useState(true);
  const toggleExibirHeader = () => setExibirHeader(!exibirHeader);

  // Painel de login
  const [exibirPainelLogin, setExibirPainelLogin] = useState(true);
  const toggleExibirPainelLogin = () => setExibirPainelLogin(!exibirPainelLogin);

  // controlar exibição menu right bar
  const [exibirMenu, setExibirMenu] = useState(true);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setExibirMenu(!exibirMenu);
  };

  // tratamento para fechar o menu quando usuario clicar fora dele
  useEffect(() => {
    const handleClickFora = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setExibirMenu(false);
      }
    };

    if (exibirMenu) {
      document.addEventListener('mousedown', handleClickFora);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickFora);
    };
  }, [exibirMenu]);

  return (
    <>
      {/* Se exibirHeader for true, ele é exibido */}
      {exibirHeader && (
        <header>
          <nav className="nav-left">
            <img
              src={logo}
              alt="logo-vbautomotive"
              height="100px"
              width="140px"
              style={{
                userSelect: "none",
                WebkitUserSelect: "none",
                WebkitTouchCallout: "none",
                pointerEvents: "none",
              }}
            />
          </nav>

          <nav className="nav-center">
            <div className="links">
              <ul id="right-bar" style={{ display: exibirMenu ? "flex" : "none" }}>
                <li className="li-nav-center"><a href="#">Versão para celular</a></li>
                <li className="li-nav-center"><a href="#">Sobre a oficina</a></li>
                <li className="li-nav-center"><a href="#">Contato</a></li>
              </ul>
            </div>
          </nav>

          {/* Menu mobile */}
          <div ref={menuRef} id="menu-mobile" onClick={toggleMenu} 
            style={{ position: exibirMenu ? 'fixed' : 'absolute' }}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </header>
      )}

      {/* Se exibirPainelLogin for true, ele é exibido */}
      {exibirPainelLogin && (
        <main className="container d-flex align-items-center justify-content-center min-vh-100">
          <div className="painel-login">
            <div className="card-login">
              <h1>LOGIN</h1>
              <div className="email">
                <label>E-mail</label>
                <input type="email" placeholder="Insira seu e-mail" />
                <small>Não compartilhe seu e-mail com ninguém</small>
              </div>
              <div className="senha">
                <label>Senha</label>
                <input type="password" placeholder="Insira sua senha" />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Lembre de mim</label>
                <a href="#">Esqueceu sua senha</a>
              </div>
              <div className="buttons-mobile">
                <button className="btn btn-info" id="button-registrar-mobile">Registre-se</button>
                <button className="btn btn-danger" id="button-login">LOGIN</button>
              </div>
            </div>

            <div className="right">
              <img src={animatedIconLogin} alt="animated-login" id="gif-login" />
              <div className="registro-right">
                <h6>Ainda não tem uma conta?</h6>
                <button className="btn btn-info" id="button-registrar-right">Registrar</button>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default LoginPage;
