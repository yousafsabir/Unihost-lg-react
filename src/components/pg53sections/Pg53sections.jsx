import React from "react";
import "./Pg53sections.css";
function Pg53sections() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row mt-4 mb-4 p-4">
          <div className="col-lg-4 ">
            <div className="mb-4 mt-4">
              <ul>
                <li>
                  {" "}
                  <i className="fa-solid fa-file-lines mb-2"></i> Ajuda para os
                  Estudantes
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-file-lines mt-2"></i> Ajuda para os
                  Estudantes
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <ul>
                <li>
                  {" "}
                  <h4>Contactos</h4>
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-phone mt-4"></i> +351 914 626 616
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-envelope mt-4"></i> info@unihosts.pt
                </li>
              </ul>
            </div>
            <div className="m-4">
              <span>
                <i className="fa-brands fa-facebook m-2"></i>
              </span>
              <span>
                <i className="fa-brands fa-instagram m-2"></i>
              </span>
              <span>
                <i className="fa-brands fa-twitter m-2"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-8 mt-4">
            <form>
              <h4>Deixe-nos uma mensagem!</h4>
              <div className="mb-3 mt-4">
                <label for="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group mb-4 mt-4">
                <label for="exampleFormControlTextarea1 " className="mb-1">
                  Mensagem
                </label>
                <textarea
                  placeholder="A sua Mensagem..."
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button id="btn-form" type="submit" className="btn mb-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pg53sections;
