import { useState } from "react";

const IndexPage = () => {
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    setCount(count + 1)
  }

  return <><header>{count}</header>
    <button onClick={handleClick}>+1</button>
  </>;

};

export default IndexPage;
