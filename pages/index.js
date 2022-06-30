import { useState } from "react";

const IndexPage = () => {
  const [count, setCount] = useState(100);

  const handleClick = () => {
    setCount(count + 2);
  };

  return (
    <>
      <header>{count}</header>
      <button onClick={handleClick}>+2</button>
    </>
  );
};

export default IndexPage;
