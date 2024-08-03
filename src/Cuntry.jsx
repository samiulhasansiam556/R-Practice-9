import React from 'react';
import CuntryDisplay from './CuntryDisplay';

function Cuntry(props) {

     
     
    return (
        <div className='min-w-100'>
            <div className='w-[80%] ml-[10%] flex flex-wrap justify-between 
            flex-auto gap-x-3 gap-y-8 ]'>
                {props.Cuntry.map((cuntry,index)=>{
                return(
                    <CuntryDisplay key={index} Cuntry={cuntry} />
                )
              })}
            </div>
              
            
        </div>
    );
}

export default Cuntry;