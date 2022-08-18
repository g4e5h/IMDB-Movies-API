import React from 'react';
import "./descriptionboxstyles.css";

function Description({obj}) {
  let id=obj.id;
  let imageUrl=obj.i.imageUrl;
  // let title=obj.l;
  let rank=obj.rank;
  // let cast=obj.s;
  let backimage=obj.hasOwnProperty('v')?obj.v[0].i.imageUrl:imageUrl;
  let dor=obj.y;
 console.log(obj);
  // console.log(`Obj-->${JSON.stringify(obj)} imageUrl--> ${imageUrl} title--> ${title} rank--> ${rank} cast-->${cast} backimg-->${backimage} dor--->${dor}`)

  // document.getElementById('description-front').style.backgroundImage=`url(${imageUrl})`;
  // document.getElementById('description-back').style.backgroundImage=`url(${backimage})`;
  return (
    
    <div className="description-box-container">
     <div className="description-content-box">

        <div className='description-front'>
        <a href={`https://www.imdb.com/title/${id}`} rel="noreferrer" target='_blank'>
        <div className='image-container'><img  src={imageUrl}  alt='front'/></div>
        </a>
        </div>
        
        <div className='description-back'>
        <a href={`https://www.imdb.com/title/${id}`} rel="noreferrer" target='_blank'>
        <div className='image-container'><img  src={backimage}  alt='back'/></div>
        </a>
        {/* <h1 className='description-title'>{title}</h1> */}
        <div className='description-title'><h2 >{dor}</h2></div>
        {/* <h2 className='description-subtitle'>{cast}</h2> */}
        <div className='description-year-rank'><h3 >#{rank} on IMDB</h3></div>
        </div>
       
     </div>
    </div>
    
  )
}

export default Description