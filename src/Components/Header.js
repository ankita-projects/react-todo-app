import React from "react";

const Header = ({taskList}) =>{
    return (
        <header>
            <h1>Task Master</h1>
            <p>I have currently {taskList.length} notes </p>
        </header>
    );
} ;
export default Header;