import React from "react";
import "./Concept.css";

function Concept() {
  return (
    <div className="concept-background">
    <section className="container-fluid" id="concept">
      
      <h1 className="concept-h1">"Concept"</h1>
      <div data-aos="fade-right" className="concept-logo">
        <div  class="card mb-3 text-white bg-secondary" style={{ "max-width": "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="./uniuplogotrans.png" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">LOGO</h5>
                <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                </p>
                <p class="card-text">
                  <small class="text-muted">uni+Up</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="concept-vision">
        <div data-aos="fade-left" class="card mb-3 text-white bg-secondary" style={{ "max-width": "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://images.unsplash.com/photo-1569236529148-ad88dc554d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Vision</h5>
                <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                </p>
                <p class="card-text">
                  <small class="text-muted">uni+Up</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{"clear": "both"}}></div>
     
    </section>
    </div>
  );
}

export default Concept;

