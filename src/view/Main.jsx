import React from "react";
import "./Main.css";
import TopNav from "../components/TopNav/TopNav";
import MainNav from "../components/MainNav/MainNav";
import DreamJobSearch from "../components/DreamJobSearch/DreamJobSearch";
import CountryWiseVacancies from "../components/CountryWiseVacancies/CountryWiseVacancies";
import MainSlider from "../components/Slider/MainSlider";
import NoOf from "../components/NoOf/NoOf";
import DifferentCountryJob from "../components/DifferentCountryJob/DifferentCountryJob";
import JointlyOrganized from "../components/JointlyOrganized/JointlyOrganized";
import Footer from "../components/Footer/Footer";
import Category from "../components/Category/Category";
// import Category from "../components/Category/Category";

const Main = () => {
  return (
    <div className="Main">
      {/* nav */}
      <nav>
        <TopNav />
        <MainNav />
      </nav>
      {/* nav */}

      {/* main */}
      <section className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <DreamJobSearch />
            </div>
            <div className="col-md-6 bg-white p-0">
              <MainSlider />
            </div>
            <div className="col-md-3">
              <CountryWiseVacancies />
            </div>
          </div>
        </div>
      </section>
      {/* main */}

      {/* no of  */}
      <section>
        <NoOf />
      </section>
      {/* no of  */}

      {/* CATEGORY SECTION */}
      <section>
        <Category />
      </section>
      {/* CATEGORY SECTION */}

      {/* Different country job */}
      <section className="country_job">
        <DifferentCountryJob />
      </section>
      {/* Different country job */}

      {/* Jointly Organized */}
      <section>
        <JointlyOrganized />
      </section>
      {/* Jointly Organized */}

      {/* Footer area */}
      <section>
        <Footer />
      </section>
      {/* Footer area */}
    </div>
  );
};

export default Main;
