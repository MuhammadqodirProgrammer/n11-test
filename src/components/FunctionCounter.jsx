import {useState} from "react"

  export const FunctionCounter = ()=>{
    // [boshlangichQiymat , Holatniozgartiruvchi Funktion]
const [count , setCount] =useState(0)

    return (
        <>
            <h1> Count {count}   </h1>

            <button onClick={()=>setCount(count - 1)}> kamytir</button>
            <button onClick={()=>setCount(count + 1)}> oshir</button>
        </>
    )
}

