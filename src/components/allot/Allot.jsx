import axios from 'axios';
import React, { useState } from 'react'
import Description from '../descriptionBox/Description';
import "./allotstyles.css"

function Allot() {

let [allotments,setAllotments]=useState([]);
// let filtered =allotments.filter((eachMovie)=>eachMovie.toLowerCase().replaceAll(/\s/g,'').includes(searchtext.toLowerCase().replaceAll(/\s/g,'')))
//  (filtered && filtered.map((data,i)=><div key={i} className='allotments'> {data} </div>)) || 
//MY API KEY (KEANU id)--> ac5ccba59bmsh42738605d261a5dp17b001jsna062d7404367

async function makeRequest(e){
    let searchvalue=e.target.value;

    const options = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
        params: {q: searchvalue},
        headers: {
          'X-RapidAPI-Key': 'c84201ed4bmsh812801832de1b6dp111249jsn791a637a3f86',
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };
//  console.log("request made with->",options);
 let res; 
   try{
    res= await axios.request(options);
    res= res.data.d.filter((obj)=>{ 
      return obj.hasOwnProperty('i');
    });
    setAllotments(res);
        }
   catch{
    setAllotments([]);
    console.log("error in fetching data...")
   }
   
  //  console.log(res);

  }
  
   function debouncer(fn,duration){
    let timeout;
    return function(){
    clearTimeout(timeout);
    timeout=window.setTimeout(() =>{ fn.apply(this,[...arguments]) }, duration);
    };
    }

    const search=debouncer(makeRequest,400);
    
  return (<>
   <div id="bg-container"></div>

    <div id='allot-main'>

     <div id="search-parent">
     <input type="text" onKeyUp={search}  placeholder='Search a movie'/>
     <button onClick={makeRequest}>&#128269;</button>
     </div>
      <div className='content'>
      { allotments && allotments.length!==0 && allotments.map(obj=><Description obj={obj} />)}    
      { allotments && allotments.length===0 && <div id="no-content"> </div>}  
      </div>
    </div>
    </>
  )
}

export default Allot;