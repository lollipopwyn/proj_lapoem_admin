import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css';
// import Header from './Header';

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="Dashboard_wrapper">
      {/* <Header /> */}
      <div className="logo">LOGO</div>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          홈
        </Link>
        <Link to="#" className="disabled">
          회원 관리
        </Link>
        <Link to="#" className="disabled">
          도서 관리
        </Link>
        <Link to="#" className="disabled">
          콘텐츠 관리
        </Link>
        <div className="community-section">
          <Link
            to="/community/notice"
            className={location.pathname.includes('/community') ? 'active' : ''}
          >
            커뮤니티 관리
          </Link>
          <div className="community-submenu">
            <Link
              to="/community/notice"
              className={
                location.pathname === '/community/notice' ? 'active' : ''
              }
            >
              공지사항 관리
            </Link>
            <Link
              to="/community/posts"
              className={
                location.pathname === '/community/posts' ? 'active' : ''
              }
            >
              게시글 관리
            </Link>
            <Link
              to="/community/comments"
              className={
                location.pathname === '/community/comments' ? 'active' : ''
              }
            >
              댓글 관리
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
