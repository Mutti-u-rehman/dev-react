import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      user: undefined
    };
  }

  async componentDidMount() {
   
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <>
        <div className="user-info">
          <h3>Count: {count}</h3>
          <button onClick={() => {
            this.setState({
              count: count + 1
            })
          }}>Increase Count</button>
          <h1>Name: {name}</h1>
          <h3>Location: {location}</h3>
          <h4>Contact info: LinkedIn:Muttiurehman</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
