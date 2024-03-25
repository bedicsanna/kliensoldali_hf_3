import React from 'react'
import sorozatok from '../alap_mappa/sorozatok'

function CardModal({selectedSr, setSelectedSr, theme}) {
    const handleClick = (e)=> {
        setSelectedSr(null)
      }
    return (
        selectedSr && (<>
            {sorozatok.map( e => 
            <div id="modal" className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${e.cim===selectedSr.cim ? "visible": "invisible"}`} key={e.cim}>
                <div className="bg-white p-6 rounded-lg max-w-md"  style={theme !== null ? {background: theme.card_bg} : {}}>
                    <h2 className="text-xl font-semibold mb-2" id="modalTitle">{e.cim}</h2>
                    <img src={e.kep}>
                    </img>
                    <p id="modalContent" className="text-amber-700"  style={theme !== null ? {color: theme.secondary_text} : {}}>{e.leiras}</p>
                    <p id="imdbRating" className="text-amber-700" style={theme !== null ? {color: theme.secondary_text} : {}}>IMDb értékelés: {e.imdb}</p>
                    <p id="seasons" className="text-amber-700" style={theme !== null ? {color: theme.secondary_text} : {}}>Évadok száma: {e.evadok}</p>
                    <button id="closeModal" className="mt-4 bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-600" style={theme !== null ? {background: theme.button} : {}} onClick={()=> handleClick(e)}>Bezárás</button>
                </div>
            </div>)}
        </>)
    )
}

export default CardModal