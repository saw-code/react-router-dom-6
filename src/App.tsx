import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink to={'/profile'}>profile</NavLink>---
      <NavLink to={'/profile/settings'}>settings</NavLink>

      <Routes>
        <Route path={'/*'} element={<div>404</div>} />    {/* звездочка говорит что после слеша может быть что угодно */}
        <Route path={'/'} element={<div>main</div>} />
        <Route path={'/login/*'} element={<div>login</div>} /> {/* звездочка после слеша /login/*  означает что чтобы не было после login то останется все равно на вкладке login */}

        {/*второй вариант вложенности*/}
        <Route path={'/profile'} element={(
          <div>
            profile
            <Outlet/> {/* вместо Outlet вставится роут profile/settings */}
          </div>
          )}>
          <Route path={'*'} element={<div>profile page not found</div>} /> {/*если ввести /profile/settings с несуществующим именем, например /profile/settingskkkkk или /profile/settings/blabla то вместо элемента settings отрисуется profile page not found*/}
          <Route index element={<div>checked id</div>} /> {/*index говорит о том, что у нас нет никаких параметров после /profile, т.е. если мы напишем /profile то отрисуется checked id*/}
          <Route path={':id'} element={<div>id</div>} /> {/*Если вместо /profile/settings будет например /profile/blabla то отрисуется элемент id */}
          <Route path={'settings'} element={<div>settings</div>} /> {/*можно просто settings и будет работать, а если /settings то будет ошибка*/}
        </Route>

        {/*первый вариант вложенности*/}
        {/*<Route path={'/profile/*'} element={*/}
        {/*  <div>*/}
        {/*    profile*/}
        {/*    <Routes>*/}
        {/*      <Route path={'/settings'} element={<div>settings</div>} /> /!* вложили settings в profile и теперь на странице settings отрисуются оба элемента *!/*/}
        {/*    </Routes>*/}
        {/*  </div>*/}
        {/*} />*/}
        {/*<Route path={'/profile/settings'} element={<div>settings</div>} />*/}
      </Routes>
    </div>
  );
}

export default App;
