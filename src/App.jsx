//stylesheet
import './sass/utils.scss'

import Header from "./components/Header/Header";
import Load from "./components/LoadAnimation/Load";
import { useEffect, useState } from 'react';
import Portfolio from './Portfolio';

function App() {
  const [showSection, setShowSection] = useState(false)
  useEffect(() => {
    console.log('yes..');
    window.scrollTo(0, 0);
  },[])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSection(true)
    },2600)
    
    return () => {
      clearTimeout(timeoutId)
    }
  },[])

  return (
    <div className="app bg-[#191927]">
      <Header />
      {
        showSection ? (
          <Portfolio />
        ):(
          <Load />
        )
      }
    </div>
  )
}

export default App
