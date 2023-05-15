import React from "react";
import "./JointlyOrganized.css";
import bdJobsImg from "../../assets/Jointly Organized/Bdjobs-logo.png";
import imo from "../../assets/Jointly Organized/IOM.png";

const JointlyOrganized = () => {
  return (
    <div className="jointly_organized">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="fw-bold">Bdesh Jobs, in trust and reliance</h2>
            <div className="video  mt-5 mx-3">
              <iframe
                className="videoFrame"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/e3wpqRBmWGU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-6  pt-5 d-flex">
            <div className="link mt-4 mx-2">
              <img src={bdJobsImg} alt="" className="img-fluid bd_img" />
            </div>
            <div className="link mt-4 mx-2">
              <img src={imo} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JointlyOrganized;
