import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    picked: [],
    score: 0
  };

  
  clickFriend = id => {

    let friendArray = this.state.picked;

    if (friendArray.indexOf(id) >= 0) {
      alert("Sorry, you lose.");

    } else {
      friendArray.push(id);

      

      this.setState(prevState => {
        return {score: prevState.score +1}
      });
    }
  

    this.setState({ picked: friendArray });

    let copyArray = [...friends];

    for (let i = copyArray.length -1; i > 0; i-- ) {
      const j  = Math.floor(Math.random() * (i + 1) );
      [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];

    }

      this.setState ({ friends: copyArray });
  };




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Navbar>{this.state.score}</Navbar>

        <Title>CLICKY GAME</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
