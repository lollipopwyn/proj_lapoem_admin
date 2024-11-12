import React from 'react';
import './NoticeManagement.css';

const NoticeManagement = () => {
  return (
    <div className="management-container">
      <h2>공지사항 목록</h2>
      {/* 검색 및 필터 부분 */}
      <div className="search-bar">
        <select>
          <option value="all">전체</option>
          {/* 다른 필터 옵션 추가 가능 */}
        </select>
        <input type="text" placeholder="검색할 키워드를 입력하세요." />
        <button>검색</button>
      </div>
      {/* 공지사항 목록 테이블 */}
      <table className="data-table">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>등록 날짜</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {/* 공지사항 데이터가 여기에 표시됨 */}
          {/* 예시 데이터 */}
          <tr>
            <td>1</td>
            <td>예시 공지사항 제목</td>
            <td>2024-11-11</td>
            <td>활성화</td>
          </tr>
        </tbody>
      </table>
      {/* 페이지네이션 자리 */}
      <div className="pagination"></div>
    </div>
  );
};

export default NoticeManagement;
