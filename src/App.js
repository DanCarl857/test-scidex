import React, { Component } from 'react';
import './App.css';

// Library imports
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import Photos from './components/Photos';
import Search from './components/Search';
import Animation from './components/Animation';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Photos />
  },
  {
    path: "/search",
    main: () => <Search />
  },
  {
    path: "/animation",
    main: () => <Animation />
  }
];

class App extends Component {

  render() {

    return (
      <Router>
        {/* <Grid> */}
          <Row>
              <Col md={3}>
                <div className="sideNav">
                  <div className="sideNavHeader">
                    <img src={require('./assets/logo.jpeg')} width="100" height="40" className="logoPicture" alt="logo" />
                  </div>
                  <div className="profile">
                    <img src={require('./assets/person.jpeg')} width="70" height="70" className="profilePicture" alt="profile" />
                  </div>
                  <div>
                    <p className="userName">Jonas Rogerson</p>
                  </div>
                  <ul className="listStyle">
                    <li>
                      <Link to="/" className="darkText">Photos</Link>
                    </li>
                    <li>
                      <Link to="/search" className="darkText">Search</Link>
                    </li>
                    <li>
                      <Link to="/animation" className="darkText">Animation</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={9} className="main">
                <div style={{ flex: 1, padding: "10px" }}>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                    />
                  ))}
                </div>
              </Col>
          </Row>
        {/* </Grid> */}
      </Router>
    );
  }
}

export default App;
