import React from 'react';
// import Navbar from '../components/Navbar';
import ImageGrid from '../components/ImageGrid';
import './Home.css';

function Home() {
    return (
        <div className="home-wrapper">
            <ImageGrid />

            <div className="intro-text">
                <p>마이니모에입니다<br />치즈케이크를 구매해주시는 분들께 아메리카노 한잔을 같이 드려요!</p>
                <h2>Come with us</h2>
                <p>어서오세요!</p>
            </div>
        </div>
    );
}

export default Home;
