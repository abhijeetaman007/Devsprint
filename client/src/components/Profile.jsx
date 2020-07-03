//will convert to functional component
import React, { Component } from "react";
//eg:q=lord+of+the+rings
//q=anything with + instead of spaces
//change q it works
const q="harry+potter";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: []
    };
  }

  async componentWillMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?t="+q+"&apikey=3da5a3c2"
      );
      const data = await response.json();
      this.setState(() => ({
        moviesData: data
      }));
    } catch (error) {
      console.log("Error in fetching data");
    }
  }

  render() {
    const { Title, Year, Poster } = this.state.moviesData;
    return (
      <div className="container">
        <h3>{Title}</h3>
        <h3>{Year}</h3>
        <img src={Poster} alt="character" />
      </div>
    );
  }
}
export default Profile;