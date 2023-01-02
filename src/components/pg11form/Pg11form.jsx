import React from "react";
import { Link } from "react-router-dom";
import "./Pg11form.css";

import { useNavigate } from "react-router-dom";
function Pg11form() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/14`;
    navigate(path);
  };
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-6" id="form-back">
            <div className="modal-header ">
              <div>
                <Link to="/14" className="modal-title" id="form-link">
                  Iniciar sessão
                </Link>
              </div>
              <div className="vr"></div>
              <div className="text-center">
                <a id="form-link" href="#" className="modal-title">
                  Registar
                </a>
              </div>
            </div>
            <div className="modal-body">
              <h4>Bem-vindo de novo!</h4>
              {/* Mail */}
              <div className="col">
                <label id="label-form" for="inputEmail1" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail" />
              </div>
              {/* Password */}
              <div className="form-group mt-2">
                <label id="label-form" className="col-md-4 control-label">
                  Password
                </label>
                <div className="col mt-1">
                  <input
                    id="password-field"
                    type="password"
                    className="form-control"
                    name="password"
                    // value="secret"
                  />
                  <span
                    toggle="#password-field"
                    className="fa fa-fw fa-eye field-icon toggle-password"
                  ></span>
                </div>
              </div>
              <div className="row mt-4 text-center">
                <a id="link-color" href="">
                  Esqueci-me da palavra-passe
                </a>
              </div>
              <div className="row mt-2">
                <button
                  onClick={routeChange}
                  id="form-btn"
                  className="btn "
                  type="button"
                >
                  Iniciar sessão
                </button>
              </div>
              <div className="row text-center mt-3">
                <div className="col-5">
                  <hr />
                </div>
                <div className="col-2">
                  <h1>ou</h1>
                </div>
                <div className="col-5">
                  <hr />
                </div>
              </div>
              <div className="row text-center">
                <div className="col-6">
                  <button id="btn-back-fb" className="btn btn-block">
                    <i className="fa-brands fa-facebook"></i> Facebook
                  </button>
                </div>
                <div className="col-6">
                  <button id="btn-back-google" className="btn btn-block">
                    <i className="fa-brands fa-google"></i> Google
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Pg11form;
