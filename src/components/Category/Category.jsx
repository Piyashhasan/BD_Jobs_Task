import React, { useState } from "react";
import "./Category.css";
import categoryIcon from "../../assets/category.jpg";
import { RiArrowRightSFill } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bs";

import generalData from "./Fake_data/generalData";
import skilledData from "./Fake_data/skilledData";

const Category = () => {
  const [category, setCategory] = useState("categoryTwo");
  const handleCategory = (category) => {
    setCategory(category);
  };
  const categoryItem = category === "categoryOne" ? skilledData : generalData;
  return (
    <div className="category_container py-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center">
              <div className="title d-flex align-items-center">
                <img src={categoryIcon} alt="" />
                <span className="fs-2 mx-3">Category</span>
              </div>
              <div className="category_button">
                <button
                  style={{
                    backgroundColor:
                      category === "categoryTwo" ? "#fff" : "#1565C0",
                    color: category === "categoryTwo" ? "#1565C0" : "#fff",
                  }}
                  onClick={() => handleCategory("categoryOne")}
                  className="btn fs-3 category_button_toggler"
                >
                  Special Skilled
                </button>
                <button
                  style={{
                    backgroundColor:
                      category === "categoryOne" ? "#fff" : "#1565C0",
                    color: category === "categoryOne" ? "#1565C0" : "#fff",
                  }}
                  onClick={() => handleCategory("categoryTwo")}
                  className="btn fs-3 category_button_toggler"
                >
                  General
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-9">
            <div className="category_item_card">
              <div className="row">
                {categoryItem.map((category) => {
                  return (
                    <div key={category.id} className="col-md-4 my-2">
                      <div className="item_card d-flex align-items-center">
                        <img
                          src={category.img}
                          alt="category img"
                          className="img-fluid"
                        />
                        <p className="mt-2 mx-4">{category.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="guideline p-4">
              <h4>বিদেশ জবস্ এর গাইডলাইন</h4>
              <ul className="p-0 mt-3">
                <li>
                  <a href="#">
                    {" "}
                    <RiArrowRightSFill /> <span>"বিদেশ জবস্"-নির্দেশিকা</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <RiArrowRightSFill />
                    <span> বিদেশে যাওয়ার গাইডলাইন</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <RiArrowRightSFill />{" "}
                    <span>বিদেশে চাকরির পূর্ব প্রস্তুতি</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <RiArrowRightSFill />
                    <span>বিদেশে যাওয়ার প্রাসঙ্গিক কাজ</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <RiArrowRightSFill />
                    <span>বিদেশের যাত্রাপথে করনীয়</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <RiArrowRightSFill />
                    <span>বিদেশে জীবনযাত্রা</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="guideline p-4 mt-3">
              <h4>সরকারি গুরুত্বপূর্ণ লিংক সমূহ</h4>
              <ul className="p-0 mt-3">
                <li>
                  <a href="#">
                    {" "}
                    <BsArrowRightCircle />
                    <span>ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <BsArrowRightCircle />
                    <span>বাংলাদেশ কারিগরি শিক্ষা বোর্ড</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <BsArrowRightCircle />
                    <span>জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <BsArrowRightCircle />
                    <span>
                      প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
