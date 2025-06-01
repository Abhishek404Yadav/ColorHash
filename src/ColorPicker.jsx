import { useState } from "react"

function ColorPicker(){
    const [color , setColor]=useState('#ffffff');
    return <div>
    <h1>Color Picker</h1>
    <div>
        <p style={{backgroundColor:color}}
        >This is the color : {color}</p>
    </div>
    <p>This is color picker</p>
    <input type="color" value={color} onChange={(e)=>{setColor(e.target.value)}} />
    </div>

}
export default ColorPicker