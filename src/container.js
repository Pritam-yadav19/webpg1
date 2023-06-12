import React from "react";
import Mobiles from "./body/mobiles";
import Laptops from "./body/laptops";

function Contains({CntMob,setCntMob,CntLap,setCntLap}){
    const styled={
        marginLeft:'500px',
        marginTop: '200px',
        border:'solid',
        padding:'50px',
        marginRight:'400px'
    }
    return(
        <>  
            <div style={styled}>
                <Mobiles CntMob={CntMob} setCntMob={setCntMob}/>
                <Laptops CntLap={CntLap} setCntLap={setCntLap}/>
            </div>
        </>
    );
}
export default Contains;