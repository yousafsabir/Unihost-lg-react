import React from "react";
import Faqs from "../../components/faqs/Faqs";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Togglebtn from "../../components/togglebtn/Togglebtn";
import "./Pg34.css";
function Pg34() {
  return (
    <div>
      <Navbar />
      {/* Toogle */}
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
                id="btn-toogle34"
                href="#"
                class="btn active"
                role="button"
                data-bs-toggle="button"
              >
                Estudante
              </a>
              <a
                id="btn-toogle"
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
      <Faqs
        heading1="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        heading2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        heading3="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        heading4="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        heading5="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        opentext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        , sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        , sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
        s dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
      />
      <Footer />
    </div>
  );
}

export default Pg34;
