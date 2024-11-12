import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import NoticeManagement from './NoticeManagement';
import PostManagement from './PostManagement';
import CommentManagement from './CommentManagement';
import './CommunityAdmin.css';

const CommunityAdmin = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Breadcrumbs />
        <Routes>
          <Route path="/community/notice" element={<NoticeManagement />} />
          <Route path="/community/posts" element={<PostManagement />} />
          <Route path="/community/comments" element={<CommentManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default CommunityAdmin;
