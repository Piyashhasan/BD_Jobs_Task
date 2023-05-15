import React from "react";
import "./CountryWiseVacancies.css";
import { MdWork } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { ImEarth } from "react-icons/im";
import submit_biodata from "../../assets/submit_biodata.png";
import bdesh_jatra from "../../assets/bdesh_jatra.svg";

const CountryWiseVacancies = () => {
  return (
    <div className="Country_wise_vacancies py-5">
      <h1 className="text-white">Country wise vacancies</h1>
      {/* ---------------- */}
      <div className="list_item my-4">
        <ul className="p-0">
          <li>United Arab Emirates (45)</li>
          <li>Saudi Arabia (35)</li>
          <li>Japan (25)</li>
          <li>South Korea (11)</li>
          <li>Malaysia (6)</li>
          <li>Oman (6)</li>
          <li>All Countries</li>
        </ul>
      </div>
      {/* button group */}
      <div className="btn_group">
        <button className="btn d-flex justify-content-start align-items-center btn-one">
          <div className="">
            <img
              src={submit_biodata}
              alt="submit_biodata"
              className="img-fluid"
            />
          </div>
          <div className="mx-3">
            <p className="fw-bold">
              Submit your
              <br />
              Biodata
            </p>
          </div>
        </button>
        <button className="btn mt-2 btn-two">
          <div className="">
            <img src={bdesh_jatra} alt="bdesh_jatra" className="img-fluid" />
          </div>
          <div className="mt-2">
            <p className="fw-bold">অভিবাসন বিষয়ক তথ্য</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CountryWiseVacancies;
