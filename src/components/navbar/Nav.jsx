import React from 'react';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <div className='nav d-flex justify-content-around align-items-center shadow'>
      <div className='d-flex align-items-center p-3 '>
        <h2 className='mr-4'>🗺️ATG.WORLD</h2>
      </div>
      <div className='d-flex align-items-center col-md-4'>
        <input type='text' placeholder='Search for your favorite groups in ATG' className='form-control rounded' />
      </div>
      <div className='d-flex align-items-center'>
        <h5 className='ml-4'>Create account. <span style={{ color: 'blue' }}>It's free</span></h5>
      </div>
    </div>
  );
}

export default Nav;
