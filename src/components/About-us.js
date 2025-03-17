import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class AboutUs extends Component {
  constructor(props) { 
    super(props);
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    console.log("Render");
    return (
      <>
        <h1>ABOUT US</h1>
        <User name={"Mutti u rehman"} location={"Islamabad (function)"} />

        <h1>Class based Component</h1>
        <UserClass name={"Muhammad Touseef"} location={"Germany"} />
      </>
    )
  }
}


export default AboutUs;