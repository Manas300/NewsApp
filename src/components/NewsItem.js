import React, { Component } from 'react'

const NewsItem =(props)=>
 {
   
        let{title,description,imageUrl,url}=props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">C{title}...</h5>
    <p className="card-text">{description}...</p>
   
    {/* to go to next tab use target="_blank"  */}
    <a href={url} target="_blank" className="btn btn-primary">Click to view</a>
  </div>  
</div>
            </div>
        )
    
}

export default NewsItem
