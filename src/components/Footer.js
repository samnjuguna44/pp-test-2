import React from "react";
import styled from "styled-components";

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
              <div class="wrap">
                <div class="search-footer">
                   <input type="text" className="searchTerm" placeholder="Email Address"/>
                   <button type="submit" className="searchButton">
                     Subscribe
                  </button>
                </div>
              </div>
              <br></br>
              <p>Get the Ticketsasa app</p>
            </div>

          </div>
        </section>
      </div>
      <div className="down">
        <section>© 2022 Ticketsasa, a Pesapal company. All rights</section>
        <section>fb</section>
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
        color: #9DBFAF;
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
  }
  .down {
    background-color: #d9d9d9;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-device: 1000px) {
      flex-direction: column;
    }
  }
`;
