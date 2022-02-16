import { useEffect, useState } from "react";
import Tasks from "./Tasks";
const TaskList = () => {
    
    const[value,setValue]=useState('');

    let [tasks,setTasks] = useState(null);
    let obj={

    }
    const [isAdd,setAdd]=useState(false);
 

    const addToStorage=()=>{
        obj.id=0;
        if(localStorage.getItem('task')===null || localStorage.getItem('task')===''){
            tasks=[];
           
            obj.id=1;
        }
        else{
            tasks=JSON.parse(localStorage.getItem('task'))
    
     
            tasks.forEach(element => {
                if(tasks.length===element.id);
                 obj.id=element.id + 1;        
            });
          
        }
        obj.val = value;
     
        tasks.push(obj);
        localStorage.setItem('task',JSON.stringify(tasks));
      

      
    }

    const filter = (input) =>{
        const li = document.querySelectorAll('.list__item');
        
        const text = input
        li.forEach((item)=>{
            let it= item.textContent;
             if(it.indexOf(input)!=-1){
                 item.style.display='block';
             }
             else{
                item.style.display='none';
             }
        })
    }




    return ( 
         <div className="task__box">
            <div className="col">
             <h2 className="task__heading">Add Your Task</h2>
              <form  className="task__form">
                <div>
                    <label htmlFor="">Task Name</label>
                    <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder="text" required/>
                </div>
                <div>
                    <button onClick={()=>{
                        addToStorage();
                        setAdd(true);
                    }} className="add__Btn" type="button">Add Task</button>
                </div>
             </form>
             <div>
                <label htmlFor="">Filter Tasks</label>
                <input type="text" onKeyUp={(e)=>{
                    filter(e.target.value);
                }}  placeholder="Filter tasks" />
             </div>
            </div> 

            <div className="col">
                  <Tasks/> 
              
                  {useEffect(()=>{
                        <Tasks/>
                        setAdd(false)
                  }),[]} 
            
               
            </div>
       
            
         </div>
     );
}
 
export default TaskList;