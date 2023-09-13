import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUpPage() {


  const buttonStyle = {
    borderRadius: '12px',
    backgroundColor: 'white',
    color: 'blue', 
    
  };
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-6 m-2 ">
          <h2>Create Account</h2>
          <form className='bg-light p-5 rounded'>
            <div className="mb-3 ">
              
              <input type="text" className="form-control " id="name" placeholder="Enter your full name" />
            </div>
            <div className="mb-3">
             
              <input type="email" className="form-control " id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
             
              <input type="password" className="form-control " id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
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
  






 


          <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
