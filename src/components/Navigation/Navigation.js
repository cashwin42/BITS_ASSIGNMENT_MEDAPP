import React from 'react';
import ReactDOM from 'react-dom';
import logo from "../../images/logo.png"
import cartIcon from "../../images/cart-icon.png"
import './navigation.css';
import {useEffect,useState} from 'react'


export default function Navigation(){
  const [cartCount,cartUpdate]=useState([])
  useEffect(()=>{
    const url = "cart/1";
    fetch(url).then(resp=>resp.json()).then(resp=>cartUpdate(resp))
  },[])

  return (
    <div className="navigation">
      <a class="navbar-brand" href="/"><img class="image-logo" src={logo} alt=""></img></a>
      <ul class="nav-list">
        <a href="/"><li class="nav-items" id="home">Home</li></a>
        <a href="/orders"><li class="nav-items" id="order-meds">Order Medicines</li></a>
        <a href="/under-construction"><li class="nav-items" id="book-lab">Book Lab Appointment</li></a>
        <a href="/under-construction"><li class="nav-items" id="book-doc">Book Doctor Appointment</li></a>
      </ul>
      <div class="cart-div">
      <img class="cart-icon"src={cartIcon} alt="cart"></img>
      <div class="dot">{cartCount["cartItemsNumber"]}
      </div>
      </div>
      </div>
  )
}
