import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardContainer from './CardContainer'
import CardModal from './CardModal'
import sorozatok from '../alap_mappa/sorozatok'
import themes from '../src/themes'

function App() {
  const [selectedSr, setSelectedSr] = useState(null)
  const [theme, setTheme] = useState(null);

  const handleThemeChange = (selectedTheme) => {
    if (Object.keys(themes).includes(selectedTheme)){
      selectedTheme = themes[selectedTheme]
      setTheme(selectedTheme)
      document.body.style.backgroundColor = selectedTheme.bg
    }
    else {
      setTheme(null);
      document.body.style.backgroundColor = ""
    }
  };

  return (
    <>
      <div className="text-right text-amber-800 text-4xl" style={theme !== null ? {color: theme.text} : {}}>
        <select className='select max-w-xs bg-amber-100' style={theme !== null ? {background: theme.bg} : {}} value={ theme !== null ? theme.name : "amber"} onChange={(e) => handleThemeChange(e.target.value)}>
          <option value="amber">amber</option>
          <option value="lime">lime</option>
          <option value="zinc">zinc</option>
          <option value="digby">digby</option>
          <option value="rose gold">rose gold</option>
          <option value="talon">talon</option>
        </select>
      </div>
      <h1 className="text-4xl font-bold text-center mb-4 text-amber-800" style={theme !== null ? {color: theme.text} : {}}>Sorozatok</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <CardContainer selectedSr={selectedSr} setSelectedSr={setSelectedSr} theme={theme} />
      </div>
      <CardModal selectedSr={selectedSr} setSelectedSr={setSelectedSr} theme={theme}/>
    </>
  )
}

export default App
