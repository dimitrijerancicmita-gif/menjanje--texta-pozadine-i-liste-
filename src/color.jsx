import { use, useEffect, useState } from "react"

function Color() {
    const [boja , setBoja] = useState ("#000000")
    const [boja2 , setBoja2] = useState ("#000000")
    const [boja3 , setBoja3] = useState ("#000000")
    const [text , setText] = useState ("")

    useEffect(() => {
        document.body.style.backgroundColor = boja;
    }, [boja])
    
    return (
        <>
            <h1>neka linija</h1>
            <p style={{ color: boja2 }}>unesi boju pozadine</p>
            <input type = "color" value = {boja} onChange = {(e) => setBoja(e.target.value) } />

            <p style={{ color: boja2 }}>unesi boju teksta</p>
            <input type = "color" value = {boja2} onChange = {(e) => setBoja2(e.target.value) } />

            <p style={{ color: boja2 }}>unesi boju unete reci</p>
            <input type = "color" value = {boja3} onChange = {(e) => setBoja3(e.target.value) } />
            <input type = "text" value = {text} onChange = {(e) => setText(e.target.value) } />

            <ul style={{ color: boja3 }}>
                <li>{text}</li>
            </ul>

        </>
    )
}
export default Color
