import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---


      <NavLink
        to={'/profile'}
        style={(params) => {
          return {color: params.isActive ? 'lime' : 'black'}
        }}
      >
        profile
      </NavLink>---

      <NavLink
        to={'/profile/settings'}
        className={({isActive}) => isActive ? 'act' : 'def'}
      >
        settings
      </NavLink>---

      <a
        href={'https://github.com/IgnatZakalinsky/simple-react-homeworks'}
        target={'_blank'} // открывается в новой вкладке
        rel={'noreferrer nofollow noopener'} // это для безопасности
      >
        xxx
      </a>

      <Routes>
        <Route path={'/*'} element={<div>404</div>}/> {/* звездочка говорит что после слеша может быть что угодно */}
        <Route path={'/'} element={<div>main</div>}/>
        <Route path={'/login'} element={<div>login</div>}/>
        <Route path={'/profile'} element={<div>profile</div>}/>
        <Route path={'/profile/settings'} element={<div>settings</div>}/>
      </Routes>
    </div>
  );
}

export default App;
