import React from "react";
import {Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-background"></div>
      <section className="container-fluid" id="home">
        <div className="row home-row ">
          <div className="col-lg-5 col-md-5 col-sm-5 d-flex align-items-center">
            <img
              className="logo-image animate__animated animate__backInLeft"
              src="./uniuplogotrans.png"
            />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 d-flex align-items-center home-right">
            <table>
              <tr>
                <p className="home-catchphrase container-fluid">
                  "Main catchphrase"
                </p>
              </tr>
              <tr>
                <div class="justify-content-around d-flex button-container">
                  <button
                    type="button"
                    className="home-btn btn btn-warning btn-lg"
                  >
                    無料登録
                  </button>
                  <Link to="/start-up-start">
                  <button
                    type="button"
                    className="home-btn btn btn-warning btn-lg"
                  >
                    START UP</button>
                    </Link>
                  
                </div>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
