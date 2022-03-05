import React from 'react';
import ReactDOM from 'react-dom';
import './dashboard.css';
import data from "../../data/transactions.js"

export default function Dashboard(props){

  return (
    <tr key={props.item.id}>
    <td>{props.item.id}</td>
    <td>{props.item.dateOrdered}</td>
    <td>{props.item.expectedDeliveryDate}</td>
    <td>{props.item.status}</td>
    <td>{props.item.currentStatus}</td>
    </tr>
  )
}
