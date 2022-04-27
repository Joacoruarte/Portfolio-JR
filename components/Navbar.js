import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <Link href="/">
          <a className="navbar-brand">Joaquin ruarte</a>
        </Link>
        <div className="navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ml-auto d-flex flex-row justify-content-end"
            style={{ gap: "1rem" }}
          >
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
};
export default NavBar;
