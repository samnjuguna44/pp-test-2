/* eslint-disable react/style-prop-object */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import {
  AiOutlineHeart,
  AiOutlineLine,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {
  RiFacebookBoxFill,
  RiParkingBoxFill,
  RiRestaurant2Fill,
} from "react-icons/ri";
import {
  MdRoomService,
  MdOutlineLocalLaundryService,
  MdFreeBreakfast,
  MdOutlinePool,
  MdBusinessCenter,
} from "react-icons/md";
import {
  FaSpa,
  FaWifi,
  FaSnowflake,
  FaGlassMartiniAlt,
  FaGreaterThan,
} from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { CgGym } from "react-icons/cg";
import { BsCheckLg } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

export default function Ammenities() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpenDate(false);
      setOpenOptions(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpenDate(false);
      setOpenOptions(false);
    }
  };

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <BarStyles>
      <div className="ammenity">
        <section>
          <h2>Crowne Plaza Nairobi Airport</h2>
          <p className="ammenity-location">Embakasi</p>
          <div className="ammenity-icons">
            <p>
              <BiPencil />
              <small>Review</small>
            </p>
            <p>
              <AiOutlineHeart />
              <small>Save</small>
            </p>
            <p>
              <small>Share</small>
              <RiFacebookBoxFill color="#4267b2" />
              <AiFillTwitterSquare color="#1da1f2" />
            </p>
          </div>
        </section>
        <section>
          <h3>$147</h3>
          <div className="ammenity-small">
            <span className="ammenity-small-span">per night</span>
            <button className="ammenity-small-button"><a href="#packages">View Rooms</a></button>
          </div>
        </section>
      </div>

      <div className="ammenity_shortcuts">
        <a href="#photos"> Photos</a>
        <a href="#ammenities"> Ammenities</a>
        <a href="#packages"> Packages</a>
        <a href="#description"> Description</a>
        <a href="#features"> Features</a>
        <a href="#location"> Location</a>
        <a href="#fineprint"> Fine Print</a>
      </div>

      <div className="slider" id="photos">
        <Slider />
      </div>

      <div className="ammenities" id="ammenities">
        <h2>Ammenities</h2>
        <AiOutlineLine size={30} color="#cc2127" className="line" />
        <div className="row">
          <div className=" list col-md-3">
            <p>
              <MdRoomService size={20} color="#e57819" />
              Room Service
            </p>
            <p>
              <HiBuildingOffice size={20} color="#e57819" />
              24/7 Desk
            </p>
            <p>
              <FaGlassMartiniAlt size={20} color="#e57819" />
              Bar
            </p>
            <p>
              <MdBusinessCenter size={20} color="#ff8c00" />
              Business Services
            </p>
          </div>
          <div className="list col-md-3">
            <p>
              <FaSpa size={20} color="#e57819" />
              Spa
            </p>
            <p>
              <CgGym size={20} color="#e57819" />
              Gym
            </p>
            <p>
              <MdOutlinePool size={20} color="#e57819" />
              Pool
            </p>
            <p>
              <RiRestaurant2Fill size={20} color="#ff8c00" />
              Restaurant
            </p>
          </div>
          <div className="list col-md-3">
            <p>
              <MdOutlineLocalLaundryService size={20} color="#e57819" />
              Laundry
            </p>
            <p>
              <FaWifi size={20} color="#e57819" />
              Wifi
            </p>
            <p>
              <FaSnowflake size={20} color="#e57819" />
              Air Condition
            </p>
          </div>
          <div className=" list col-md-3">
            <p>
              <MdFreeBreakfast size={20} color="#e57819" />
              Breakfast
            </p>
            <p>
              <BsCheckLg size={20} color="#e57819" />
              Housekeeping
            </p>
            <p>
              <RiParkingBoxFill size={20} color="#ff8c00" />
              Parking included
            </p>
          </div>
        </div>
        <p className="ammenities-see">
          See All <FaGreaterThan size={10} />
        </p>
      </div>

      <div className="packages" id="packages">
        <h2>Available Packages</h2>
        <div className="package-components">
          <div className="row">
            <div className="date-components col-md-6">
              <p>Check-in to Check-out:</p>
              <small>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</small>
                <button
                  onClick={() => setOpenDate(!openDate)}
                  className="date-button"
                >
                  Change
                </button>
                <div ref={refOne}>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      onTouchStart={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      ranges={date}
                      direction="horizontal"
                      className="date"
                    />
                  )}
                </div>
            </div>
            <div className="room-components col-md-6">
              <p>Guests:</p>
              <small>{`${options.adult} adult . ${options.children} children .${options.room} room`}</small>
                <button
                  onClick={() => setOpenOptions(!openOptions)}
                  className="room-button"
                >
                  Change
                </button>
                <div ref={refOne}>
                  {openOptions && (
                    <div className="options">
                      <div className="option_item">
                        <span className="option_span">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="option_item">
                        <span className="option_span">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="option_item">
                        <span className="option_span">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>

        <div className="cards row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839637-3x2"
                alt=""
              />
              <h2>Standard Room</h2>
              <div className="info">
                <section>
                  <div className="info-section">
                    <input
                      type="radio"
                      id="bedSelection1"
                      name="bed"
                      value="bed1"
                    />
                    <label for="bedSelection1">Single Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>No extra charge</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection2"
                      name="bed"
                      value="bed2"
                    />
                    <label for="bedSelection2">Double Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>+ KES 500</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection3"
                      name="bed"
                      value="bed3"
                    />
                    <label for="bedSelection3">Triple Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>+ KES 1000</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <p className="info-price">$147</p>
                    <span className="info-span">per night</span>
                  </div>
                </section>
                <section>
                  <button className="info-button">Book Now</button>
                </section>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839637-3x2"
                alt=""
              />
              <h2>Deluxe Room</h2>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection4"
                      name="bed"
                      value="bed4"
                    />
                    <label for="bedSelection4">Single Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>No extra charge</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection5"
                      name="bed"
                      value="bed4"
                    />
                    <label for="bedSelection5">Double Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>+ KES 500</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection6"
                      name="bed"
                      value="bed4"
                    />
                    <label for="bedSelection6">Triple Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>+ KES 1000</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <p className="info-price">$147</p>
                    <span className="info-span">per night</span>
                  </div>
                </section>
                <section>
                  <button className="info-button">Book Now</button>
                </section>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839637-3x2"
                alt=""
              />
              <h2>Executive Room</h2>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection7"
                      name="bed"
                      value="bed4"
                    />
                    <label for="bedSelection7">Single Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>No extra charge</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection8"
                      name="bed"
                      value="bed4"
                    />
                    <label for="bedSelection8">Double Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>+ KES 500</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection9"
                      name="bed"
                      value="bed4"
                    />
                    <label for="bedSelection9">Triple Bed</label>
                    <div>
                      <small>
                        Price between Tue Jun 07 2022 and Sat Dec 2022
                      </small>
                    </div>
                  </div>
                </section>
                <section>
                  <b>+ KES 1000</b>
                  <p>per night</p>
                </section>
              </div>
              <div className="info">
                <section>
                  <div>
                    <p className="info-price">$147</p>
                    <span className="info-span">per night</span>
                  </div>
                </section>
                <section>
                  <button className="info-button">Book Now</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description" id="description">
        <h2>Description</h2>
        <AiOutlineLine size={30} color="#cc2127" className="line" />
        <p className="paragraph_description">
          Crowne Plaza Nairobi Airport is an upscale full-service hotel
          conveniently located a 3-minute drive from Jomo Kenyatta International
          Airport terminals.
        </p>
        <p className="paragraph_description2">
          "Hotel is Fully Covid-19 Health Precautions Compliant"
        </p>
        <p className="paragraph_description3">"Tembea Kenya"</p>
      </div>

      <div className="features" id="features">
        <h2>Features</h2>
        <AiOutlineLine size={30} color="#cc2127" className="line" />
        <p className="features_paragraph">
          This hotel features 144 soundproof rooms all furnished with black-out
          curtains, iron and ironing board, smart TV, complimentary tea/coffee
          facilities and mineral water, and premium bedding to offer a
          comfortable sleep experience. Our rooms are designed to make sure that
          you are well-rested, energized, and ready for the day.
        </p>
        <p className="features_paragraph">
          We’re ready to refuel when and where you are. At Kitchen 9 Restaurant,
          you can have a buffet breakfast or lunch, a late-night snack at Aroma;
          open 24 hours a day, or a drink at Velocity Bar. Our Rooftop Pool and
          Bar is a great place to unwind and soak in savannah views, or you can
          opt for easy in-room dining.
        </p>
      </div>

      <div className="location" id="location">
        <h2>Location</h2>
        <AiOutlineLine size={30} color="#cc2127" className="line" />
        <div class="embed-responsive embed-responsive-21by9">
          <iframe
            title="Crowne Plaza Nairobi Airport"
            class="embed-responsive-item"
            src="https://maps.google.com/maps?q=crowne%20plaza%20nairobi%20airport&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="fine-print" id="fineprint">
        <h2>Fine Print</h2>
        <AiOutlineLine size={30} color="#cc2127" className="line" />
        <p className="fineprint_paragraph">
          This package is valid till 4th January 2023 and it includes:
        </p>
        <ul className="fineprint_list">
          <li>Per night stay in a superior room</li>
          <li>Meals on all-inclusive basis</li>
          <li>Any applicable government taxes</li>
          <li>Festive rates apply</li>
        </ul>
        <p className="fineprint_paragraph">Package excludes:</p>
        <ul className="fineprint_list">
          <li>Travel insurance</li>
          <li>Any other items not mentioned above</li>
        </ul>
        <p className="fineprint_paragraph">
          Give us a call on +254-705-804-226 / +254-721-876-190 prior to
          purchase if further information is needed
        </p>
        <p className="fineprint_paragraph">
          Reservations are subject to availability. Cancellation/re-scheduling
          policy applies
        </p>
      </div>
    </BarStyles>
  );
}

const BarStyles = styled.div`
  padding: 20px 5%;
  overflow-x: hidden;

  .ammenity {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .ammenity-icons {
      display: flex;
      gap: 28px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #333333;
    }

    p {
      display: flex;
      gap: 10px;
    }

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      color: #000000;
    }

    h3 {
      font-weight: 700;
      font-size: 24px;
      color: #cc2127;
    }

    .ammenity-small {
      display: flex;
      flex-direction: column;

      .ammenity-small-span {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #666666;
      }

      .ammenity-small-button {
        border: 2px solid #e57819;
        border-radius: 5px;
        background: #ffffff;
        color: #e57819;
        width: 104px;
        height: 50px;
        outline: none;

        a {
          text-decoration: none;
          color: #e57819;
        }
      }
    }
  }

  .ammenities {
    margin-top: 20px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      color: #000000;
    }

    .ammenities-see {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #cc2127;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
    }
  }

  .ammenity_shortcuts {
    padding: 10px 0;
    border-top: 2px #d9d9d9 solid;
    border-bottom: 2px #d9d9d9 solid;

    a {
      text-decoration: none;
      color: inherit;
      margin-right: 10px;
    }

    .ammenity-location {
      font-weight: 500;
      font-size: 21px;
      color: #666666;
    }
  }

  .cards {
    margin-top: 20px;
  }

  .card {
    border: 1px #d9d9d9 solid;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #e57819;
      margin-top: 10px;
      margin-left: 10px;
    }

    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      section {
        margin-left: 10px;
      }

      label {
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #000000;
        margin-left: 5px
      }

      b {
        margin-right: 10px;
        color: #000000;
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #666666;
      }

      small {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #666666;
      }

      .info-price {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #cc2127;
        margin-top: 15px;
      }

      .info-span {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #666666;
      }

      .info-button {
        background: #72a235;
        border-radius: 5px;
        width: 129px;
        height: 44px;
        color: #ffffff;
        border: none;
        margin-right: 10px;
        margin-top: 15px;
        outline: none;
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 5px;

    @media (max-width: 1000px){
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    p {
      display: flex;
      gap: 5px;
      margin-left: 10px;
    }
  }

  .packages {
    margin-top: 40px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
    }

    .date {
      z-index: 999;
      position: absolute;
      left: -40px;

      @media (max-width: 1000px){
        width: 420px;
        left: -10px;
        cursor: pointer;
    }


    }

    .options {
      z-index: 100;
      position: absolute;
      left: 20px;
      background-color: #ffff;
      color: #000000;
      border-radius: 5px;
      -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);


      .option_item {
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin: 10px;
}

     .optionCounter {
       display: flex;
       align-items: center;
       gap: 10px;
       font-size: 12px;
       color: #000000;
     }

     .optionCounterButton {
       width: 30px;
       height: 30px;
       border: 1px solid #e57819;
       color: #000000;
       cursor: pointer;
       background: transparent;
       outline: none;
     }

     .optionCounterButton:disabled {
       cursor: not-allowed;
     }
    }

    .package-components {
      padding: 10px;
      border: 1px #d9d9d9 solid;
      border-radius: 5px;
    }

    .date-components {
      margin-top: 10px;
      display: flex
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      justify-content: space-between;

      small {
        color: #e57819;
      }

      .date-button {
        border: 2px solid #e57819;
        border-radius: 5px;
        background: #ffffff;
        color: #e57819;
        width: 125px;
        height: 42px;
        margin-left: 100px;
        position: relative;
        top: -20px;
        outline: none;

        @media (max-width: 500px){
            margin-left: 50px 
        }
      }
    }

    .room-components {
      margin-top: 10px;
      display: flex
      font-style: normal;
      font-weight: 700;
      font-size: 14px;

      small {
        color: #e57819;
      }

      .room-button {
        border: 2px solid #e57819;
        border-radius: 5px;
        background: #ffffff;
        color: #e57819;
        width: 125px;
        height: 42px;
        margin-left: 100px;
        position: relative;
        top: -20px;
        outline: none;

        @media (max-width: 500px){
            margin-left: 50px 
        }


      }
    }
  }

  .description {
    margin-top: 20px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      color: #000000;
    }

    .paragraph_description {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      color: #333333;
    }

    .paragraph_description2 {
      font-weight: 500;
      font-size: 18px;
      color: #333333;
      margin-top: 20px;
    }

    .paragraph_description3 {
      font-weight: 600;
      font-size: 18px;
      color: #333333;
      margin-top: 20px;
    }
  }

  .features {
    margin-top: 50px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      color: #000000;
    }

    .features_paragraph {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      color: #333333;
    }
  }

  .location {
    margin-top: 50px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      color: #000000;
    }
  }

  .fine-print {
    margin-top: 50px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      color: #000000;
    }

    .fineprint_paragraph, .fineprint_list {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      color: #333333;
    }
  }
`;
