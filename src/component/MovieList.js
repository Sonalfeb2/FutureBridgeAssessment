import React,{useState} from 'react';
import MovieUpdatedList from './MovieUpdatedList';
import './Card.css';
function MovieList({list}) {
  const[search , setSearch] = useState("");
  const [updatedList, setUpdatedList] = useState([]);

  const handleKeypress = e => {
    console.log(e)
  if (e.key === "Enter") {
    handleSubmit();
  }
};

  const handleSubmit = async()=>{
    const response = await fetch('http://localhost:8080/search',{
        
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },

    body: JSON.stringify({value:search})
    }).then((res)=>res.json());
    setUpdatedList(()=>response)
    setSearch("")
  }
    return (
        <div>
           <input type="text" value={search} placeholder="Search Movie Here" onKeyPress={handleKeypress} onChange={(e)=>setSearch(e.target.value)} />
           <button onClick={handleSubmit} >Submit</button>
           <div className="row">
             {
           updatedList.length===0?<div>{
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
            </div>:<MovieUpdatedList list={updatedList}/>}
           </div>
        </div>
    );
}

export default MovieList;