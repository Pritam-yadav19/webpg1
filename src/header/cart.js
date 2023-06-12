import React from "react";
function Carts({CntMob,CntLap}){
    const style1={
        border:'solid',
        fontSize:'26px',
        fontWeight:'bold'
    }
    return(
        <div style={{marginTop:'200px', paddingLeft:'100px', paddingRight:'100px'}}>
            {(CntMob===0 && CntLap===0) && <p style={style1}>Your cart is empty!!</p>}
            {CntMob>0 && <p style={style1}>Your cart contains this many phones={CntMob}</p>}
            {CntLap>0 && <p style={style1}>Your cart contains this many laptops={CntLap}</p>}
        </div>
    );
}
export default Carts;