
import UserClass from "./UserClass";
import { Component } from "react";
import User from './User';
class AboutUs extends Component {
  constructor(props) { 
    super(props);
    // console.log("Constructor");

    this.state = {
      user: {name: 'default', location: 'default', bio: 'default'}
    };
  }

  async componentDidMount() {
    // console.log("Component Did Mount");

    const data = await fetch("https://api.github.com/users/mutti-u-rehman");
    const json = await data.json();
    // console.log(json);
    this.setState({
      user: json
    });
  }

  render() {
    const { name, location, bio } = this.state.user;
    // console.log("Render");
    return (
      <>
        <h1>ABOUT US</h1>
        <User name={name} location={location} bio={bio} />

        <h1>Class based Component</h1>
        <UserClass name={"Muhammad Touseef"} location={"Germany"} />
      </>
    )
  }
}


export default AboutUs;