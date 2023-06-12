import React from 'react';
const Laptops=({CntLap,setCntLap})=> {
    const styled={
        border:'solid',
        display:'flex',
        justifyContent:'space-between'
    }
    function Count(){
        setCntLap(CntLap+1);
    }
    return (
        <div style={styled}>
            <p>Laptops</p>
            <button onClick={Count}>Open now!</button>
        </div>
    );
}
export default Laptops;