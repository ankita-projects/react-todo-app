import React from "react";


const AddNotes = ({submitHandler}) =>{
     
    return (
        <form onSubmit={submitHandler}>
         <input type ="text" name ="task"  />
        <button type="submit">Submit</button>
      </form>
    );
} ;
export default AddNotes;