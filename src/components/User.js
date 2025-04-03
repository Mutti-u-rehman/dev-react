import { useState } from "react";
const User = ({ name, location, bio }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="user-info">
        <h4>Count: {count}</h4>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>BIO: {bio}</h3>
      </div>
    </>
  );
};

export default User;
