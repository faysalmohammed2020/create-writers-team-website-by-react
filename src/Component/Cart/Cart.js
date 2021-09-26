import React from 'react';

const Cart = (props) => {
    const{cart} = props;
    let total =0;
    for(const member of cart){
        total = total+member.salary;
        
    }
    
    return (
        // <div>
        //     <h1>this is cart</h1>
            
        //     <h3>Total: {total}</h3>
        // </div>
        <div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title">Cart</h5>
    <h6 className="card-subtitle mb-2 text-muted">Writers Added: {props.cart.length}</h6>
    {/* <p className="card-text">Added Persons Name: {props.cart.name}</p> */}
    <p className="card-text">Total: {total}</p>
    <button className="btn btn-primary">Buy Now</button>
   
  </div>
</div>
    );
 };

export default Cart;