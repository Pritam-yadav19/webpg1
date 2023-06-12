import React from "react";
import {Link} from "react-router-dom";
function Header(){
    const styles={
        border:'solid',
        backgroundColor:'black',
        color:'white',
        height:'120px',
        display:'flex',                 //line from display to alignitem are for centering
        justifyContent:'space-between',        // for horizontal aligning
        alignItems:'center'           //for vertical aligning

    }
    const right={
        display:'flex',
        justifyContent:'space-between',  
        alignItems:'center'
    }
  
    return(
        <div style={styles}>
            <div >
                <p>Welcome! This is my 1st webpage made using Reactasdsad!</p>
            </div>
            <div style={right}>
                <Link to="/contains"><button>Home</button></Link>
                <p style={{marginRight:'20px'}}>Hello!</p>
                <Link to="/cart">
                <button >Your cart</button>
                </Link>
            </div>
        </div>
    );
}
export default Header;