import React from "react";
import "./Sikumi.css";

function Sikumi() {
  const [stepNumber,setStepNumber]=React.useState(1)
  function changeHandle(event){
    const stepName = event.target.name;
    setStepNumber(()=> {
      if(stepName==="step1"){
        return 1
      } else if(stepName==="step2"){
        return 2
      } else{
        return 3
      }
    }
    )
  }
  return (
    <div>
    <div className="sikumi-background"></div>
    <section id="sikumi">
      <h1 className="sikumi-h1">仕組み</h1>
      <div className="row">
        <div class="d-flex flex-column col-3 bd-highlight">
          <div class="p-2 bd-highlight"><button className="btn btn-primary" onClick={changeHandle} name="step1">step1</button></div>
          <div class="p-2 bd-highlight"><button className="btn btn-primary" onClick={changeHandle} name="step2">step2</button></div>
          <div class="p-2 bd-highlight"><button className="btn btn-primary" onClick={changeHandle} name="step3">step3</button></div>
        </div>
        <div className="col-9 sikumi-explain">{stepNumber===1 ? <p>step1</p> : null}{stepNumber===2 ? <p>step2</p> : null}{stepNumber===3 ? <p>step3</p> : null}</div>
      </div>
    </section>
    </div>
  );
}

export default Sikumi;
