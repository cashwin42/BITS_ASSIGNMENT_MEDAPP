import "./card.css"
import React from "react"// XXX:
import data from "../../data/meds.json"
import {useState} from 'react'



function Card(prop) {
const [value, setValue] = useState(0);
let clU = "";
let bts = "";
let butState = "";
let fmd = require('../../data/meds.json');
let index = 0;
for ( let i = 0; i < fmd["meds"].length;i++){
  if (fmd["meds"][i]["medName"]==prop.meds){
    index = i;
  }
}

function add(){
  setValue(value + 1);
  if(value>parseInt(fmd["stock"])){
    alert("You are trying to order more than available stock!");
    setValue(0);
  }
}

function subract(){
  if(!value==0){
    setValue(value - 1)
  }
}

if (fmd["meds"][index]["prescription"]!="Yes"){
  clU = "invisible";
}
else{
  clU = "visible";
}


if(fmd["meds"][index]["stock"]=="0"){
  bts = "btn btn-secondary disabled order-button-m";
  butState = "inactive"
}
else {
  bts = "btn btn-primary disabled"
  butState = "active"
}



  return (
    <div className="card">
      <h1 className="card-title">{prop.meds} <br></br></h1>
      <hr>
      </hr>
      <h2 className="card-pricription"> Prescription Needed: <span>{fmd["meds"][index]["prescription"]}</span></h2>
      <h4 className="card-stock">Stock: <span>{fmd["meds"][index]["stock"]}</span></h4>
      <h4 className="card-price">Price: <span>{fmd["meds"][index]["price"]}</span></h4>
      <hr>
      </hr>
        <div className="button-order">
          <div id={prop.meds} class={butState}><a href="#" class={bts} role="button" aria-disabled="true">Order</a></div>
          <div className="orderQty">
            <input type="text" name="ordernumber" id={prop.meds} value={value} onChange={e => setValue(e.target.value)} className="order-qty-button"></input>
          </div>
          <div className="plus-minus">
            <div className="plus" onClick={add}>+
            </div>
            <div className="minus" onClick={subract}> -
            </div>
          </div>
        </div>
        <hr>
        </hr>
        <a href="/fileUpload">
          <div class="pricription-section">
            <div id={clU}>
              <a href="/fileupoad" class="btn btn-primary disabled p-button" role="button" aria-disabled="true">Get Pricription</a>
            </div>
          </div>
        </a>
    </div>
  )
}

export default Card;
