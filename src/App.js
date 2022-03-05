import Navigation from "./components/Navigation/Navigation.js"
import Order from "./Order"
import FileUpload from "./components/FileUpload/FileUpload"
import Transaction from "./components/Transaction/transaction"
import React from "react"
import HomePage from "./HomePage"
import "./App.css"
import UnderConstruction from "./components/UnderConstruction/UnderConstruction"
import {BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom'


function App() {

  return (
    <div>
    <Router>
    <Navigation />
    <Routes>
    <Route path="/under-construction" exact element={<UnderConstruction />}></Route>
    <Route path="/" exact element={<HomePage />}></Route>
    <Route path="/orders" exact element={<Order />}></Route>
    <Route path="/transactions" exact element={<Transaction />}></Route>
    <Route path="/fileupload" exact element={<FileUpload />}></Route>

    </Routes>
    </Router>
    </div>
  );
}

export default App;
