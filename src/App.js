import React from 'react'
import './App.css'
import {Container, Grid} from '@material-ui/core'
import Profile from './components/Profile/profile'
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Portfolio from "./pages/portfolio/portfolio";
import Resume from "./pages/resume/resume";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
