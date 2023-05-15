import React from "react";
import "./NoOf.css";
import one from '../../assets/No_of/one.jpg'
import two from "../../assets/No_of/two.jpg";
import three from "../../assets/No_of/three.jpg";


const NoOf = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 no_of">
          <div className="">
            <img src={one} alt="No. of vacancies" className="img-fluid" />
          </div>
          <div>
            <h5>No. of vacancies</h5>
            <h5>130</h5>
          </div>
        </div>
        <div className="col-md-4 no_of">
          <div className="">
            <img src={two} alt="No. of vacancies" className="img-fluid" />
          </div>
          <div>
            <h5>No. of jobs</h5>
            <h5>12</h5>
          </div>
        </div>
        <div className="col-md-4 no_of ">
          <div className="">
            <img src={three} alt="No. of vacancies" className="img-fluid" />
          </div>
          <div>
            <h5>No. of countries</h5>
            <h5>8</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoOf;
