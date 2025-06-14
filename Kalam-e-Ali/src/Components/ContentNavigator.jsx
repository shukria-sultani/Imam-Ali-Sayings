import React from 'react'

export default function ContentNavigator({currentNumber, totalNumber, onNext, onBack}) {
  return (
    <>
  
      <div className="container d-flex flex-row justify-content-between mt-5">
        <div className="countKalam  pt-3">
          <span className='display-6'>{currentNumber} از </span> <span className='display-6'>{totalNumber}</span>
        </div>

        <div className="navigator">
          <div className=''>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/circled-right-2.png" alt="circled-right-2" className='m-3' style={{cursor: "pointer"}} onClick={()=> onNext()}/>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/circled-left-2.png" alt="circled-left-2" style={{cursor: "pointer"}} onClick={()=> onBack()}/>
          </div>
        </div>
      </div>
    </>
  )
}