import React from 'react';
import '../components/common.css';
import logoutIcon from './assets/images/icon_logout.png';

const Header = () => {
  return (
    <div className="header">
      <h2 className="header_title">La Poem Admin System</h2>
      <button className="header_logout">
        <img src={logoutIcon} alt="Logout" className="logout_icon" />
      </button>
    </div>
  );
};

export default Header;
