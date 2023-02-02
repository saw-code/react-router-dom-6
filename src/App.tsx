import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Route, Routes, useNavigate, useSearchParams} from "react-router-dom";


const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.get('name'))
  console.log(Object.fromEntries(searchParams))

  useEffect(() => {
    console.log('research...')
  }, [searchParams])


  return (
    <div>
      profile
      <button
        onClick={() => {
          setSearchParams({age: '32'})
        }}
      >
        add age
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink to={'/profile'}>profile</NavLink>---


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
