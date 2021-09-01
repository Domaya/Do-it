import React, { useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState("");
  const [todo, setTodo] =  useState([])

  const onListChange = (event) => {
    const { target:{value} } = event;
    setList(value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // setTodo(todo.concat(list));
    setTodo([...todo, list])
    setList("");
    console.log(todo);
  }

  
  
  return(
    <>
    <form  onSubmit={onSubmit}>
      <input name="things" onChange={onListChange} placeholder="To do" value={list} type="text"></input>
      <input type="submit" value="등록"></input>
    </form>
    <div>
      <h5>{todo}</h5>
    </div>
    </>
  )
}
export default Home;