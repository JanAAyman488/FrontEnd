import  { useEffect, useState } from 'react'
import axios from 'axios'
import img1 from '../assets/image.png'

export default function Coffe() {

  let [coffe,setCoffe]=useState([])

async  function TrendTv() {
    let {data}=await axios.get(`https://api.sampleapis.com/coffee/hot`)
  console.log(data);
  setCoffe(data)
  
  }

  useEffect(()=>{
    TrendTv()
  },[])

  return <>
  <div className="container">
    <div className="row">
      <h1 className='mt-3 bg text-center text-white'>Type Coffe</h1>
      {coffe.map((x,index)=><div className="col-md-3 mt-5" key={index}>
        {x.image?<img src={x.image} className='w-100 rounded rounded-5 borderbg' alt="" />:<img src={img1} className='w-100 rounded rounded-5 borderbg' alt="" />}
<h4 className='titlecolor'>{x.title}</h4>
      </div>)}
      
    </div>
  </div>
  </>
}
