import axios from 'axios';

const API_URL = 'http://localhost:8080/api/notice';

export const fetchNotices = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('📛 공지사항 가져오기 실패:', error);
        return [];
    }
};

export const postNotice = async (newNotice) => {
    try {
        const response = await axios.post(API_URL, newNotice);
        return response.data;
    } catch (error) {
        console.error('📛 글 등록 실패:', error);
        throw error;
    }
};

// 삭제 요청 함수
export const deleteNotice = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (err) {
        console.error("❌ 삭제 실패:", err);
        throw err;
    }
};
