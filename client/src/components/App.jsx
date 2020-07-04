import React, { Component } from "react";
import Header from "./Header";
const q = "harry+potter";
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
    };
  }

  async componentWillMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?t=" + q + "&apikey=3da5a3c2"
      );
      const data = await response.json();
      this.setState(() => ({
        moviesData: data,
      }));
    } catch (error) {
      console.log("Error in fetching data");
    }
  }

  render() {
    const { Title, Year, Poster } = this.state.moviesData;
    const ans=this.state.name
    return (
      <div>
        <Header />
        
        <div className="search">
          <p>
            <input
              type="text"
              placeholder="Please enter movie name"
              onChange={() => {
                this.props.handleChange();
              }}
              value={this.props.name}
            ></input>
            <button
              onClick={() => {
                this.props.whenClicked();
              }}
            >
              Submit
            </button>
          </p>
        </div>


        <div className="container">
          <h3>{Title}</h3>
          <h3>{Year}</h3>
          <img src={Poster} alt="character" />
        </div>
      </div>
    );
  }
}