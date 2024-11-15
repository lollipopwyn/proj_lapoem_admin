import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/adminLogin/AdminLogin';
import Breadcrumbs from './components/Breadcrumbs';
import NoticeManagement from './components/CommunityAdmin/NoticeManagement';
import PostManagement from './components/CommunityAdmin/PostManagement';
import CommentManagement from './components/CommunityAdmin/CommentManagement';
import BooksManageing from './components/adminBooks/BooksManageing';
import BooksEmailing from './components/adminBooks/BooksEmailing';

const App = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <div className="App">
          <Dashboard />
          <Breadcrumbs />
          <Routes>
            <Route path="/community/notice" element={<NoticeManagement />} />
            <Route path="/community/posts" element={<PostManagement />} />
            <Route path="/community/comments" element={<CommentManagement />} />
            <Route path="/books/managing" element={<BooksManageing />} />
            <Route path="/books/emailing" element={<BooksEmailing />} />
          </Routes>
        </div>
      ) : (
        <AdminLogin />
      )}
    </BrowserRouter>
  );
};

export default App;
