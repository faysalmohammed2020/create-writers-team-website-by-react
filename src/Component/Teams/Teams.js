import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Teams.css';

const Teams = () => {
    const[members,setMember] = useState([]);
    useEffect(() =>{
        fetch('./writer.JSON')
        .then(res => res.json())
        .then(data => setMember(data))
        
    },[])
    return (
        <div className = "teams-container">
            <div className = "teams">
              {/* <h1>Writer:{members.length}</h1> */}
              {
                  members.map(member => <Member 
                    member={member}
                    key = {member.key}
                    >

                    </Member>)
                  
              }
              
            </div>
            <div className = "cart">
                  <Cart></Cart>
            </div>
        </div>
    );
};

export default Teams;