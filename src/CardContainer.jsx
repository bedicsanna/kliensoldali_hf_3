import React from 'react'
import sorozatok from '../alap_mappa/sorozatok'

function CardContainer({selectedSr, setSelectedSr, theme}) {
  const handleClick = (e)=> {
    setSelectedSr(e)
  }
  return (
    <>
      {sorozatok.map( e =>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden"
        style={theme !== null ? {background: theme.card_bg} : {}}
        key={e.cim} 
        onClick={()=> handleClick(e)}>
          <img src={e.kep}>
          </img>
          <div className="p-4 line-clamp-2">
            <h2 className="text-xl font-semibold text-amber-800 mb-2" style={theme !== null ? {color: theme.text} : {}}>{e.cim}</h2>
            <p className="text-amber-700 line-clamp-2" style={theme !== null ? {color: theme.secondary_text} : {}}>{e.leiras}</p>
          </div>
      </div> )}
    </>
  )
}

export default CardContainer