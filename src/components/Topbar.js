import React from 'react';
import styled from 'styled-components';
import Logo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";

export default function Topbar (){
    return (
        <BarStyles>
            <img src={Logo} alt="" height={50} width={110}/>
            <div className="navbar_search">
                <form>
                <input type="text" placeholder="Start your search" />
                <button className="navbar_button" type="submit">
                    <AiOutlineSearch
                    size={12}
                    color="white"
                    className="navbar_search_icon"
                    />
                </button>
                </form>
            </div>
            <div className="navbar_icons">
                <HiBars3 size={25} color="#828282" />
                <RxAvatar size={25} color="#828282" />
            </div>
        </BarStyles>
    )
}

const BarStyles = styled.div`
    padding: 20px 5%;
    background: #ffffff;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1000px){
        flex-direction: column;
    }

    // navbar
    .navbar_search {
        padding-top: 10px;
        input {
            width: 500px;
            height: 42px;
            background: #f5f5f5;
            border: 1px solid #d9d9d9;
            border-radius: 5px;

            @media (max-width: 1000px){
                width: 100%;
            }
        }
        .navbar_button {
            width: 24px;
            height: 24px;
            left: 463px;
            right: 13px;
            top: calc(50% - 24px / 2);
            background: #cc2127;
            border-radius: 5px;
            border: none;
            margin-left: -50px;
        }
        .navbar_search_icon {
            left: 10px;
        }
        ::placeholder {
            left: 4.4%;
            right: 37.8%;
            top: 35.71%;
            bottom: 35.71%;
            font-family: "Avenir";
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            display: flex;
            align-items: center;
            color: #333333;
        }
    }

    .navbar_icons {
        padding-top: 10px;
    }
`