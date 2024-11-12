import React from 'react';

const PostManagement = () => {
  return (
    <div className="management-container">
      <h2>게시글 목록</h2>
      <div className="search-bar">
        <select>
          <option value="all">전체</option>
          {/* 다른 필터 옵션 추가 가능 */}
        </select>
        <input
          type="text"
          placeholder="검색할 제목 또는 작성자를 입력하세요."
        />
        <button>검색</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록 날짜</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>{/* 게시글 데이터가 여기에 표시됨 */}</tbody>
      </table>
      <div className="pagination"></div>
    </div>
  );
};

export default PostManagement;
