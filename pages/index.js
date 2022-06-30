import { useState } from "react";

const IndexPage = () => {
  const [count, setCount] = useState(100);

  const handleClick = () => {
    setCount(count + 4);
  };

  return (
    <>
      <header>{count}</header>
      <button onClick={handleClick}>+4</button>
    </>
  );
};

export default IndexPage;
