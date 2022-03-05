import React from 'react';
import ReactDOM from 'react-dom';
import './listtransactions.css';
import data from "../../data/orders.js"

export default function ListTransactions(props){
  let del = "";
  if (props.item.delivered == true){
    del = "Delivered";
  }
  else {
    del = "Not Delivered";
  }
  return (
    <tr key={props.item.id}>
    <td>{props.item.id}</td>
    <td>{props.item.medName}</td>
    <td>{props.item.quantity}</td>
    <td>{props.item.price}</td>
    <td>{props.item.dateOrdered}</td>
    <td>{del}</td>
    <td className="button-col">
    <div className="reorder-button" id={props.item.medName}> Reorder </div>
    </td>

    </tr>
  )
}
