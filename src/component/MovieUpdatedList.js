import React from 'react';

function MovieUpdatedList({list}) {
    return (
        <div>
        {
        list.map((value,index)=>
            <div key={value.id} className = "column">
            <div className="card">
             <h4><b>Name : {value.name}</b></h4> 
             <p>Release Date : {value.date}</p> 
             <span  className={value.rating>=1?"fa fa-star checked":"fa fa-star"} ></span> 
             <span  className={value.rating>=2?"fa fa-star checked":"fa fa-star"} ></span> 
             <span  className={value.rating>=3?"fa fa-star checked":"fa fa-star"} ></span> 
             <span  className={value.rating>=4?"fa fa-star checked":"fa fa-star"} ></span> 
             <span  className={value.rating>=5?"fa fa-star checked":"fa fa-star"} ></span> 
             </div>
            </div>
        )}
        </div>
        
    );
}

export default MovieUpdatedList;