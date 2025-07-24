import React, { useState } from 'react';
import './NoticeBoard.css';

const noticeData = [
    {
        id: 1,
        title: '마이니모에입니다',
        writer: '관리자',
        date: '2025.07.17 13:28',
    },
    {
        id: 2,
        title: '마이니모에 정식오픈 안내',
        writer: '관리자',
        date: '2024.12.06 17:30',
    },
    {
        id: 3,
        title: '마포점 영업시간 변경안내 (11/6부터)',
        writer: '관리자',
        date: '2023.11.02 12:08',
    },
];

function NoticeBoard() {
    const [keyword, setKeyword] = useState('');

    const filtered = noticeData.filter((notice) =>
        notice.title.includes(keyword)
    );

    return (
        <div className="notice-wrapper">
            <h2>Notice</h2>

            {/* ✅ 데스크탑용 테이블 */}
            <table className="notice-table">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>등록일</th>
                </tr>
                </thead>
                <tbody>
                {filtered.map((notice) => (
                    <tr key={notice.id}>
                        <td data-label="번호">공지</td>
                        <td data-label="제목">{notice.title}</td>
                        <td data-label="글쓴이">{notice.writer}</td>
                        <td data-label="등록일">{notice.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* ✅ 모바일 카드 UI */}
            <div className="notice-cards">
                {filtered.map((notice) => (
                    <div className="notice-card" key={notice.id}>
                        <p className="notice-title">[공지] {notice.title}</p>
                        <p className="notice-meta">{notice.writer} / {notice.date}</p>
                    </div>
                ))}
            </div>

            <div className="notice-search">
                <input
                    type="text"
                    placeholder="검색"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button>검색</button>
            </div>
        </div>
    );
}

export default NoticeBoard;
