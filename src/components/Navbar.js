import React from "react";

class Navbar extends React.Component{
    render(){
        return (
            <div className="c">
                <div className="nav">
                 
                 <div className="search">
                     <input className = "input-tag" type= "text" placeholder="Search any Movie"/>
                     <button id="search-btn">Search</button>
                 </div>
             </div>
            </div>
            
        )
    }
}

export default Navbar;