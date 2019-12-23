import React from "react";
import Axios from "axios";
import SearchBar from "./SearchBar.js";

class App extends React.Component {
  onSearchSubmit(term) {
    Axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 6b564aa5706ab063f170e8ac2f14a7dc674d8b3563ed58b8026df47f1d4edc0f"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
