import React from 'react';
import ReactDOM from 'react-dom';
import "./searchbox.css"
import medData from "../../data/meds.json"
import Card from "../Card/card"
import {useEffect,useState} from 'react'

export default function SearchBox() {

  const [sr,sru]=useState([])
  useEffect(()=>{
    const url = "meds";
    fetch(url).then(resp=>resp.json()).then(resp=>sru(resp))
  },[])
  let indexArr = [];
  let searchResuls = [];
  const [irrupdate,UpdateIrr]= React.useState(indexArr);
  const [searUpdate,UpdateSear] = React.useState(searchResuls)
  const [searUpdate2,UpdateSearResClick] = React.useState(searUpdate)

  function SearchFunction(value){
    var data = sr;
    for( let i = 0; i < data.length; i++){
      let  dataSearch = data[i]["name"].slice(0,value.length)
      if (dataSearch.toString().toLowerCase()==value.toString().toLowerCase()){
        indexArr.push(data[i]["name"]);
      }
    }
    if(indexArr.length==0){
      try{
      document.querySelector(".noResult").classList.remove("invisible");
    } catch(error){
      console.log(error);
    }
    try{
      document.querySelector(".searchResults").classList.add("invisible");
    }catch(error){
      console.log(error);
    }
    }
    else if(indexArr.length>0){
      try{
      document.querySelector(".noResult").classList.add("invisible");
    }catch(error){
      console.log(error);
    }
      try{
        document.querySelector(".searchResults").classList.remove("invisible");
      } catch(error) {
        console.log(error);
      }
  }

  UpdateIrr(function(){
    searchResuls = indexArr.map(meds=>{
        return (
          <Card
                    key={meds}
                    meds={meds}
          />)
      })
      UpdateSear(searchResuls)
      return indexArr
  });
}
  return (
    <div>
      <a href="transactions" ><div className="transaction-orders">
        <a href="" class="btn btn-primary disabled" role="button" aria-disabled="true">Order from Previous Orders</a>
      </div></a>
      <div class="row  d-flex justify-content-center search-div">
        <div class="col-md-8">
          <div class="search"> <i class="fa fa-search"></i> <input type="text" onChange={(evt)=> { SearchFunction(evt.target.value); }} class="form-control" placeholder="Search for meds..."></input> </div>
        </div>
      </div>
      <div class="card-display">
      {searUpdate}
      </div>
    </div>
  )
}
