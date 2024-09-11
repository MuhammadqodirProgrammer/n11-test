import React from 'react'

const Heros = ({ name, color, bg }) => {

    return (
        <div style={{
            color: color,
            backgroundColor: bg
        }}>

            salam {name}
        </div>
    )
}

export default Heros
