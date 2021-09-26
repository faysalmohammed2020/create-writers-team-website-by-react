import React from 'react';
import'./Member.css';

const Member = (props) => {
      const{name,Age,role,img,country,salary} = props.member;
    
    return (
    // <div>
         
    // <div className ="card">
    //     <img src={img} className = "image" alt="" />
    //     <p>Name :{name} </p>
    //     <p>Role :{role} </p>
    //     <p>Age :{Age} </p>
    //     <p>Country :{country} </p>
    //     <p>salary:$ {salary} </p>
    // </div>
         
    // </div>
    <div className="card g-4" style={{ width: '18rem' }}>
  <img  src={img} className="card-img-top image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name :{name}</h5>
    <p className="card-text">Role :{role}</p>
    <p className="card-text">Age :{Age}</p>
    <p className="card-text">Country :{country}</p>
    <p className="card-text">salary:$ {salary}</p>
    <button className="btn btn-primary">Add to Cart</button>
  </div>
</div>
    
    );
};

export default Member;