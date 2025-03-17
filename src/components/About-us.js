import User from "./User";
import UserClass from "./UserClass";
export default AboutUs = () => {
  return (
    <>
      <h1>ABOUT US</h1>
      <User name={"Mutti u rehman"} location={"Islamabad (function)"} />

      <h1>Class based Component</h1>
      <UserClass name={"Muhammad Touseef"} location={"Germany"} />
    </>
  );
};
