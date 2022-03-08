import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's a new day ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
          required
        />
        <i
          onClick={() =>
            setTodos([...todos, { id: Date.now(), text: todo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
     <div className="container"> <h4>All Tasks</h4></div>
      <div className="todos">
        {todos.map((value) => {
          return (
            <div id="list" className="todo " key={value.id}>
              <div className="left">
                <input
                  value={value.status}
                  onChange={(e) => {
                    console.log(e.target.checked);
                    setTodos(
                      todos.filter((val) => {
                        if (val.id === value.id) {
                          val.status = e.target.checked;
                          console.log(val);
                        }
                        return val;
                      })
                    );
                  }}
                  type="checkbox"
                  name=""
                  id="cb"
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={(e) => {
                    setTodos(
                      todos.filter((obj2) => {
                        if (obj2.id !== value.id) {
                          return obj2;
                        }
                        return null;
                      })
                    );
                  }}
                ></i>
              </div>
            </div>
          );
        })}
        <div className="container">
          <div className="container"><h4>Finished</h4></div>
          
          {todos.map((value) => {
            if (value.status) {
              return (
                <div>
                  
                <div id='finished' className="todo" key={value.id}>
                  <div className="left">
                    <p>{value.text}</p>
                  </div>
                  <div className="right">
                    <i
                      className="fas fa-times"
                      onClick={(e) => {
                        setTodos(
                          todos.filter((obj2) => {
                            if (obj2.id !== value.id) {
                              return obj2;
                            }
                            return null;
                          })
                        );
                      }}
                    ></i>
                  </div>
                </div>
                </div>
              );
           
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
