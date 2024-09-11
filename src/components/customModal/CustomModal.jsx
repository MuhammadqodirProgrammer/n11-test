import { Button } from "@mui/material"
import { useState, useRef } from "react"

export const CustomModal = ({ open, setOpen, children, width = "500px", title = "" }) => {

    const overlayRef = useRef();
    const handleClose = () => setOpen(false);
    function clickOverlay(evt) {
        if (evt.target.matches(".overlay")) {
            handleClose()
        }
    }
    return (
        <>

            <div ref={overlayRef} onClick={clickOverlay} className={` overlay   ${open ? "open" : "hidden"} bg-[#000000db]  z-50  fixed h-[100vh] w-[100vw] top-0 left-0  flex items-center justify-center   `}>

                <div className="modal bg-white   p-5 rounded-xl " style={{
                    width: width
                }}    >

                    <div className="flex justify-between   " >
                        <h1 > {title}   </h1>

                        <button onClick={handleClose} className="bg-slate-900 text-white rounded-full  w-6 h-6 ">  X </button>     </div>
                    {children}
                </div>
            </div>
        </>
    )
}
