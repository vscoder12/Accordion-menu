import React, {useState} from 'react'
 const Myacc =({question,answer})=>{
    const [show,setshow]=useState(false);
    return(
        <>
            <div className='main_heading'> 
              <p onClick={()=>setshow(!show)}>{show?"➖":"➕"}</p>
              <h3>{question}</h3>
            </div>
            {show && <p className='answer'>{answer}</p>}
        </>
    )
 }
 export default Myacc;