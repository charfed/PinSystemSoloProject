import React, { useState,useEffect } from "react";

const PinSys = ({student,removeStudent,getPins}) => {
  const [greenPin, setGreenPins] = useState(0)
  const [bluePin, setBluePins] = useState(0)
  const [redPin, setRedPins] = useState(0)


  getPins(greenPin,bluePin,redPin)  

  const addGreen = () => {
    if (greenPin < 3) {
      setGreenPins(greenPin + 1)
    } else {
      setGreenPins(0)
      setBluePins(bluePin + 1)
    }
  }

  const addBlue = () => {
    if (bluePin < 3) {
      setBluePins(bluePin + 1)
    } else {
      setBluePins(0)
      setRedPins(redPin + 1)
    }
  }

  const addRed = () => {
    setRedPins(redPin + 1)
    setBluePins(0)
    setGreenPins(0)
  }


  return (
     <div
      className="pin-system"
    >
      <div className="pin-card">
        <div>
          <img src="../../public/img/green_pin.png"alt="Green Pin"className="pin-image"onClick={addGreen}/>{greenPin}
        </div>
        <div>
          <img src="../../public/img/blue_pin.png" alt="Blue Pin"className="pin-image"onClick={addBlue}/>   {bluePin}
        </div>
        <div><img src="../../public/img/red_pin.png" alt="Red Pin"className="pin-image" onClick={addRed}/>  {redPin}
        </div>
      </div>
         {redPin === 3 && (
        <div className="crossed-out">Student is out!</div>
      )}

      </div>
  )
}

export default PinSys;