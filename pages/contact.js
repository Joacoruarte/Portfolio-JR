import Layout from "../components/Layout";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import axios from "axios"
import { useState } from "react";


const Contact = () => {
    const [form, setForm] = useState({ 
        email: "", 
        menssage: ""
    })

    const handleOnSumbit = (e) => { 
        e.preventDefault()
        console.log(form)
        axios.post("https://portfolio-mail-rj.herokuapp.com/sendMail" , form)
    }
    const handleOnChange = (e) => { 
        setForm({ 
            ...form,
            [e.target.name]: e.target.value
        })
    }

  return (
    <Layout dark={true} footer={false}>
      <div className="row">
        <div className="col-md-12 text-light text-center">
          <div className="d-flex flex-column justify-content-evenly">
            <h1 style={{ fontWeight: "bold", fontSize: "4rem" }}>
              Joaquin Ruarte
            </h1>
            <h2 style={{ fontWeight: "400", fontSize: "2rem" }}>
              {" "}
              Full Stack Developer
            </h2>
          </div>
          <div className="d-flex flex-row justify-content-center my-3" style={{gap: "3rem"}}>
            <div>
              <Link href="https://www.linkedin.com/in/joaquinruartejs/">
                <button className="linkedin">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
              </Link>
            </div>
            <div>
              <Link href="https://github.com/Joacoruarte">
                <button className="github">
                  <BsGithub></BsGithub>
                </button>
              </Link>
            </div>
            <div>
              <Link href="https://wa.me/+5492226539525">
                <button className="whatsapp">
                  <FaWhatsapp></FaWhatsapp>
                </button>
              </Link>
            </div>
          </div>
          <form onSubmit={handleOnSumbit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="col-md-4 offset-md-4 form-control text-center" 
                value={form.email}
                name="email"
                onChange={handleOnChange}
                placeholder="Email..."
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Menssage
              </label>
              <textarea
                type="text"
                className="col-md-4 offset-md-4 form-control text-center" 
                value={form.menssage}
                placeholder="Escribe tu mensaje..."
                name="menssage"
                onChange={handleOnChange}
                id="exampleInputPassword1"
                style={{minHeight: "7rem"}}
              />
            </div>
            <div className="mb-3 form-check">
            </div>
            <button type="submit" className="btn btn-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
