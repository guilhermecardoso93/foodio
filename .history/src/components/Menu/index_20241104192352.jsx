export function Menu() {
  function toggleMenu() {}

  return (
    <header>
      <navbar>
        <div className="navbar-logo">
          <h1>
            Food<b>io</b>
          </h1>
          <div className="hamburguer" onClick={toggleMenu()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="navbar-link">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li className="active">
              <a href="/">Menu</a>
            </li>
            <li className="active">
              <a href="/">Service</a>
            </li>
            <li className="active">
              <a href="/">About Us</a>
            </li>
            <li className="active">
              <a href="/">Gallery</a>
            </li>
          </ul>
        </div>
      </navbar>
    </header>
  );
}
