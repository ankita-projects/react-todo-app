import React from "react";

const Header = ({taskList}) =>{
    return (
        <header>
            <div className="main">
            <h1>Task Master</h1>
            <p>I have currently {taskList.length} notes </p>
            </div>
        </header>
    );
} ;
export default Header;