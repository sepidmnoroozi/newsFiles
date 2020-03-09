import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import Allnewslist from "./components/layout/Allnewslist";
import W2V from "./components/layout/W2V";
import TFIDF from "./components/layout/TFIDF";
import TestServer from "./components/layout/test";
import ElasticSearchComponent from "./components/layout/ElasticSearchComponent";
import NewsPage from "./components/layout/NewsPage";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          {/* <Route exact path="/allnews" component={Allnewslist} /> */}
          <Route exact path="/w2v" component={W2V} />
          <Route exact path="/tfidf" component={TFIDF} />
          <Route exact path="/test" component={TestServer} />
          <Route exact path="/search" component={ElasticSearchComponent} />
          <Route exact path="/newsPage" component={NewsPage} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
