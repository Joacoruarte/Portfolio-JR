import Layout from "../components/Layout";
import Link from "next/link";
import { proyects } from "../profile"; 

const Index = () => (
  <Layout>
    {/** Headear Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row ">
            <div className="col-md-4">
              <img
                alt="Joaquin foto"
                src="Myproject.jpeg"
                className="img-fluid"
                style={{ height: "16rem" }}
              />
            </div>
            <div className="col-md-8">
              <h1>Joaquin ruarte</h1>
              <h3>Full Stack Developer</h3>
              <p>
                Soy un desarrollador apasionado por el mundo del desarrollo y
                la capacidad de resolver problemas , siempre teniendo en cuenta
                que lo que se este desarrollando sea escalable y sostenible.
              </p>
              <Link href="/contact"> 
                <a className="btn btn-outline-light">
                  Contratame
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second Section*/}
    <div className="row py-2">
      <div className="col-md-12">
        <div className="card bg-light h-100">
          <div className="card-body">
            <h1>Experiencia</h1>
            <ul>
              <li>
                <h3>[Academic] Full Stack Development E-Commerce</h3>
                <h5>Mar 2022 - Abr 2022</h5>
                <p>
                  Proyecto grupal - 8 Personas Maquetación, creación y diseño de
                  una tienda de perfumería online. Con búsqueda por categorías,
                  sexo, vista individual de producto, panel de administrador y
                  carrito. <br />
                  Tecnologías: ReactJs, React-Redux, React-Hooks, Styled
                  Components, Node-Express PostgreSQL y Sequelize
                </p>
                <h5>Features del proyecto:</h5>
                <ul>
                  <li>
                    Registro y login autenticado con JWT("JSON Web Token")
                  </li>
                  <li>Restablecer contraseña</li>
                  <li>Pasarela de pagos , realizada con mercado pago</li>
                  <li>Dar permisos de administrador a los usuarios</li>
                  <li>Añadir , Editar y Eliminar productos</li>
                </ul>
              </li>
              <li>
                <h3>[Academic] Full Stack Pokemon SPA</h3>
                <h5>Feb 2022 - Mar 2022</h5>
                <p>
                  Desarrollo de una Simple Page Aplication que consume datos de
                  una API ("Pokémon Api"). con capacidad de crear y eliminar
                  Pokemons en Base de Datos propia, filtrar , ordenar, mostrar
                  detalles y buscar cada Pokémon, Entre otras funciones. <br />
                  Tecnologias : ReactJs, Redux , Node.js , Express , PostgreSQL
                  y Sequelize.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/** Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            {proyects.map(({ name, description, image, url }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <Link href={url}> 
                    <div className="overflow"> 
                      <img src={`/${image}`} alt={`${name}`} className="card-img-top" />
                    </div>
                  </Link>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href={url}>Know more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-4"> 
              <Link href={"/projects"}>
                <a className="btn btn-outline-light">More projects</a>
              </Link>
          </div> */}
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
