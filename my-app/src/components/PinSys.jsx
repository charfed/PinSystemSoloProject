import React, { useState, useEffect } from "react";

const PinSys = ({student,removeStudent,addPins}) => {
  const [greenPin, setGreenPins] = useState(student.greenPin || 0)
  const [bluePin, setBluePins] = useState(student.bluePin || 0)
  const [redPin, setRedPins] = useState(student.redPin || 0)
  const [warning,setWarning] = useState("")
  const [behavior,setBehavior] = useState("")



useEffect(() => {
  const green = Number(greenPin)
  const blue = Number(bluePin)
  const red = Number(redPin)

  if (red === 2) {
    setBehavior("Delinquent")
  } else if (red === 1 || blue >= 4) {
    setBehavior("Bad")
  } else if (blue >= 1  ||  green >= 4) {
    setBehavior("Average")
  } else if (green >= 1) {
    setBehavior("Good")
  } else if (green === 0 && blue === 0 && red === 0) {
    setBehavior("Excellent")
  } else {
    setBehavior("unknown")
  }
}, [greenPin, bluePin, redPin])


  const addGreen = () => {
    if (greenPin < 5) {
      setGreenPins(Number(greenPin) + 1)
    } else {
      setGreenPins(0)
      if (bluePin < 4) {
        setBluePins(Number(bluePin) + 1)
      } else {
        setBluePins(0)
        setRedPins(Number(redPin) + 1)
      }
    }
  }

  const minusGreen = () => {
    if (greenPin > 0) {setGreenPins(Number(greenPin) - 1)}
  }

  const addBlue = () => {
    if (bluePin < 4) {
      setBluePins(Number(bluePin) + 1)
    } else {
      setBluePins(0)
      if (redPin < 3) {
        setRedPins(Number(redPin) + 1)
      }
    }
  }

  const minusBlue = () => {
    if (bluePin > 0) {setBluePins(Number(bluePin) - 1)}
  }

  const addRed = () => {
    if (redPin < 3) {
    setRedPins(redPin + 1)
    setBluePins(0)
    setGreenPins(0)
    }
  }

  const minusRed = () => {
    if (redPin > 0) {setRedPins(Number(redPin) - 1)}
  }


 const changeBackVals = () => {
    setRedPins(student.redPin)
    setBluePins(student.bluePin)
    setGreenPins(student.greenPin)
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPins(student.id,{greenPin,bluePin,redPin,warning,behavior})
  }


  useEffect(() => {
    if (redPin === 3) {
      removeStudent(student.id)
    }
  }, [redPin, removeStudent, student.id])

  useEffect(() => {
  if (redPin === 2) {
    setWarning("Warning: one more red pin and the student is out of the class !")
  } else {
    setWarning("");
  }
}, [redPin])


  return (
    <div className="pin-system">
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="pin-card">

          <div className="pin-box">
            <img
              src="img/green_pin.png"
              alt="Green Pin"
              className="pin-image green"
            />
            <div className="pin-controls">
              <button type="button" className="pin-adjust minus" onClick={minusGreen}>−</button>
              <button type="button" className="pin-adjust plus" onClick={addGreen}>+</button>
            </div>
           <span className="pin-count">{greenPin}</span>
          </div>

          <div className="pin-box">
            <img
              src="img/blue_pin.png"
              alt="Blue Pin"
              className="pin-image blue"
            />
            <div className="pin-controls">
              <button type="button" className="pin-adjust minus" onClick={minusBlue}>−</button>
              <button type="button" className="pin-adjust plus" onClick={addBlue}>+</button>
            </div>
            <span className="pin-count">{bluePin}</span>
          </div>

          <div className="pin-box">
             <img
              src="img/red_pin.png"
              alt="Red Pin"
              className="pin-image red"
            />
            <div className="pin-controls">
              <button type="button" className="pin-adjust minus" onClick={minusRed}>−</button>
              <button type="button" className="pin-adjust plus" onClick={addRed}>+</button>
            </div>
            <span className="pin-count">{redPin}</span>
          </div>

        </div>
        <h4 className="behavior-display">Behavior: {behavior}</h4>

        {redPin === 2 && (
          <h3 className="warning">
            {warning}
          </h3>
        )}
      <div className="button-row">
      <button type="submit" className="btn btn-success">
          Save Pins
        </button>
        <button type="button" className="btn btn-secondary" onClick={changeBackVals}>
          Cancel
        </button>
</div>   
      </form>
    </div>
  )
}

export default PinSys