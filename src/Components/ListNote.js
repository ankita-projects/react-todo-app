import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListNote = ({taskList,completeTaskHandler}) =>{
    return (
     <ul>
        {taskList.map(function(task, index){
                    return (
                    <div className ="wrape">
                      <div className="icon">
                      <i class="fas fa-trash-alt"></i>
                      </div>
                   <button type="button" data={ index } onClick={() => completeTaskHandler(index)}><FontAwesomeIcon  data={ index } icon={faTrash} /></button>
                    <div className="list">
                    <li key={ index } style={{ textDecoration: task.isComplete == "true" ? "line-through":"none"}}>{task.name} </li>
                    </div>
                    </div>
                    );
                  })}

     </ul>
    );
} ;
export default ListNote;