import React from 'react';
import front from './two.jpg';
import two from './one.jpg';
import three from './front.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Posts() {
  return (
    <div className="container">
     
    


    


      <div className="row ">
     
        <div className="col-md-7 p-2">
       
          <img src={front} alt="Post" className="img-fluid rounded" />
          <h6>Article✍️</h6>
          <div className="d-flex justify-content-between align-items-center">
            <h5>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
            <h5>...</h5>
          </div>
          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>

          <div className="d-flex align-items-center gap-2  ">
           
            <img

              src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.392602738.1678909407&semt=ais'
              alt="Avatar"
              className="rounded-circle"
              width="40"
              height="40"
            />
            <div>
              <h5>Sarthak Patel</h5>
        
            </div>
            <div className="ms-auto">
              <p>1.9k views</p>
              
            </div>
            </div>

        </div>



        <div className="col-md-7 ">
          <img src={two} alt="Post" className="img-fluid rounded" />
          <h6>Education📝</h6>
          <div className="d-flex justify-content-between align-items-center">
            <h5>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
            <h5>...</h5>
          </div>
          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>


          <div className="d-flex align-items-center gap-2">
           
           <img

           src='https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740'
             // src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext'
             alt="Avatar"
             className="rounded-circle"
             width="40"
             height="40"
           />
           <div>
             <h5>Sarthak Patel</h5>
       
           </div>
           <div className="ms-auto">
             <p>1.9k views</p>
           </div>
           </div>
        </div>
        <div className="col-md-7">
          <img src={three} alt="Post" className="img-fluid rounded" />
          <h6>Article✍️</h6>
          <div className="d-flex justify-content-between align-items-center">
            <h5>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
            <h5>...</h5>
          </div>
          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="d-flex align-items-center gap-2">
           
           <img

         
             src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.392602738.1678909407&semt=ais'
             alt="Avatar"
             className="rounded-circle"
             width="40"
             height="40"
           />
           <div>
             <h5>Sarthak Patel</h5>
       
           </div>
           <div className="ms-auto">
             <p>1.9k views</p>
           </div>
           </div>



        </div>
      </div>
    </div>
  );
}

export default Posts;
