import React from 'react';
const Mobiles=({CntMob,setCntMob})=> {
    const styled={
        border:'solid',
        display:'flex',
        justifyContent:'space-between'
    }
    function Count(){
        setCntMob(CntMob+1);
    }
    return (
        <div style={styled}>
            <p>Mobile Phones</p>
            <button onClick={Count}>Open now!</button>
        </div>
    );
}
export default Mobiles;