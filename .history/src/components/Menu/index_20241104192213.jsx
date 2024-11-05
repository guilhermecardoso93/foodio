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
        </div>
      </navbar>
    </header>
  );
}
