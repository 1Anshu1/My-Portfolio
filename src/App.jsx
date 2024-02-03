import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import HeroBanner from './components/heroBanner/HeroBanner'
import Skill from './components/skills/Skill'
import Project from './components/projects/Project'

const App = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Skill />
      <Project />
    </div>

  )
}

export default App
