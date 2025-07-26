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
