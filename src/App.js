import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Service from "./components/Login";
import Contact from "./components/Join";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import reducer from ""

// combineReducers digunakan apabila reducer lebih dari 1

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
    // <React.Fragment>
    //   <Navbar />
    //   <div className="container px-0">
    //     <MainInfo />
    //     <NextMeetUp />
    //     <AboutMeetUp />
    //     <Members />
    //     <PastMeetup />
    //     <hr />
    //     <p className="text-center">Copyright Hacktiv8 2019</p>
    //   </div>

    //   <Login />
    // </React.Fragment>
  );
}

export default App;
