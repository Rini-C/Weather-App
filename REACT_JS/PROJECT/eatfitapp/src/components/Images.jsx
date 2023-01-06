import React,{useState} from 'react'
import './Library.js';
 
import{data} from './Library'
const Images = () =>{
    return(
        <>
          <div className='lib'>
             <ul className='lib-ul'>
                {data1?.map((x)=>(<li>
                    <img src={x.img}alt=" "/>
                    <p>{x.item}</p>
                    <p>{nutrients}</p>
                    <p>{cost}</p>
                    <button>{img}</button></li>))}
            </ul>
         </div>
       </>
    ); 
}
 
export default Library;
