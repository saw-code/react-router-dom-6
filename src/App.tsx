import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";

const Profile = () => {
  const params = useParams()
  // const params = useParams<'id'>() можно типизировать useParams и тогда у params можно вызывать эти ключи. Пример params.id
  console.log(params)

  return <div>profile</div>
}

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink to={'/profile'}>profile</NavLink>---
      <NavLink to={'/profile/1'}>profile/1</NavLink>

      <Routes>
        <Route path={'/*'} element={<div>404</div>} />    {/* звездочка говорит что после слеша может быть что угодно */}
        <Route path={'/'} element={<div>main</div>} />
        <Route path={'/login'} element={<div>login</div>} />
        <Route path={'/profile/:id'} element={<Profile/>} /> {/* передаем в element компоненту и с помощью useParams
        присваивается ключ-значение ключом будет id а значением то что укажем после profile
         например profile/blabla вернет объект { id: "blabla" } где значение всегда строка
         */}
      </Routes>
    </div>
  );
}

export default App;
