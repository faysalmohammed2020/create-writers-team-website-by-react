import React from 'react';
import'./Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faMale } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const{cart} = props;
    let total =0;
    for(const member of cart){
        total = total+member.salary;
        
    }
    
    return (
        
        <div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title"><FontAwesomeIcon icon={faMale} /> Cart</h5>
    <h6 className="card-subtitle mb-2 text-muted">Writers Added: {props.cart.length}</h6>
    <p className="card-text"><FontAwesomeIcon icon={faShoppingCart}/> Total: {total}</p>
    <button className="btn btn-primary">Buy Now</button>
   
  </div>
</div>
    );
 };

export default Cart;