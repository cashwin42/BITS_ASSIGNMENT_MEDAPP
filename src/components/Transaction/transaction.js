
import data from "../../data/orders.js"
import ListTransactions from "./ListTransactions"
import "./transactions.css"
import {useEffect,useState} from 'react'

function Transaction() {
  const [orders,setOrders]=useState([])
  useEffect(()=>{
    const url = "order";
    fetch(url).then(resp=>resp.json()).then(resp=>setOrders(resp))
  },[])

  const [cart,cartUpdate]=useState([])
  useEffect(()=>{
    const url = "cart/1"
    fetch(url).then(resp=>resp.json()).then(resp=>cartUpdate(resp))
  },[])

  function PutAPICall(vaa){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:1,"cartItemsNumber":vaa })
    };
      const url = "cart/1";
      fetch(url,requestOptions)
      alert("your products have been added to cart !")

  }

document.addEventListener('click',LLKK);
  function LLKK(e){
    if(e.target && e.target.classList.contains("reorder-button")){
        for (let i=0; i < orders.length;i++){
          if (orders[i]["medName"]==e.target.id){
            let qqty = orders[i]["quantity"] + cart["cartItemsNumber"]
            PutAPICall(qqty);
            window.location.reload();
            break;
          }
        }

     }
 }
  let dataArray = orders.map(trans=>{
      return (
        <ListTransactions
                  key={trans.id}
                  item={trans}
        />)
    }
  )
  return (


    <div className='transactions'>
    <a href="http://3.236.86.40/orders" ><div className="search-orders">
      <a href="" class="btn btn-primary disabled" role="button" aria-disabled="true">Search</a>
    </div></a>
    <div className='topSection'>
    <h3 class="title"> Previous Orders</h3>
    <a href="http://3.236.86.40/orders"><button type="button" class="btn btn-hp btn-secondary disabled"name="Add">    Add   </button></a>
    </div>
    { dataArray != 0 && <section>
    <table class="table" >
    <thead class="thead-dark">
    <tr>
    <th>Transaction Id</th>
    <th>Medicine Name</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Order Date</th>
    <th>Delivered</th>
    <th class="reorder">Reorder</th>
    </tr>
    </thead>
    <tbody>
    {dataArray}
    </tbody>
    </table>
    </section>}
    {dataArray == 0 && <h1>No Transactions</h1>}
    <hr></hr>
    </div>
  );
}

export default Transaction;
