import React from "react";
import styled from "styled-components";
import {
  AiOutlineHeart,
  AiOutlineLine,
  AiFillTwitterSquare,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
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
import { BsCheckLg, BsFacebook, BsPinterest } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

export default function Ammenities() {
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
            <button className="ammenity-small-button">View Rooms</button>
          </div>
        </section>
      </div>

      <div className="ammenity_shortcuts">
        <a href="h"> Photos</a>
        <a href="h"> Ammenities</a>
        <a href="h"> Packages</a>
        <a href="h"> Description</a>
        <a href="h"> Features</a>
        <a href="h"> Location</a>
        <a href="h"> Fine Print</a>
      </div>

      <div>{/* slider */}</div>
      <div className="ammenities">
        <h2>Ammenities</h2>
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
      </div>

      <div className="packages">
        <h2>Available Packages</h2>
        <div className="date-picker">
          <div className="row">
            <div className="col-md-6">
              Check-in to Check-out:12/16/2022 to 12/16/2022{" "}
              <button>change</button>
            </div>
            <div className="col-md-6">
              Guests:1 adult . 0 children .1 room <button>change</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839637-3x2"
                alt=""
              />
              <h2>Standard Room</h2>
              <div className="info">
                <section>
                  <div>
                    <input
                      type="radio"
                      id="bedSelection1"
                      name="bed"
                      value="bed1"
                    />
                    <label for="bedSelection1">Single Bed</label>
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
                    <p>$147</p>
                    <span>per night</span>
                  </div>
                </section>
                <section>
                  <button>Book Now</button>
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
                    <p>$147</p>
                    <span>per night</span>
                  </div>
                </section>
                <section>
                  <button>Book Now</button>
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
                    <p>$147</p>
                    <span>per night</span>
                  </div>
                </section>
                <section>
                  <button>Book Now</button>
                </section>
              </div>
            </div>
          </div>
        </div>
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
      }
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

  .date-picker {
    padding: 10px;
    border: 1px #d9d9d9 solid;
    border-radius: 5px;
  }

  .card {
    border: 1px #d9d9d9 solid;

    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 5px;

    p {
      display: flex;
      gap: 5px;
      margin-left: 10px;
    }
  }
`;
