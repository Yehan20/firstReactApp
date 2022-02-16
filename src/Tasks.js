import { useState } from "react";
import { useEffect } from "react";
import Lists from "./Lists";

const Tasks = () => {

    let tasks=(JSON.parse(localStorage.getItem('task')));
    
    const deletenow=(target)=>{
        let li =document.querySelectorAll('.list__item');
        li.forEach(lis=>lis.style.display='none')
        console.log(li)
      
    
        

        
        localStorage.clear('task');
        // document.querySelector('.btn__clear').style.display='none';
      
    }


    return ( 
      <div className="list">
         <h2 className="list__text">Your Tasks</h2>
       

             <Lists tasks={tasks}/>
  
           <button onClick={(e)=>{
               deletenow(e.target.previousElementSibling);
           }} className="btn__clear">Clear Tasks</button>
        
      </div>
       );
}
 
export default Tasks;