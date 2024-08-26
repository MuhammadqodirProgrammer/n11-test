import { useState, useEffect } from "react"


export const EffectComponent = (props) => {
    let { name, age } = props
    const [count, setCount] = useState(0)
    const [user, setUser] = useState(0)

    // let intervalId = setInterval(() => {
    //     console.log("salom interval");
    // }, 10000);

    useEffect(() => {
        console.log("Salom");
        return () => {
            console.log("Hayr");
        }
    }, []);

    console.log(props);


    return (
        <>
            <h1> {name + "" + age}</h1>
            <h1 className=" text-center text-5xl font-mono font-extrabold text-fuchsia-800  ">count  {count}   </h1>
            <div className="flex gap-3 justify-center  mt-5  ">
                <button className="bg-teal-500 py-1 px-4 text-white rounded-lg block  " onClick={() => setCount(count + 1)}>oshir</button>

                <button className="bg-teal-500 py-1 px-4 text-white rounded-lg block  " onClick={() => setCount(count - 1)}>kamytir</button>
            </div>
        </>
    )
}