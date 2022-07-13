import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {Ptag(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
 
    </div>
  );
}
function Ptag(bio){
  if(bio==!null){
    return <p>{bio}</p>
  }else{
    return null
  }
}

export default About;
