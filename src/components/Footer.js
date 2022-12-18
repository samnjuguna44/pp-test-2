import React from "react";
import styled from "styled-components";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <BarStyles>
      <div className="footer">
        <section>
          <div className="row">
            <div className="col-md-2">
              <img src={require("../assets/logo.png")} alt="" height={50} />
            </div>
            <div className="col-md-2">
              <p className="footer-header">Services</p>
              <p>Events</p>
              <p>Holiday Packages</p>
              <p>Flights</p>
            </div>
            <div className="col-md-2">
              <p className="footer-header">Using Ticketsasa</p>
              <p>Buy a Ticket</p>
              <p>Buy a Package</p>
              <p>Sell Your Tickets</p>
              <p>Sell Your Packages</p>
              <p>How to Buy a Package</p>
              <p>Write a Review</p>
              <p>FAQs</p>
            </div>
            <div className="col-md-2">
              <p className="footer-header">Quicklinks</p>
              <p>Support</p>
              <p>Pricing</p>
              <p>Sitemap</p>
              <p>Privacy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="col-md-2">
              <p>Get our newsletter and stay current on deals and specials</p>
              <div className="wrap">
                <div class="search-footer">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Email Address"
                  />
                  <button type="submit" className="searchButton">
                    Subscribe
                  </button>
                </div>
              </div>
              <br></br>
              <p>Get the Ticketsasa app</p>
              <div className="wrap">
                <div className="search-down">
                  <input
                    type="text"
                    className="search-down-input"
                    placeholder="Your mobile number"
                  />
                  <button type="submit" className="searchButton">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="down-footer">
        <section>
          <p>© 2022 Ticketsasa, a Pesapal company. All rights reserved</p>
        </section>
        <section>
          <div className="footer-icons">
            <BsFacebook size={22} color="#333333" />
            <AiFillTwitterCircle size={22} color="#333333" />
            <AiFillInstagram size={22} color="#333333" />
            <AiFillYoutube size={22} color="#333333" />
            <BsPinterest size={22} color="#333333" />
          </div>
        </section>
      </div>
    </BarStyles>
  );
}

const BarStyles = styled.div`
  background-color: #eee;

  .footer {
    padding: 10px;

    .footer-header {
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      color: #000000;
    }

    .search-footer {
      width: 403px;
      height: 42px;
      position: relative;
      display: flex;
    }

    .searchTerm {
      width: 403px;
      border: 1px solid #d9d9d9;
      border-right: none;
      padding: 5px;
      height: 42px;
      border-radius: 5px;
      outline: none;
      color: #9dbfaf;

      ::placeholder {
        padding: 20px;
        color: #666666;
      }
    }

    .searchButton {
      width: 88px;
      height: 42px;
      background: #cc2127;
      border-radius: 0px 5px 5px 0px;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      color: #ffffff;
      border: none;
    }

    .search-down {
      width: 403px;
      height: 42px;
      position: relative;
      display: flex;
    }

    .search-down-input {
      width: 403px;
      height: 42px;
      border: 1px solid #d9d9d9;
      border-right: none;
      padding: 5px;
      height: 42px;
      border-radius: 5px;
      outline: none;
      color: #9dbfaf;

      ::placeholder {
        padding: 20px;
        color: #666666;
      }
    }
  }

  .down-footer {
    background-color: #bbbbbb;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      margin-left: 50px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      color: #666666;
    }

    .footer-icons {
      display: flex;
      gap: 10px;
      margin-right: 10px;
    }

    @media (max-device: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
