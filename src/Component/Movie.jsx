import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Movie() {

  let [movie,setMovie]=useState([])

async  function TrendMovie() {
    let {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`)
  console.log(data.results);
  setMovie(data.results)
  
  }

  useEffect(()=>{
    TrendMovie()
  },[])

  return <>
  <div className="container">
    <div className="row">
      <h1 className='mt-3 bg text-center text-white'>Trend Movie</h1>
      {movie.map((x,index)=><div className="col-md-3 mt-5" key={index}>
<img src={'https://image.tmdb.org/t/p/w500/'+x.poster_path} className='w-100 rounded rounded-5 borderbg' alt="" />
<h4 className='titlecolor'>{x.title}</h4>
      </div>)}
      
    </div>
  </div>
  </>
}
