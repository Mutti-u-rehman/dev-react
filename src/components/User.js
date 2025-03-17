import { useState } from "react";
const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="user-info">
        <h4>Count: {count}</h4>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h4>Contact info: LinkedIn:Muttiurehman</h4>
      </div>
    </>
  );
};

export default User;
