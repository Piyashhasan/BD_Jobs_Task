import React from "react";
import "./DifferentCountryJob.css";
import Slider from "react-slick";
import country_vacancy from "../CountryWiseVacancies/data";

const DifferentCountryJob = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="different_country_job py-5">
      <div className="container">
        <h1 className="fw-bold text-white text-center pt-5 fs-2">
          Jobs in different countries
        </h1>

        {/* slider area */}
        <div className="country_job_slider mt-5">
          <Slider {...settings}>
            {country_vacancy.map((countryInfo) => {
              return (
                <div key={countryInfo.id} className="country_card">
                  <div className="country_vacancies text-center pt-4">
                    <h5 className="fs-1 fw-bold">{countryInfo.noOfVacancy}</h5>
                    <p className="fs-5">{countryInfo.title}</p>
                  </div>
                  <div className="country_name px-1">
                    <h3 className="text-center">{countryInfo.countryName}</h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {/* slider area */}
      </div>
    </div>
  );
};

export default DifferentCountryJob;
