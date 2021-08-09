import React from "react";

const ListNote = ({taskList}) =>{
    return (
     <ul>
        {taskList.map(function(task, index){
                    return <li key={ index }>{task.name}</li>;
                  })}
     </ul>
    );
} ;
export default ListNote;