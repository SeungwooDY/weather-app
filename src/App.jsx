import { useState } from 'react'
import './App.css'
import WeatherApp from './components/WeatherApp'
import TopStories from './components/TopStories'

function App() {

  return (
    <>
      <WeatherApp />
      <br />
      <TopStories />
    </>
  )
}

export default App
