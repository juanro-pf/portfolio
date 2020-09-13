import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PortfolioScreen } from '../components/PortfolioScreen';
import { AboutMeScreen } from '../components/AboutMeScreen';
import { ResumeScreen } from '../components/ResumeScreen';
import { ProjectsScreen } from '../components/ProjectsScreen';
import { ContactScreen } from '../components/ContactScreen';
import { Navbar } from '../components/Navbar';
import { ClickOut } from '../helpers/ClickOut';
import { Context } from '../Context';
import { Sidebar } from '../components/Sidebar';

export const AppRouter = () => {

  const {setShow, setOut} = useContext(Context);

  const handleClick= () => {
    setOut('sidebar animate__animated animate__fadeInLeft animate__faster');
    setShow('block');
  }

  return (
    <Router>
      <div>
        <ClickOut props={setOut}>
          <Sidebar />
        </ClickOut>
        <Navbar/>
        <i
          className= 'nav-icon-sm-screen nav-icon fas fa-bars fa-lg'
          onClick= {handleClick}
        />
        <Switch>
          <Route exact path='/portfolio' component= { PortfolioScreen } />
          <Route exact path='/aboutme' component= { AboutMeScreen } />
          <Route exact path='/resume' component= { ResumeScreen } />
          <Route exact path='/projects' component= { ProjectsScreen } />
          <Route exact path='/contact' component= { ContactScreen } />

          <Redirect to='/portfolio' />
        </Switch>
      </div>
    </Router>
  );
};
