import React, { useState } from "react";

const Home = () => {
  const [list, setList] = useState("");

  return(
    <form>
      <input value={list} type="text"></input>
    </form>
  )
}
export default Home;