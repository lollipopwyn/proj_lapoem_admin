import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathMap = {
    '/community/notice': '커뮤니티 관리 > 공지사항 관리',
    '/community/posts': '커뮤니티 관리 > 게시글 관리',
    '/community/comments': '커뮤니티 관리 > 댓글 관리',
  };

  return <div className="breadcrumbs">{pathMap[location.pathname]}</div>;
};

export default Breadcrumbs;
