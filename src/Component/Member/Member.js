import React from 'react';
import'./Member.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Member = (props) => {
      const{name,Age,role,img,country,salary} = props.member;
    
    return (
    <div className="card g-4" style={{ width: '18rem' }}>
            <img  src={img} className="card-img-top image" alt="..."/>
    <div className="card-body">
            <h5 className="card-title">Name :{name}</h5>
            <p className="card-text">Role :{role}</p>
            <p className="card-text">Age :{Age}</p>
            <p className="card-text">Country :{country}</p>
            <p className="card-text">salary:$ {salary}</p>
        <button onClick = {() => props.handleCart(props.member)} className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
    </div>
</div>
    
    );
};

export default Member;