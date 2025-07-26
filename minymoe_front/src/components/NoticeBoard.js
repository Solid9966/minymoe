// src/components/NoticeBoard.js
import React, { useState, useEffect } from 'react';
import './NoticeBoard.css';
import { fetchNotices, postNotice, deleteNotice } from '../api/notice'; // ✅ 공지사항 조회, 등록 API 불러오기

function NoticeBoard() {
    // ✅ 공지사항 목록 상태
    const [notices, setNotices] = useState([]);

    // ✅ 검색어 상태
    const [keyword, setKeyword] = useState('');

    // ✅ 글쓰기 폼 상태 (제목, 작성자)
    const [form, setForm] = useState({ title: '', writer: '' });

    // ✅ 컴포넌트가 처음 마운트될 때 공지사항 목록 로드
    useEffect(() => {
        const load = async () => {
            const data = await fetchNotices();
            console.log("📦 백엔드 응답 데이터:", data); // ✅ 콘솔 확인용
            setNotices(data);
        };
        load();
    }, []);


    // ✅ 백엔드에서 전체 공지사항 불러오기 함수
    const loadNotices = async () => {
        const data = await fetchNotices();
        setNotices(data);
    };

    // ✅ 글쓰기 폼 입력값 변경 핸들러
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // ✅ 글쓰기 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault(); // 새로고침 방지
        const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
        try {
            await postNotice({ ...form, date }); // 글 등록
            await loadNotices(); // 목록 새로고침
            setForm({ title: '', writer: '' }); // 폼 초기화
        } catch (err) {
            alert("등록 실패");
        }
    };

    // 삭제 해들러
    const handleDelete = async (id) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            await deleteNotice(id);
            await loadNotices();
        }
    };



    // ✅ 제목 기준으로 필터링
    const filtered = keyword
        ? notices.filter((notice) => notice.title && notice.title.includes(keyword))
        : notices;


    return (
        <div className="notice-wrapper">
            <h2>Notice</h2>

            {/* ✅ 데스크탑용 공지사항 테이블 */}
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
                {filtered.map((notice, index) => (
                    <tr key={notice.id}>
                        <td data-label="번호">{notices.length - index}</td>
                        <td data-label="제목">{notice.title}</td>
                        <td data-label="글쓴이">{notice.writer}</td>
                        <td data-label="등록일">{notice.date}</td>
                        <td>
                            {/* 삭제 UI 추가 */}
                            <button onClick={() => handleDelete(notice.id)}>삭제</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* ✅ 모바일 카드형 UI (반응형) */}
            <div className="notice-cards">
                {filtered.map((notice) => (
                    <div className="notice-card" key={notice.id}>
                        <p className="notice-title">[공지] {notice.title}</p>
                        <p className="notice-meta">{notice.writer} / {notice.date}</p>
                        <button onClick={() => handleDelete(notice.id)}>삭제</button>
                    </div>
                ))}
            </div>

            {/* ✅ 검색창 */}
            <div className="notice-search">
                <input
                    type="text"
                    placeholder="검색"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button>검색</button>
            </div>

            {/* ✅ 글쓰기 입력 폼 */}
            <form onSubmit={handleSubmit} className="notice-form">
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="제목"
                    required
                />
                <input
                    type="text"
                    name="writer"
                    value={form.writer}
                    onChange={handleChange}
                    placeholder="작성자"
                    required
                />
                <button type="submit">글 등록</button>
            </form>
        </div>
    );
}

export default NoticeBoard;
