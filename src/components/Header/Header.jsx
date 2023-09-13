import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className='container-fluid header'>
      <div className='row'>
        <div className='col-md-6'>
          <h1>Computer Engineering</h1>
          <p>12345 engineer follows</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
