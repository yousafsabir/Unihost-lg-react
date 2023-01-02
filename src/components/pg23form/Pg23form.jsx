import React from "react";
import "./Pg23form.css";
import { Link } from "react-router-dom";

function Pg23form() {
    return (
        <div>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div id="prog-form-back" className="col">
                        <div className="container">
                            <div className="row text-center mt-4 mb-4">
                                {" "}
                                <h2>
                                    Anunciar a sua propriedade é rápido e fácil!
                                </h2>
                            </div>

                            {/* first row */}
                            <div className="row mt-4 mb-4">
                                <div className="col-md-6">
                                    <label
                                        htmlFor="input1"
                                        className="form-label"
                                    >
                                        Qual o seu tipo de espaço?
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="input1"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label
                                        htmlFor="input2"
                                        className="form-label"
                                    >
                                        Localidade
                                    </label>
                                    <div className="input-group ">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1"
                                        >
                                            <i className="fas fa-map-marker-alt"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-label="location"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* 2nd row */}
                            <div className="row">
                                <div className="col mb-3">
                                    <label
                                        htmlFor="Input3"
                                        className="form-label"
                                    >
                                        Rua
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Input3"
                                    />
                                </div>
                                <div className="col mb-3">
                                    <label
                                        htmlFor="Input4"
                                        className="form-label"
                                    >
                                        Número
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Input4"
                                    />
                                </div>
                            </div>
                            {/* 3rd row */}
                            <div className="row">
                                <div className="col mb-3">
                                    <label
                                        htmlFor="Input5"
                                        className="form-label"
                                    >
                                        Andar
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Input5"
                                    />
                                </div>
                                <div className="col mb-3">
                                    <label
                                        htmlFor="Input6"
                                        className="form-label"
                                    >
                                        Código Postal
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Input6"
                                    />
                                </div>
                            </div>
                            {/* button */}
                            <div className="row mb-4">
                                <div className="col">
                                    <Link to="/24">
                                        <div
                                            id="btn-back-style"
                                            className="btn"
                                        >
                                            Seguinte →
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Pg23form;
