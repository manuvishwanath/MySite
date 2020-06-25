import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header.component';
import HomePage from './pages/home.page';
import ExperiencePage from './pages/Experience.page';
import SkillPage from './pages/skill.page';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/experience' component={ExperiencePage} />
          <Route exact path='/myskills' component={SkillPage} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
