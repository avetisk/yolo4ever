import { useState } from "react";

const IndexPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 3);
  };

  return (
    <>
      <header>{count}</header>
      <button onClick={handleClick}>+3</button>
    </>
  );
};

export default IndexPage;
