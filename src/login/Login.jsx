import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {

  const buttonStyle = {
    borderRadius: '12px',
    backgroundColor: 'white',
    color: 'blue', 
    
  };
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <h2>Welcome!</h2>
          <form  className='bg-light p-5 rounded'>
            <div className="mb-3 bg-light">
              
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>



          </form>

        
          <div className='row'>
      <div className='col-12 m-2'>
        <button className="btn btn-secondary btn-block btn-lg" style={buttonStyle}>
          SignIn with Google
        </button>
      </div>
      <div className='col-12 m-2'>
        <button className="btn btn-secondary btn-block btn-lg" style={buttonStyle}>
          SignIn with Facebook
        </button>
      </div>
    </div>
  


        </div>
      </div>
    </div>
  );
}

export default LoginPage;
