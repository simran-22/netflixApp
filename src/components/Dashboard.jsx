// import React from "react";
import "./style.css";
import { TfiSearch } from "react-icons/tfi";
import { ImHome } from "react-icons/im";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LuClapperboard } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import NewReleased from "./NewReleased";
import { Link } from "react-router-dom";
Link;
// import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <>
        {/* <Header /> */}

        <div className="container-fluid interface-bg">
          <div className="col-sm-12">
            <div className="iconswraper">
              <div className="searchIcon">
                <TfiSearch />
              </div>
              <div className="searchIcon">
                <Link to={"/"}>
                  {" "}
                  <ImHome />
                </Link>
              </div>
              <div className="searchIcon">
                <Link to={"/tvscreen"}>
                  {" "}
                  <PiTelevisionSimpleBold />{" "}
                </Link>
              </div>
              <div className="searchIcon">
                <LuClapperboard />
              </div>
              <div className="searchIcon">
                <FaPlus />
              </div>
              <div className="searchIcon">
                <SlCalender />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="movieText col-lg-4 text-white">
              <h1>
                <span>N</span>FILM
              </h1>
              <div className="movieTitle text-end">
                <h2>Mon Laferte, te amo</h2>
              </div>
              <div className="movieDesc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio quas, eveniet voluptatibus harum praesentium
                  voluptas maiores aperiam nihil officiis ea expedita est! Harum
                  labore nisi cum quos suscipit impedit tempore?
                </p>
              </div>
            </div>
          </div>
        </div>

        <NewReleased />
      </>
    </>
  );
};

export default Dashboard;
