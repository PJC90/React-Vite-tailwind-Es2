import { useEffect, useState } from "react"

function Example (){
    const initialCount = parseInt(sessionStorage.getItem("count"))  || 0
    const [count, setCount] = useState(initialCount)
    // const handleClick = () => {
    //     setCount(count +1)
    //     document.title = `Conteggio: ${count}`
    //  SENZA USE EFFECT NON SI AGGIORNA IN AUTOMATICO IL CONTATORE NEL TITOLO DELLA PAGINA
    // }
    useEffect(()=>{
        sessionStorage.setItem("count", count.toString())
        document.title=`Conteggio: ${count}`
    },[count])
    return(
        <div>
            <p>Conteggio:{count}</p>
            <button onClick={()=>(setCount(count+1))}>Incrementa</button>
            <button onClick={()=>(sessionStorage.removeItem("count"), setCount(0))}>Svuota Contatore</button>
        </div>
    )
}
export default Example