import Navigation from "./components/Navigation/Navigation.js"
import Dashboard from "./components/DashBoard/DashBoard"
import "./homepage.css"
import React,{useEffect,useState} from 'react'

function HomePage() {
  const [transactions,setPosts]=useState([])
  useEffect(()=>{
    const url = "transaction";
    fetch(url).then(resp=>resp.json()).then(resp=>setPosts(resp))
  },[])

  let dataArray = transactions.map(trans=>{
      return (
        <Dashboard
                  key={trans.id}
                  item={trans}
        />)
    }
  )
  return (
    <div className='home'>
    <div className='topSection'>
    <h3 class="title"> Dashboard of Recent Transactions</h3>
    <a href="http://3.229.117.214/transaction" ><button type="button" class="btn btn-hp btn-secondary disabled"name="Add">    Add   </button></a>
    </div>
    { dataArray != 0 && <section>
    <table class="table" >
    <thead class="thead-dark">
    <tr>
    <th>Transaction Id</th>
    <th>Order Date</th>
    <th>Expected Delivery Date</th>
    <th>Status</th>
    <th>Current Status</th>
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

export default HomePage;
