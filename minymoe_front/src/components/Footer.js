// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <span>이용약관</span>
                <span>개인정보처리방침</span>
                <span>사업자정보확인</span>
            </div>
            <div className="footer-info">
                <p>상호: 마이니모에 대표: 박채원 | 개인정보보호책임자: 박채원 | 전화: 010-6304-9418</p>
                <p>주소: 제주시 조천읍 신북로 456 | 사업자등록번호: 1234</p>
            </div>
        </footer>
    );
}

export default Footer;
