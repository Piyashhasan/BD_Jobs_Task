import React from "react";
import "./DreamJobSearch.css";
import { MdWork } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { ImEarth } from "react-icons/im";

const DreamJobSearch = () => {
  return (
    <div className="dream_job_search py-5">
      <h1 className="text-white">Find your dream job</h1>
      {/* ---------------- */}
      <div className="input_field my-4">
        <div className="input_field_title d-flex align-items-center mb-3">
          <a className="text-white" href="">
            <MdWork />
          </a>
          <span className="mx-3">Write your occupation</span>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control py-3 fs-4"
            placeholder="Driver, Electrician etc"
          />
        </div>
      </div>
      {/* --------------- */}
      <div className="input_field my-4">
        <div className="input_field_title d-flex align-items-center mb-3">
          <a className="text-white" href="">
            <ImEarth />
          </a>
          <span className="mx-3">Skilled Category</span>
        </div>
        <div className="mb-3">
          <select class="form-select py-3 fs-4" aria-label="">
            <option selected>Select Skill</option>
            <option value="Skilled">Skilled</option>
            <option value="Semi Skilled">Semi Skilled</option>
            <option value="Less Skilled">Less Skilled</option>
          </select>
        </div>
      </div>
      {/* ---------------- */}

      <div className="input_field my-4">
        <div className="input_field_title d-flex align-items-center mb-3">
          <a className="text-white" href="">
            <HiLocationMarker />
          </a>
          <span className="mx-3">Country</span>
        </div>
        <div className="mb-3">
          <select class="form-select py-3 fs-4" aria-label="">
            <option selected>Select Country</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Japan">Japan</option>
            <option value="South Korea">South Korea</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Oman">Oman</option>
            <option value="Denmark">Denmark</option>
            <option value="Jordan">Jordan</option>
          </select>
        </div>
      </div>

      <button className="btn fs-4 bg-warning mt-4 px-4 py-3 fw-bold">Search</button>
    </div>
  );
};

export default DreamJobSearch;
