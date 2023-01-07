import { FC } from "react"
import {CTA, Brand, Navbar} from './components/index'
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers/index'
import './app.scss'
import './vars.scss'


const App: FC = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
