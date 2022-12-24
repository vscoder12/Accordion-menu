import React, {useState} from "react";
import {questions} from './accapi';
import "./accordion.css";
import Myacc from './Myacc';

 const Accordion=()=>{
  const [data,setdata]=useState(questions);
    return(
      <>
       <section className="main_div"> 
       <h1>React Interview Question</h1>
       {
         data.map((curele)=>{
            const{id}=curele;
            return <Myacc key={id} {...curele}/>
         })
       }
       </section>
       </>
    );
 };
 export default Accordion;
