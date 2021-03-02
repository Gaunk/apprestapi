import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavbarFunc from './Component/Func/NavbarFunc';
import HomeFunc from './Component/Func/HomeFunc';
import AboutFunc from './Component/Func/AboutFunc';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarFunc/>
      <Switch>
        <Route exact path='/' component={HomeFunc} />
        <Route exact path='/about' component={AboutFunc} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
