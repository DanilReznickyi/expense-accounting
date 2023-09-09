import Costs from "./components/Costs/Costs"
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS =[
  {
    id: 'c1',
    date: new Date(2020,2,12),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2023,11,25),
    description: 'MacBook',
    amount: 12254.72
  },
  {
    id: 'c2',
    date: new Date(2023,1,14),
    description: 'iPhone 12 Pro Max',
    amount: 1000.00
  },
  {
    id: 'c3',
    date: new Date(2021,6,24),
    description: 'Джинсы',
    amount: 49.99
  }
];




const App = () => {
  const [costs,setCosts] = useState(INITIAL_COSTS)
const addCostHandler = (cost) => {
  setCosts(prevCosts => {
    return [cost, ...prevCosts]
  })
}

return(
  <div>
    <NewCost onAddCost = {addCostHandler}></NewCost>
    <Costs costs={costs}/>
  </div>

)
}

export default App;
