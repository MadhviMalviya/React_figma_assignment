import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FlexLine() {
  return (
    <div className="container shadow">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between align-items-center ">
          <div className="d-flex flex-wrap gap-3">
            <h4>All posts</h4>
            <h4 className="d-none d-md-block">Article</h4>
            <h4 className="d-none d-md-block">Job</h4>
            <h4 className="d-none d-md-block">Event</h4>
            <h4 className="d-none d-md-block">Education</h4>
          </div>
          <div className="d-flex gap-3">
            <select className="form-select d-none d-md-block">
              <option>Write a post</option>
            </select>
            <button className="btn btn-primary d-none d-md-block">🫂Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexLine;
