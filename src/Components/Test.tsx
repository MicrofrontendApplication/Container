import React, { useState } from 'react';
import './test.css';

function Test() {
    const [color,setColor]=useState('black');


    console.time('start')
    const handelClick = (name: any) => {
        debugger; // This will pause execution if DevTools are open
        const firstname = name;
        console.log('name', name);
    };
   
    console.timeEnd('start')

    return (
        <>
            <h1 className='head' style={{color:`${color}`}}>This is a web site  </h1>
            <div className="cart">This is a test page</div>

            <button onClick={() => handelClick('nishant')} className='button primary' >Click here</button>


            <button onClick={()=>{setColor('blue')}}>Click to</button>


            {/* <form action="http://localhost:4000/api/transfer" method="POST">
                <input type="hidden" name="amount" value="1000" />
                <button type="submit">Transfer $1000</button>
            </form> */}
            
        </>
    );
}

export default Test;
