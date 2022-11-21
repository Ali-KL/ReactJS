// rfce

import React from "react";

function Header(props) {
  console.log(props)

  
  return (
    <div>


      
      <div className="header"> 
        <img src={props.myImage} alt="Ali" />
         <img src={require('../Ali.png')} alt="Ali" />
      </div>
      <div className="head-title">
        <div>
          <h3>
            Hi, I am <br />
            <strong>{props.name}</strong>
            {props.children}
          </h3>
          <h1 style={{color: props.coloTest }}>Full-Stack DEVELOPER</h1>

        </div>
      </div>
    </div>
  );
}

export default Header;
