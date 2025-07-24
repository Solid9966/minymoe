// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ onNavigate }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) setMenuOpen(false); // 데스크탑이면 메뉴 닫기
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // body 스크롤 잠금 (모바일 메뉴 열릴 때)
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen]);

    const handleNavigate = (target) => {
        onNavigate(target);
        setMenuOpen(false); // 메뉴 닫기
    };

    return (
        <>
            <nav className="navbar">
                {isMobile && (
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        ☰
                    </button>
                )}
                <div className="nav-logo">miny moe.</div>

                {!isMobile && (
                    <ul className="nav-menu desktop-menu">
                        <li onClick={() => handleNavigate('home')}>HOME</li>
                        <li onClick={() => handleNavigate('dessert')}>DESSERT</li>
                        <li>
                            <a
                                href="https://www.instagram.com/miny_moe_jeju/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SNS
                            </a>
                        </li>
                        <li onClick={() => handleNavigate('notice')}>NOTICE</li>
                    </ul>
                )}
            </nav>

            {/* ✅ 모바일 메뉴와 오버레이는 menuOpen일 때만 렌더링 */}
            {isMobile && menuOpen && (
                <>
                    <div className="mobile-menu">
                        <ul className="nav-menu">
                            <li onClick={() => handleNavigate('home')}>HOME</li>
                            <li onClick={() => handleNavigate('dessert')}>DESSERT</li>
                            <li>
                                <a
                                    href="https://www.instagram.com/miny_moe_jeju/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SNS
                                </a>
                            </li>
                            <li onClick={() => handleNavigate('notice')}>NOTICE</li>
                        </ul>
                    </div>
                    <div
                        className="menu-overlay"
                        onClick={() => setMenuOpen(false)}
                    />
                </>
            )}
        </>
    );
}

export default Navbar;
