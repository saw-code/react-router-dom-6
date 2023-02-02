import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Route, Routes, useNavigate} from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate() // с помощью этого хука мы получаем ф-цию и ей в дальнейшем передаем /login и переходим на эту страницу

  // 1 вариант
  // useEffect(() => {
  //   if (true) navigate('/login')
  // }, [])


  return (
    <div>
      {/*2 вариант*/}
    {/*  {true ? (*/}
    {/*    <Navigate to={'/login'}/>*/}
    {/*  ):(*/}
    {/*    <>*/}
    {/*      profile*/}
    {/*      <button onClick={() => {navigate('/login')}}>logout</button>*/}
    {/*    </>*/}
    {/*)}*/}
      <button onClick={() => {navigate(-1)}}>logout</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink to={'/profile'}>profile</NavLink>---
      <NavLink to={'/profile/settings'}>settings</NavLink>

      <Routes>
        <Route path={'/*'} element={<div>404</div>}/> {/* звездочка говорит что после слеша может быть что угодно */}
        <Route path={'/'} element={<div>main</div>}/>
        <Route path={'/login'} element={<div>login</div>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/profile/settings'} element={<div>settings</div>}/>
      </Routes>
    </div>
  );
}

export default App;
