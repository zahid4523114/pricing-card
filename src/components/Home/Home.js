import React from "react";
import logo from "../../images/icon-check.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="card-container w-full">
      <div className="header lg:w-1/2 w-full mx-auto p-5 lg:mb-0 mb-16 text-center">
        <h1 className="lg:text-3xl text-2xl">Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <div className="card absolute mx-auto top-1/12 left-1/2 lg:mt-60 mt-48 lg:w-2/5 w-full  bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex lg:flex-row flex-col card-header justify-between items-center">
            <p className="font-bold">100K PAGE VIEWS</p>
            <div className="my-5 w-full lg:hidden block">
              <input
                type="range"
                min="0"
                max="100"
                className="range range-accent"
              />
            </div>
            <h2>
              $16.00 <span className="text-sm">/month</span>
            </h2>
          </div>
          {/* range start */}
          <div className="my-5 lg:block hidden">
            <input
              type="range"
              min="0"
              max="100"
              className="range range-accent"
            />
          </div>
          {/* range end */}
          <div className="flex justify-between items-center ">
            <div className="flex items-center">
              <p className="">Monthly Billing</p>
              <input type="checkbox" className="toggle toggle-accent ml-3" />
            </div>
            <div>
              <p>
                Yearly Billing
                <span className="bg-orange-100 p-1 ml-1 rounded-full">
                  <span className="text-error text-xs">25%</span>
                  <span className="text-error text-xs lg:inline-block hidden ">
                    discount
                  </span>
                </span>
              </p>
            </div>
          </div>
          <hr className="my-5" />
          <div className="card-actions flex lg:flex-row md:flex-row flex-col justify-between">
            <div className="flex flex-col lg:mx-0 mx-auto">
              <span className="text-xs my-3 flex">
                <img src={logo} alt="" />
                Unlimited website
              </span>
              <span className="text-xs my-3 flex">
                <img src={logo} alt="" />
                100% data ownership
              </span>
              <span className="text-xs my-3 flex">
                <img src={logo} alt="" />
                Email reports
              </span>
            </div>
            <button className="btn btn-dark btn-sm lg:mx-0 mx-auto rounded-full">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
