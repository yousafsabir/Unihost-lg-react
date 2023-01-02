import React from "react";
import "./Togglebtn.css";

function Togglebtn() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row text-center">
          <div className="col">
            {" "}
            <h1>FAQ</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col"></div>
          <div className="col">
            <div id="toggle-div">
              <a
                id="btn-toogle"
                href="#"
                class="btn active"
                role="button"
                data-bs-toggle="button"
              >
                Estudante
              </a>
              <a
                id="btn-toogle2"
                href="#"
                class="btn  active"
                role="button"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                Senhorio
              </a>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Togglebtn;
