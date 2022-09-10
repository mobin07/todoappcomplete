import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"
import TodoLists from './TodoLists';
function App() {

  const [inputList,setInputList]=useState("");
  const[items,setItems]=useState([])
  const itemEvent=(e)=>{setInputList(e.target.value)}
const listOfItems=()=>{
setItems((items)=>{
  return [...items,inputList];
})
setInputList("")
}
const deleteItems=(id)=>{
        console.log("deleted")
        let newarr=items.filter((item,index)=>{
          if(index!=id) return item
        
})
setItems([...newarr])
}
  
  return (
    <div className="main_div">
   <div className="center_div">
    <br/>
    <h1>Todo List</h1>
    <br/>
    <input type="text" value={inputList} placeholder="add your task" onChange={itemEvent}/>
    <button onClick={listOfItems}>+</button>
    <ol>
      {/* <li>{inputList}</li> */}
      {items.map((item,index)=>{
return <TodoLists key={index} id={index} item={item} deleteItems={deleteItems}/>
      })}
    </ol>
   </div>
    </div>
  );
}

export default App;
