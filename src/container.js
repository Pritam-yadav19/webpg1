import React from "react";
import Mobiles from "./body/mobiles";
import Laptops from "./body/laptops";

function Contains({CntMob,setCntMob,CntLap,setCntLap}){
    const styled={
        width:'70%',
        marginTop: '200px',
        
        marginLeft:'90px'
        
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