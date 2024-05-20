import { useState } from "react";
import "./App.css";

const App = () => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos,setTodos] = useState([]);


  const onClick = () => {
    if(!title.trim() || !description.trim()) {
      return {
        alert("내용을 입력하세요!")
      }
    }
    
    const newValue {title, description, isDone: false, id: Date.now()}
    setTodos((prev) => {
      return[...prev, newValue]
    })
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.id)
  };
  const onChangeDescription = (event) => {
    setDescription(event.target.id)
  };

  const onDeleteTodo = (deleteId) => {
    setTodos((todos) => {
      return todos.filter(({id}) => deleteId !== id);

    });
  };
  const onChangeTodoState = (targetId) => {
    setTodos((todos) => {
      
    })
  }



  return (
    <div className="App">
      <div className="header">
        <div>todoslist</div>
        <div>react</div>
      </div>

      <div className="form-container">
        <input type="text" placeholder="제목" onChange={onChangeTitle} value={title}/>
        <input type="text" placeholder="내용" onChange={onChangeDescription} value={description}/>
        <div>{todos.map(({title, description, id, isDone}) => {
          return<div key={id}>{title}</div>
        })}</div>
        <button onClick={onClick}>완료</button>
      </div>

      <div className="progress-container">
        <div>working......</div>
        <ul className="todos">
        {todos.map(({title, description, id, isDone}) => {
          return<li className="todosCard" key={id}>
            <div>{title}</div>
            <div>{description}</div>
            <button onClick={() => onDeleteTodo(id)}>삭제하기</button>
            <button onClick={() => onChangeTodoState(id)}>완료하기</button>
          </li>
        })}
        </ul>
      </div>

      <div className="complete-container">
        <div>done.......</div>
        <ul className="todos">
        {todos.map(({title, description, id, isDone}) => {
          return<li className="todosCard" key={id}>
            <div>{title}</div>
            <div>{description}</div>
            <button onClick={() => onDeleteTodo(id)}>삭제하기</button>
            <button onClick={() => onChangeTodoState(id)}>{isDone ? "취소: 완료"}</button>
          </li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default App 
