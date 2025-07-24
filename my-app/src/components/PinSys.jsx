    import React, { useState,useEffect } from "react";

    const PinSys = ({student,removeStudent,getPins}) => {
    const [greenPin, setGreenPins] = useState(0)
    const [bluePin, setBluePins] = useState(0)
    const [redPin, setRedPins] = useState(0)
    const [behavior,setBehavior] = useState("unkown")


    useEffect(() => {
        
        getPins(greenPin,bluePin,redPin,behavior)
    }, [greenPin, bluePin, redPin, behavior]); 

    const unkownBehavior = ()=> {
        let behave = ''
         if( greenPin===0  && bluePin===0 && redPin===0){
        behave = "excellent"
    }
    else if(greenPin>3  && bluePin===0 && redPin===0){
        behave = "not bad"
    }
    else if(greenPin===0  && bluePin>3 && redPin===0){
        behave = "bad"
    }
    else if(greenPin===0  && bluePin===0 && redPin>3){
        behave = "very bad"
    }

    else if(greenPin===0  && bluePin===0 && redPin===3){
        behave = "delinquent"
    }
    setBehavior(behave)
    getPins(greenPin,bluePin,redPin)
    }
    

   
     useEffect(() => {
        unkownBehavior()
}, [greenPin, bluePin, redPin])


    const addGreen = () => {
        if (greenPin < 3)  {
        setGreenPins(greenPin + 1) 
        } else {
        setGreenPins(0)
        if(bluePin<3) {setBluePins(bluePin + 1)}

        else{
            setBluePins(0)
            setRedPins(redPin + 1)
        }   
        }
    }

    const addBlue = () => {
        if (bluePin < 3) {
        setBluePins(bluePin + 1)
        } else {
        setBluePins(0)
        if(redPin < 3){setRedPins(redPin + 1)}
        }
    }

    const addRed = () => {
        setRedPins(redPin + 1)
    }


    return (
        <div
        className="pin-system"
        >
        <div className="pin-card">
            <div>
            <img src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/pin2_green.png"alt="Green Pin"className="pin-image"onClick={addGreen}/>{greenPin}
            </div>
            <div>
            <img src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/pin2_blue.png" alt="Blue Pin"className="pin-image"onClick={addBlue}/>   {bluePin}
            </div>
            <div><img src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/pin2_red.png" alt="Red Pin"className="pin-image" onClick={addRed}/>  {redPin}
            </div>
        </div>
            {redPin === 3 && ( removeStudent(student.id))}

        </div>
    )
    }

    export default PinSys