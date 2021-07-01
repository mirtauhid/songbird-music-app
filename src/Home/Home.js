/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
import React from 'react';
import { RecoilRoot } from 'recoil';
import logo from '.././images/Assets/White bird.png';
import Room from '../js/components/Room';
import './Home.css';

const Home = () => {
    
    return (
        <div className="main-container">
            <div className="navBar">
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{height: '60px', width: '60px'}} >
                    <img style={{maxWidth: '100%', maxHeight: '100%'}} src={logo} alt="White Bird" />
                    </div>
                    <h3 id="logoText" >SONGBIRD</h3>
                </div>
                <button>Contact Us</button>
            </div>

            <div className="hero">
                <div>
                    <div className="text-block-5">STUDY, WORKOUT AND CHILL TOGETHER</div>
                    <p>
                        MEET PEOPLE IN COMMUNITIES WHICH COMBINE AESTHETIC ART AND MUSIC FOR YOUR
                        FAVORITE ACTIVITIES.
                    </p>
                </div>

                <div className="buttonDiv">
                    <button>
                        <i style={{ background: 'transparent' }} className="fab fa-apple" /> App
                        Store
                    </button>
                    <button>
                        <i style={{ background: 'transparent' }} className="fab fa-google-play" />{' '}
                        Google Play
                    </button>
                </div>
            </div>

            <div className="main" />
            <RecoilRoot>
            <Room  style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain'}} />
        </RecoilRoot>
            
            <div className="footer">
                <div className="footerPart1">
                    <a href="/">Terms</a>
                    <a href="/">Privacy</a>
                </div>
                <div className="footerPart2">
                    <a href="/">
                        <i className="far fa-bell" />
                    </a>
                    <a href="/">
                        <i className="fas fa-music" />
                    </a>
                    <a href="/">
                        <i className="fab fa-instagram-square" />
                    </a>
                    <a href="/">
                        <i className="fab fa-twitter" />
                    </a>
                </div>
                <div style={{ width: '130px' }} />
            </div>
        </div>
    );
};

export default Home;
