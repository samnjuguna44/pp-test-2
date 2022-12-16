import React from 'react';
import styled from 'styled-components';


export default function Footer (){
    return (
        <BarStyles>
            <div className='footer'>
                <section>
                    <div className='row'>
                        <div className='col-md-2'>
                            <img src={require('../assets/logo.png')} alt="" height={50}/>
                        </div>
                        <div className='col-md-2'>
                            <p>Services</p>
                            <p>Services</p>
                            <p>Services</p>
                            <p>Services</p>
                        </div>
                        <div className='col-md-2'>
                            <p>Services</p>
                            <p>Services</p>
                            <p>Services</p>
                            <p>Services</p>
                        </div>
                        <div className='col-md-2'>
                            <p>Services</p>
                            <p>Services</p>
                            <p>Services</p>
                            <p>Services</p>
                        </div>
                        <div className='col-md-2'>
                            Get our newsletter and stay current on deals and specials
                            <input type='text' placeholder="email"/>
                        </div>
                    </div>
                </section>
            </div>
            <div className='down'>
                <section>
                    © 2022 Ticketsasa, a Pesapal company. All rights 
                </section>
                <section>
                    fb
                </section>
            </div>
        </BarStyles>
    )
}

const BarStyles = styled.div`
    background-color: #eee;

    .footer {
        padding: 10px;
    }
    .down {
        background-color: #d9d9d9;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media (max-device: 1000px){
            flex-direction: column;
        }
    }
`