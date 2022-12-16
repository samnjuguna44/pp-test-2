import React from 'react';
import styled from 'styled-components';
import { BiCalendar } from "react-icons/bi";
import { GiIsland, GiCommercialAirplane } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";

export default function Navbar (){
    return (
        <BarStyles>
            <button className="filter_button">
                <BiCalendar size={20} /> Events
            </button>
            <button className="filter_button">
                <GiIsland size={20} /> Holidays
            </button>
            <button className="filter_button">
                <GiCommercialAirplane size={20} /> Flights
            </button>
            <button className="hotels_button">
                <RiHotelLine size={20} /> Hotels
            </button>
            <button className="filter_button">
                <SlNotebook size={20} /> Blog
            </button>
        </BarStyles>
    )
}

const BarStyles = styled.div`
    padding-top: 10px;
    padding-bottom:0;
    padding-left: 20%;
    padding-right: 20%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 10px #d9d9d9 solid;

    .filter_button {
        border: none;
        padding: 10px;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #666666;
        background-color: #f5f5f5;
    }
    .hotels_button {
        border: none;
        padding: 10px;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #666666;
        background-color: #f5f5f5;
        background: #d9d9d9;
        border-radius: 5px 5px 0px 0px;
    }
`