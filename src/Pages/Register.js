import { useContext, useState } from "react"
import { melumatlarContext } from "../Context/MelumatlarContext"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function Register () {
  
        const inp1 = useRef()
        const inp2 = useRef()
        const inp3 = useRef()
        const inp4 = useRef()
        const inp5 = useRef()
        const inp6 = useRef()
        const inp7 = useRef()
        const gonder = () => {
    if(inp1.current.value.trim() == "") {
        alert("Ad Boshdur")
        return
    } 
    if(inp2.current.value.trim() == "") {
        alert("Soyad Bosdur")
        return
    }
    if(inp3.current.value.trim() == "") {
        alert("Soyad Bosdur")
        return
    }
    if(inp4.current.value.trim() == "") {
        alert("Olke Bosdur")
        return
    }
    if(inp5.current.value.trim() == "") {
        alert("Yas Bosdur")
        return
    }
    if(inp6.current.value.trim() == "") {
        alert("Parol Bosdur")
        return
    }
    if(inp7.current.value.trim() == "") {
        alert("Parol2 Bosdur")
        return
    } if(inp6.current.value !== inp7.current.value) {
        alert("Parollar eyni deyil")
        return
    }
    setVisible(true)
    navigate('/')
    }
    

    
    const [state, dispatch] = useContext(melumatlarContext)
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    return (
        <>
         <div style={{border: "1px solid black",width: "30%", textAlign: "center", alignItems: "center",justifyContent: "center", marginLeft: "30%", marginTop: "1%"}}>
                
                <div>
                <h2>
                       Qeydiyyat
                    </h2>
                    <input type="text"ref={inp1} placeholder="Adinizi yazin" onChange={e => dispatch({method: "ad", payload: e.target.value})} />
                </div>
                <div> 
                    <input type="text" ref={inp2} placeholder="Soyadinizi yazin!"   onChange={e => dispatch({method: "soyad", payload: e.target.value})} />
                </div>
                <div> 
                    <input type="text" ref={inp3} placeholder="Emailinizi yazin!"  onChange={e => dispatch({method: "email", payload: e.target.value})}/>
                </div>
                <div> 
                    <input type="text"ref={inp4} placeholder="Yasadiginiz olke"  onChange={e => dispatch({method: "olke", payload: e.target.value})}/>
                </div>
                <div> 
                    <input type="number" ref={inp5} placeholder="Yasiniz"  onChange={e => dispatch({method: "yas", payload: e.target.value})}/>
                </div>
                <div>
                    <input type="number" ref={inp6} placeholder="Parolunuzu yazin!"  onChange={e => dispatch({method: "parol", payload: e.target.value})}/>
                </div>
                <div> 
                    <input type="number" ref={inp7} placeholder="Parolu Tekrar Yazin"  onChange={e => dispatch({method: "parol", payload: e.target.value})}/>
                </div>
                <button onClick={gonder}>Gonder</button>
                </div>
             
        </>
    )
}