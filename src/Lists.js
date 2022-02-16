import { useEffect, useState } from "react";


const Lists = ({tasks}) => {



    function remove(listItem){
        let text=(listItem.textContent);
        text = text.slice(0,text.length-1);
        listItem.style.display='none';
      

        tasks.forEach((task,index) => {
            console.log(typeof task.val);
             if(task.val===text){
       
                  tasks.splice(index,1)
                  console.log(index);
             }
       
        });



        localStorage.setItem('task',JSON.stringify(tasks));

    }

    return (
        
    
            <ul className="list__ul">
            {tasks===null && <h1>No tasks</h1>}
            {tasks!==null && tasks.map((task,i)=>(
             <li className="list__item" key={task.id} >
                {task.val}
               <a href="#" onClick={(e)=>{
                   remove(e.target.parentElement)
               }}>X</a>
            </li>
         ))}
        </ul>

      
    

        


     );
}
 
export default Lists;