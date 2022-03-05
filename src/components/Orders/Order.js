
import SearchBox from "../SearchBox/SearchBox"
import Card from "../Card/card"
import "./order.css"
import {useEffect,useState} from 'react'
import React from 'react';

function Order(prop) {
  const [cart,cartUpdate]=useState([])
  useEffect(()=>{
    const url = "cart/1";
    fetch(url).then(resp=>resp.json()).then(resp=>cartUpdate(resp))
  },[])

  function PutAPICall(vaa){
    console.log(vaa)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:1,"cartItemsNumber":vaa })
    };
      const url = "cart/1";
      fetch(url,requestOptions)
      alert("your products have been added to cart !")
  }
  document.addEventListener("click",function(e){

    if(e.target && e.target.classList.contains("active")){
    let qry = ".order-qty-button#" + e.target.id ;
    let vaa = cart["cartItemsNumber"] + parseInt(document.querySelector(qry).value)
    cartUpdate({ id:1,"cartItemsNumber":vaa });
    PutAPICall(vaa);
  
  }});
  return (
    <div>
    <div>
      <SearchBox />
    </div>
    <div className="noResult invisible">
      <h2>No Results !</h2></div>
    </div>
  )
}

export default Order;
