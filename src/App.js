// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Circle from "./circle.js";

// function App() {

//   const [count, setCount] = useState(0)

//   let increment = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }


// function App() {

//   const [task, setTask] = useState([
//     {
//       id: 1,
//       taskName: "Go to Office",
//       isDone: false
//     },
//     {
//       id: 2,
//       taskName: "Have Lunch",
//       isDone: false
//     }
//   ])

//   let changeTask = (id) => {
//     let taskIndex = task.findIndex(obj => obj.id === id)
//     task[taskIndex].isDone = !task[taskIndex].isDone;
//     setTask([...task])
//   }

//   return (
//     <div>
//       <ul>
//         {
//           task.map((list) => {
//             return <li style={{ textDecoration: list.isDone ? 'line-through' : '' }}>{list.taskName}
//               - <button onClick={() => changeTask(list.id)}>done/undo</button>
//             </li>
//           })
//         }
//       </ul>
//     </div>
//   );
// }


function App() {

  let [count, setCount] = useState([
    {
      id : "orange",
      count : 0
    },
    {
      id : "blue",
      count : 0
    },
    {
      id : "red",
      count : 0
    }
  ])

  let addition = (id) => {
    let countIndex = count.findIndex(obj => obj.id === id)
    count[countIndex].count++;
    setCount([...count])
  }

  let reset = () => {
    count.map(obj => obj.count= 0)
    setCount([...count])
  }

  return (
    <div className="container text-center mt-5">
      <button class="btn btn-primary btn-sm" onClick={reset} style={{ border: "1px" }}>Reset</button>
      <div className="row">
        {
          count.map((obj) => {
            return <Circle data = {obj} 
            increment={addition}/>
          })}

      </div>
    </div>
  );
}

export default App;
