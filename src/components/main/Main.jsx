import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from '../posts/Posts';
import Users from '../users/users';

function Main() {
  return (
    <div className="container">
      <div className="row d-flex">
       
          <Posts />
       
          <Users />

      </div>
    </div>
  );
}

export default Main;
