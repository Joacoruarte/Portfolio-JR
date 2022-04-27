import Link from "next/link";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">Joaquin ruarte</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/skills">
              <a className="nav-link">Skills</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github">
              <a className="nav-link">Github</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
