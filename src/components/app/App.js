import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import { Component } from "react";

import decoration from "../../resources/img/vision.png";

class App extends Component {
  state = {
    selectedChar: null,
  };

  changeSelectedChar = (id) => {
    this.setState({ selectedChar: id });
    console.log(this.state.selectedChar);
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <RandomChar />
          <div className="char__content">
            <CharList changeSelectedChar={this.changeSelectedChar} />
            <CharInfo charInfo={this.state.selectedChar} />
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
