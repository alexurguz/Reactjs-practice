import React from 'react';
//import './Person.css';
import styled from 'styled-components';
/*
render without childrens
const person = (props) => {
return <p>I'm a person! {props.name}</p>
}*/

const StyledDiv = styled.div`
   width: 60%;
   margin: auto;
   border: 1px solid #eee;
   box-shadow: 0 2px 3px #ccc;
   padding: 16px;
   text-align: center;

   @media (min-width: 500px) {
         width:450px;
   }
`;

const person = (props) => {
   const style = {
      '@media (min-width: 500px)' :{
         width: '450px'
      }
   }
   return (
    /* <div className="Person" style = {style}> */
    <StyledDiv>
       <p onClick={props.click}>I'm a person! {props.name}</p>
        <p>{props.children}</p>
        <input 
          type="text"
          onChange={props.changed}
          value={props.name} />
    </StyledDiv>
    /*</div>*/
   )
}
export default person;