import React from 'react';
import styled from 'styled-components';
import { FaGreaterThan } from "react-icons/fa";

export default function Breadcrumbs() {
    return (
      <BarStyles>
        <div className="crumbs">
          <span className="crumb_paragraph">Ticket sasa <FaGreaterThan className="crumb_icon" color="#cc2127" /></span>
          <span className="crumb_paragraph">Hotels <FaGreaterThan className="crumb_icon" color="#cc2127" /></span>
          <span className="crumb_paragraph">Nairobi <FaGreaterThan className="crumb_icon" color="#cc2127" /></span>
          <span className="crumb_text">Luxurious Retreat at Crowne Plaza</span>
        </div>
        <div className="crumbs_line"></div>
      </BarStyles>
    );
  }

const BarStyles = styled.div`
    .crumbs {
        padding: 10px 0;
        border-bottom: 2px #d9d9d9 solid;
        margin: 0 5%;
    }
    
    .crumb_paragraph {
        width: 96px;
        height: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        margin-right: 10px;
    }
    
    .crumb_icon {
        width: 8.49px;
        height: 4.95px;
        transform: rotate(-360deg);
    }
    
    .crumb_text {
        font-weight: 500;
        font-size: 14px;
        color: #666666;
    }
`